#!/bin/bash

# Clean up existing installations
echo "Cleaning up existing installations..."
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Install core dependencies
echo "Installing core dependencies..."
npm install next@14.0.4 react@18.2.0 react-dom@18.2.0 @types/react@18.2.45 @types/react-dom@18.2.18 @types/node@20.10.5 typescript@5.3.3

# Install UI dependencies
echo "Installing UI dependencies..."
npm install @radix-ui/react-alert-dialog@1.0.5 @radix-ui/react-aspect-ratio@1.0.3 @radix-ui/react-accordion@1.1.2 @radix-ui/react-avatar@1.0.4 @radix-ui/react-checkbox@1.0.4 @radix-ui/react-collapsible@1.0.3 @radix-ui/react-context-menu@2.1.5 @radix-ui/react-dialog@1.0.5 @radix-ui/react-dropdown-menu@2.0.6 @radix-ui/react-hover-card@1.0.7 @radix-ui/react-icons@1.3.0 @radix-ui/react-label@2.0.2 @radix-ui/react-menubar@1.0.4 @radix-ui/react-navigation-menu@1.1.4 @radix-ui/react-popover@1.0.7 @radix-ui/react-progress@1.0.3 @radix-ui/react-radio-group@1.1.3 @radix-ui/react-scroll-area@1.0.5 @radix-ui/react-select@2.0.0 @radix-ui/react-separator@1.0.3 @radix-ui/react-slot@1.0.2 @radix-ui/react-slider@1.1.2 @radix-ui/react-switch@1.0.3 @radix-ui/react-tabs@1.0.4 @radix-ui/react-toast@1.1.5 @radix-ui/react-toggle@1.0.3 @radix-ui/react-toggle-group@1.0.3 @radix-ui/react-tooltip@1.0.7

# Install utility dependencies
echo "Installing utility dependencies..."
npm install class-variance-authority@0.7.0 clsx@2.1.0 tailwind-merge@2.2.1 tailwindcss-animate@1.0.7 next-themes@0.2.1 lucide-react@0.294.0 cmdk@0.2.0 embla-carousel-react@8.0.0 input-otp@1.0.0 react-day-picker@8.10.0 @types/react-day-picker@5.0.0 react-hook-form@7.49.3 react-resizable-panels@1.0.4 recharts@2.10.4 sonner@1.4.0 vaul@0.8.0 zod@3.22.4

# Install AWS dependencies
echo "Installing AWS dependencies..."
npm install aws-amplify@6.0.12

# Install development dependencies
echo "Installing development dependencies..."
npm install --save-dev autoprefixer@10.4.16 postcss@8.4.32 tailwindcss@3.3.0 eslint@8.56.0 eslint-config-next@14.0.4

# Generate TypeScript config if it doesn't exist
if [ ! -f tsconfig.json ]; then
    echo "Generating TypeScript configuration..."
    npx tsc --init
fi

echo "Installation complete!!" 