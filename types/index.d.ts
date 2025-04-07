import { ReactNode } from 'react';

export interface BaseProps {
  children?: ReactNode;
  className?: string;
}

export interface AuthProps extends BaseProps {
  isAuthenticated: boolean;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

export interface CalendarProps extends BaseProps {
  events: CalendarEvent[];
  onEventClick?: (event: CalendarEvent) => void;
  theme?: 'light' | 'dark';
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  color?: string;
}

export interface DashboardCardProps extends BaseProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export interface SectionHeaderProps extends BaseProps {
  title: string;
  actionLabel?: string;
  onActionClick?: () => void;
  actionIcon?: ReactNode;
}

export interface LoadingButtonProps extends BaseProps {
  isLoading: boolean;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export interface ErrorDisplayProps extends BaseProps {
  error: Error | string;
  onRetry?: () => void;
  retryLabel?: string;
}

export interface AuthHeaderProps extends BaseProps {
  title: string;
  subtitle?: string;
  logo?: ReactNode;
  logoSize?: number;
} 