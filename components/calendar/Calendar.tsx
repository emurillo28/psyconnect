import React from 'react';
import { CalendarProps, CalendarEvent } from '@/types';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Calendar: React.FC<CalendarProps> = ({ 
  events, 
  onEventClick, 
  theme = 'light',
  className 
}) => {
  return (
    <div className={cn(
      "rounded-lg p-4",
      theme === 'light' ? 'bg-white' : 'bg-gray-100',
      className
    )}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "p-4 rounded-lg cursor-pointer",
              theme === 'light' ? 'bg-gray-50' : 'bg-white',
              'hover:shadow-md transition-shadow'
            )}
            onClick={() => onEventClick?.(event)}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">{event.title}</h3>
              <span className="text-sm text-gray-500">
                {event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            {event.description && (
              <p className="mt-2 text-sm text-gray-600">{event.description}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Calendar; 