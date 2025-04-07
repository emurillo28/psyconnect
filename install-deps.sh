#!/bin/bash

# Clean up existing installation
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml

# Install core dependencies
npm install next@latest react@latest react-dom@latest

# Install UI dependencies
npm install @radix-ui/react-avatar @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-slot @radix-ui/react-icons @radix-ui/react-radio-group @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-progress @radix-ui/react-switch @radix-ui/react-tabs

# Install utility dependencies
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate next-themes lucide-react

# Install AWS dependencies
npm install aws-amplify @aws-amplify/auth @aws-amplify/core

# Install type definitions
npm install -D @types/node @types/react @types/react-dom typescript

# Install development dependencies
npm install -D autoprefixer postcss tailwindcss eslint eslint-config-next

# Generate TypeScript configuration if it doesn't exist
if [ ! -f "tsconfig.json" ]; then
  npx tsc --init
fi

# Install all dependencies
npm install

echo "Installation complete! Run 'npm run dev' to start the development server." 