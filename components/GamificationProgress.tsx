import React from 'react';
import { useGamification } from '../hooks/useGamification';
import { config } from '../lib/config';

export const GamificationProgress: React.FC = () => {
  const { state, loading, error, getLevelProgress } = useGamification();

  if (loading) {
    return (
      <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse" />
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-sm">
        Failed to load progress
      </div>
    );
  }

  const progress = getLevelProgress();
  const currentLevel = config.gamification.levels.find(l => l.level === state.level);
  const nextLevel = config.gamification.levels.find(l => l.level === state.level + 1);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium">
          Level {state.level} - {currentLevel?.title}
        </div>
        <div className="text-sm text-gray-500">
          {state.points} / {nextLevel?.points || 'Max'} points
        </div>
      </div>

      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>{currentLevel?.points} points</span>
        <span>{nextLevel?.title || 'Max Level'}</span>
      </div>

      {state.streak > 0 && (
        <div className="mt-2 text-sm text-green-500">
          🔥 {state.streak} day streak
        </div>
      )}
    </div>
  );
}; 