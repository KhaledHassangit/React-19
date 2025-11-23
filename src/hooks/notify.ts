import { toast as sonnerToast } from 'sonner';
import { CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';
import React from 'react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
};

const colorMap = {
  success: 'text-green-600',
  error: 'text-red-600',
  info: 'text-blue-600',
  warning: 'text-yellow-600',
};

const bgMap = {
  success: 'bg-green-50 border-green-200',
  error: 'bg-red-50 border-red-200',
  info: 'bg-blue-50 border-blue-200',
  warning: 'bg-yellow-50 border-yellow-200',
};

const titleColorMap = {
  success: 'text-green-900',
  error: 'text-red-900',
  info: 'text-blue-900',
  warning: 'text-yellow-900',
};

export const toast = (message: string, type: ToastType = 'info') => {
  const Icon = iconMap[type];
  const iconElement = React.createElement(Icon, { className: `w-5 h-5 ${colorMap[type]}` });

  const toastFn = sonnerToast[type];
  toastFn(message, {
    duration: 2500,
    icon: iconElement,
    classNames: {
      toast: `rounded-lg shadow-lg border ${bgMap[type]}`,
      title: `font-medium ${titleColorMap[type]}`,
      icon: 'mr-2'
    },
  });
};