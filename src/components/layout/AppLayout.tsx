import React, { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-custom">
      <div className="min-h-screen backdrop-blur-sm py-8">
        {children}
      </div>
    </div>
  );
}