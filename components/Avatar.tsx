import React from 'react';
import { useAvatar } from '../hooks/useAvatar';
import { useGamification } from '../hooks/useGamification';
import { config } from '../lib/config';

interface AvatarProps {
  size?: 'small' | 'medium' | 'large';
  showLevel?: boolean;
  showAccessories?: boolean;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'medium',
  showLevel = true,
  showAccessories = true,
  className = '',
}) => {
  const { avatarState, loading, error, getExpressionImage, getAccessoryImage } = useAvatar();
  const { state: gamificationState } = useGamification();

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
  };

  if (loading) {
    return <div className={`${sizeClasses[size]} ${className} animate-pulse bg-gray-200 rounded-full`} />;
  }

  if (error) {
    return (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center bg-red-100 rounded-full`}>
        <span className="text-red-500 text-sm">Error</span>
      </div>
    );
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Base Avatar */}
      <img
        src={getExpressionImage()}
        alt="Avatar"
        className="w-full h-full object-contain"
      />

      {/* Accessories */}
      {showAccessories && avatarState.accessories.map((accessoryId) => (
        <img
          key={accessoryId}
          src={getAccessoryImage(accessoryId)}
          alt={`Accessory ${accessoryId}`}
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      ))}

      {/* Level Badge */}
      {showLevel && (
        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-bold">
          Lvl {gamificationState.level}
        </div>
      )}

      {/* Points Badge */}
      {showLevel && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
          {gamificationState.points} pts
        </div>
      )}
    </div>
  );
}; 