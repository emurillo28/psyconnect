# The Soul App Frontend

A modern mental health support platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **User Authentication**: Secure login and registration with AWS Amplify
- **Avatar System**: Customizable avatars with expressions and accessories
- **Gamification**: Points, levels, achievements, and rewards
- **Notifications**: Real-time updates for appointments, assessments, and achievements
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode Support**: Comfortable viewing in any lighting condition

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: AWS Amplify
- **Icons**: Lucide React
- **State Management**: React Hooks

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- AWS account (for authentication)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/the-soul-app.git
   cd the-soul-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_AWS_REGION=your-aws-region
   NEXT_PUBLIC_USER_POOL_ID=your-user-pool-id
   NEXT_PUBLIC_USER_POOL_CLIENT_ID=your-client-id
   NEXT_PUBLIC_API_BASE_URL=your-api-base-url
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
the-soul-app/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── profile/           # Profile pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Avatar.tsx        # Avatar component
│   ├── Layout.tsx        # Main layout
│   └── ...               # Other components
├── hooks/                # Custom React hooks
│   ├── useAvatar.ts     # Avatar hook
│   ├── useGamification.ts # Gamification hook
│   └── ...              # Other hooks
├── lib/                  # Utility functions
│   ├── api.ts           # API client
│   └── config.ts        # Configuration
├── public/              # Static assets
└── styles/             # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@thesoulapp.com or visit our [website](https://thesoulapp.com). 
