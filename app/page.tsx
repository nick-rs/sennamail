import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: 'black',
  height: 'device-height',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
}

export default function Home() {
    return (
        <>
        <div className='z-10 w-full max-w-xl px-5 xl:px-0 mx-auto mt-20 md:mt-32'>
        <h1
          className="hover:animate-pulse bg-gradient-to-br from-black to-stone-500 dark:from-white dark:to-stone-400 text-transparent bg-clip-text text-4xl font-bold text-center md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards", animationDuration: "1.5s", animationIterationCount: "1", animationTimingFunction: "ease-in-out" }}
        >
          senna.email
        </h1>
        <p className='text-center mt-5 text-lg text-gray-400'>
            Encrypted no-log email service.
        </p>
        </div>
        </>
    )
}