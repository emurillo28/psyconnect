import React from 'react';
import { useGamification } from '../hooks/useGamification';

export const Achievements: React.FC = () => {
  const { getUnlockedAchievements, getLockedAchievements } = useGamification();
  const unlocked = getUnlockedAchievements();
  const locked = getLockedAchievements();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Achievements</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Unlocked Achievements */}
        {unlocked.map((achievement) => (
          <div
            key={achievement.id}
            className="p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <div>
                <h4 className="font-medium text-green-800">{achievement.title}</h4>
                <p className="text-sm text-green-600">{achievement.description}</p>
                <p className="text-xs text-green-500 mt-1">
                  Unlocked: {new Date(achievement.unlockedAt!).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Locked Achievements */}
        {locked.map((achievement) => (
          <div
            key={achievement.id}
            className="p-4 bg-gray-50 border border-gray-200 rounded-lg opacity-50"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-500">🔒</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-600">{achievement.title}</h4>
                <p className="text-sm text-gray-500">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 