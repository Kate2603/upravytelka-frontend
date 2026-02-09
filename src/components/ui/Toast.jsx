import React from 'react';
import styles from './Toast.module.css';

export default function Toast({ type = 'idle', children }) {
  if (!children) return null;

  const cls = [
    styles.toast,
    type === 'ok' ? styles.ok : '',
    type === 'error' ? styles.error : '',
  ]
    .filter(Boolean)
    .join(' ');

  const role = type === 'error' ? 'alert' : 'status';

  return (
    <div className={cls} role={role} aria-live="polite">
      {children}
    </div>
  );
}
