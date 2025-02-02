'use client'

import { ReactNode } from 'react';
import { signup } from '../actions/auth'
import { useActionState } from 'react'

export function SignupForm({ children }: { children: ReactNode }) {
    const [state, action, pending] = useActionState(signup, undefined)
    return (
        <form action={action} className='' method='post'>
        <div>
          <input className='w-full p-3 mt-5 bg-stone-800 text-white rounded-2xl' id="username" name="username" placeholder='Username'/>
        </div>
        {state?.errors?.username && <p>{state.errors.username}</p>}
   
        <div>
          <input className='w-full p-3 mt-5 bg-stone-800 text-white rounded-2xl' id="password" name="password" type="password" placeholder='Password'/>
        </div>
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <button className='w-full p-3 mt-5 rounded-md' disabled={pending} type="submit">
          Sign Up
        </button>
      </form>
    )
}