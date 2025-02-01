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
        <main>
            <h1 className="text-2xl font-bold text-center sm:text-1xl">senna.email</h1>
        </main>
    )
}