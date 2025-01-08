'use client';
import { ReactNode } from 'react';
import { useLenis } from '../hooks/useLenis';

interface ScrollProviderProps {
  children: ReactNode;
}

export default function ScrollProvider({ children }: ScrollProviderProps) {
  useLenis();
  return <>{children}</>;
} 