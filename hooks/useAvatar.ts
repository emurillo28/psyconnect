import { useState, useEffect } from 'react';
import { ApiClient } from '../lib/api';
import { config } from '../lib/config';

interface AvatarState {
  expression: string;
  accessories: string[];
  level: number;
  points: number;
  unlockedAccessories: string[];
}

export const useAvatar = () => {
  const [avatarState, setAvatarState] = useState<AvatarState>({
    expression: 'neutral',
    accessories: [],
    level: 1,
    points: 0,
    unlockedAccessories: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAvatarState();
  }, []);

  const loadAvatarState = async () => {
    try {
      setLoading(true);
      const state = await ApiClient.getAvatarState();
      setAvatarState(state);
    } catch (err) {
      setError('Failed to load avatar state');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateExpression = async (expression: string) => {
    try {
      setLoading(true);
      await ApiClient.updateAvatarExpression(expression);
      setAvatarState(prev => ({ ...prev, expression }));
    } catch (err) {
      setError('Failed to update avatar expression');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const unlockAccessory = async (accessoryId: string) => {
    try {
      setLoading(true);
      await ApiClient.unlockAvatarAccessory(accessoryId);
      setAvatarState(prev => ({
        ...prev,
        unlockedAccessories: [...prev.unlockedAccessories, accessoryId],
      }));
    } catch (err) {
      setError('Failed to unlock accessory');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getExpressionImage = () => {
    return `${config.avatar.baseUrl}${config.avatar.expressions[avatarState.expression as keyof typeof config.avatar.expressions]}`;
  };

  const getAccessoryImage = (accessoryId: string) => {
    return `${config.avatar.baseUrl}/accessories/${accessoryId}.png`;
  };

  return {
    avatarState,
    loading,
    error,
    updateExpression,
    unlockAccessory,
    getExpressionImage,
    getAccessoryImage,
  };
}; 