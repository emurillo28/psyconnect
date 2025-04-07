import React from 'react';
import { useGamification } from '../hooks/useGamification';

interface Reward {
  id: string;
  title: string;
  description: string;
  claimed: boolean;
}

export const Rewards: React.FC = () => {
  const { state, claimReward, getNextReward } = useGamification();
  const nextRewardId = getNextReward();

  const handleClaimReward = async (rewardId: string) => {
    try {
      await claimReward(rewardId);
    } catch (error) {
      console.error('Failed to claim reward:', error);
    }
  };

  if (!state) {
    return <div>Loading rewards...</div>;
  }

  // Combine unlocked and available rewards
  const allRewards: Reward[] = [
    ...(state.rewards?.unlocked || []).map(id => ({
      id,
      title: `Reward ${id}`,
      description: 'You have unlocked this reward!',
      claimed: true
    })),
    ...(state.rewards?.available || []).map(id => ({
      id,
      title: `Reward ${id}`,
      description: 'Available to unlock',
      claimed: false
    }))
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Rewards</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allRewards.map((reward) => (
          <div
            key={reward.id}
            className={`p-4 rounded-lg border ${
              reward.claimed
                ? 'bg-gray-50 border-gray-200'
                : 'bg-yellow-50 border-yellow-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    reward.claimed ? 'bg-gray-300' : 'bg-yellow-400'
                  }`}
                >
                  <span className={reward.claimed ? 'text-gray-500' : 'text-yellow-800'}>
                    {reward.claimed ? '✓' : '🎁'}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-gray-600">{reward.description}</p>
                </div>
              </div>
              {!reward.claimed && (
                <button
                  onClick={() => handleClaimReward(reward.id)}
                  className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                >
                  Claim
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {nextRewardId && state.nextLevelPoints !== undefined && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-medium text-blue-800">Next Reward</h4>
          <p className="text-sm text-blue-600">
            Reward {nextRewardId} - Available to unlock
          </p>
          <p className="text-xs text-blue-500 mt-1">
            {state.nextLevelPoints - (state.points || 0)} points to go!
          </p>
        </div>
      )}
    </div>
  );
}; 