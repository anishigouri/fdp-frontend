import React from 'react';
import { toast } from 'react-toastify';
import { ToastStyled } from './styled';
import 'react-toastify/dist/ReactToastify.css';

type TypeNotification = 'success' | 'error' | 'warn' | 'info';

export const showToast = (type: TypeNotification, message: string): void => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};

const Notification: React.FunctionComponent = () => {
  return <ToastStyled />;
};

export default Notification;
