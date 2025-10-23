import React from 'react';
import styles from './ToastContainer.module.css';

export interface ToastContainerProps {
  children: React.ReactNode;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ children }) => {
  return <div className={styles.toastContainer}>{children}</div>;
};

