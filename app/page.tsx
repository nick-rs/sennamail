import type { Viewport } from 'next'
import { SignupForm } from './ui/signup-form'
 
export const viewport: Viewport = {
  themeColor: 'black',
  height: 'device-height',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
}

export default function Home() {
    return (
      // Main Content - Home Page
      // Senna ©️ 2025 - All Rights Reserved
      <>
        <div className='z-10 w-full max-w-xl px-5 xl:px-0 mx-auto mt-20 md:mt-32'>
        <h1
          className="hover:animate-pulse text-4xl font-bold text-center text-stone-700 dark:text-white md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards", animationDuration: "1.5s", animationIterationCount: "5", animationTimingFunction: "ease-in-out" }}
        >
          senna.<span className='bg-gradient-to-br from-stone-700 to-blue-800 dark:from-white dark:to-blue-400 text-transparent bg-clip-text'>mail</span>
        </h1>
        <p className='text-center mt-5 text-lg text-stone-500 dark:text-stone-400'>
            Encrypted no-log email service.
        </p>
        <div className='mt-10 p-5 dark:bg-stone-950 dark:opacity-25 rounded-3xl'>
          <SignupForm>
          // Signup Form
          </SignupForm>
        </div>
        </div>
      </>
    )
}