'use client'
import { MotionConfig } from 'framer-motion'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
