import { useState, useEffect } from 'react';
import { ApiClient } from '../lib/api';
import { config } from '../lib/config';

interface GamificationState {
  level: number;
  points: number;
  title: string;
  nextLevelPoints: number;
  rewards: {
    unlocked: string[];
    available: string[];
  };
  streak: number;
  achievements: {
    id: string;
    title: string;
    description: string;
    unlocked: boolean;
    unlockedAt?: string;
  }[];
}

export const useGamification = () => {
  const [state, setState] = useState<GamificationState>({
    level: 1,
    points: 0,
    title: 'New Soul',
    nextLevelPoints: 500,
    rewards: {
      unlocked: [],
      available: [],
    },
    streak: 0,
    achievements: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadGamificationState();
  }, []);

  const loadGamificationState = async () => {
    try {
      setLoading(true);
      const data = await ApiClient.getGamificationState();
      setState(data);
    } catch (err) {
      setError('Failed to load gamification state');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const claimReward = async (rewardId: string) => {
    try {
      setLoading(true);
      await ApiClient.claimReward(rewardId);
      setState(prev => ({
        ...prev,
        rewards: {
          ...prev.rewards,
          unlocked: [...prev.rewards.unlocked, rewardId],
          available: prev.rewards.available.filter(id => id !== rewardId),
        },
      }));
    } catch (err) {
      setError('Failed to claim reward');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getLevelProgress = () => {
    const currentLevel = config.gamification.levels.find(l => l.level === state.level);
    const nextLevel = config.gamification.levels.find(l => l.level === state.level + 1);
    
    if (!currentLevel || !nextLevel) return 0;
    
    const pointsInLevel = state.points - currentLevel.points;
    const levelRange = nextLevel.points - currentLevel.points;
    
    return (pointsInLevel / levelRange) * 100;
  };

  const getNextReward = () => {
    return state.rewards.available[0];
  };

  const getUnlockedAchievements = () => {
    return state.achievements.filter(a => a.unlocked);
  };

  const getLockedAchievements = () => {
    return state.achievements.filter(a => !a.unlocked);
  };

  return {
    state,
    loading,
    error,
    claimReward,
    getLevelProgress,
    getNextReward,
    getUnlockedAchievements,
    getLockedAchievements,
  };
}; 