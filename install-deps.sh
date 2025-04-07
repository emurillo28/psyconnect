#!/bin/bash

# Clean up existing installation
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml

# Install core dependencies with types
npm install next@latest react@latest react-dom@latest @types/react@latest @types/react-dom@latest

# Install UI dependencies
npm install @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-accordion @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-icons @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip react-day-picker input-otp react-resizable-panels sonner embla-carousel-react recharts cmdk vaul

# Install utility dependencies
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate next-themes lucide-react

# Install AWS dependencies
npm install aws-amplify @aws-amplify/auth @aws-amplify/core

# Install development dependencies
npm install -D autoprefixer postcss tailwindcss eslint eslint-config-next typescript @types/node @types/react-day-picker

# Generate TypeScript configuration if it doesn't exist
if [ ! -f "tsconfig.json" ]; then
  npx tsc --init
fi

# Install all dependencies
npm install

echo "Installation complete! Run 'npm run dev' to start the development server." 