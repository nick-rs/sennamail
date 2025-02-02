import Link from 'next/link'
import type { Viewport } from 'next'

export const viewport: Viewport = {
    themeColor: 'black',
    height: 'device-height',
    width: 'device-width',
    initialScale: 1,
    colorScheme: 'dark light',
  }

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h2 className='text-stone-700 dark:text-white text-3xl font-bold animate-pulse' style={
                {
                animationDelay: '0.15s',
                animationFillMode: 'forwards',
                animationDuration: '1.5s',
                animationIterationCount: Infinity,
                animationTimingFunction: 'ease-out'
                }
            }>404 - <span className='text-blue-400'>Not Found</span></h2>
            <p className='mt-5 text-stone-700 dark:text-white'>Looks like you've wandered into uncharted territory!</p>
            <Link className='mt-8 font-bold text-stone-700 dark:text-white' href='/'>Click me to go home!</Link>
        </div>
    )
}