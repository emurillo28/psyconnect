export const config = {
  // AWS Configuration
  aws: {
    region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-west-1',
    cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || '',
      clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || '',
    },
  },

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.thesoulapp.com',
    wsUrl: process.env.NEXT_PUBLIC_WS_URL || 'wss://api.thesoulapp.com/ws',
  },

  // Feature Flags
  features: {
    avatar: true,
    gamification: true,
    assessments: true,
    diary: true,
    appointments: true,
    notifications: true,
  },

  // Avatar Configuration
  avatar: {
    baseUrl: process.env.NEXT_PUBLIC_AVATAR_URL || 'https://avatars.thesoulapp.com',
    defaultAvatar: '/avatars/default.png',
    expressions: {
      happy: '/avatars/expressions/happy.png',
      sad: '/avatars/expressions/sad.png',
      neutral: '/avatars/expressions/neutral.png',
      excited: '/avatars/expressions/excited.png',
      calm: '/avatars/expressions/calm.png',
    },
    accessories: {
      unlocked: [],
      locked: [],
    },
  },

  // Gamification Configuration
  gamification: {
    points: {
      assessment: 100,
      diaryEntry: 50,
      appointment: 200,
      streak: 25,
    },
    levels: [
      { level: 1, points: 0, title: 'New Soul' },
      { level: 2, points: 500, title: 'Growing Soul' },
      { level: 3, points: 1000, title: 'Enlightened Soul' },
      { level: 4, points: 2000, title: 'Wise Soul' },
      { level: 5, points: 5000, title: 'Master Soul' },
    ],
    rewards: {
      avatarAccessories: true,
      customThemes: true,
      premiumContent: true,
    },
  },

  // Assessment Configuration
  assessments: {
    types: ['mood', 'anxiety', 'depression', 'stress', 'custom'],
    frequency: {
      mood: 'daily',
      anxiety: 'weekly',
      depression: 'weekly',
      stress: 'weekly',
      custom: 'as_needed',
    },
  },

  // Notification Configuration
  notifications: {
    types: ['appointment', 'assessment', 'diary', 'achievement', 'system'],
    channels: ['email', 'push', 'in-app'],
    preferences: {
      appointment: ['email', 'push'],
      assessment: ['email', 'in-app'],
      diary: ['in-app'],
      achievement: ['push', 'in-app'],
      system: ['email'],
    },
  },
}; 