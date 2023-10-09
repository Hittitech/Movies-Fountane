
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'

import Movies from '@/components/Movies'
import HomePage from '@/components/HomePage'

export const dynamic = 'force-dynamic'




export default async function Index() {

  //supabase authentication
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center  text-sm text-foreground">
          <div>
            <h1 className='font-bold text-2xl'>Welcome to Fountane movies app</h1>
          </div>
          {user ? (
            <div className="flex  items-center gap-4  text-right font-[poppins] font-bold">
              Hey, {user.email}!
              <LogoutButton />
            </div>
          ) : (
            <Link
              href="/login"
              className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Login
            </Link>
          )}
        </div>
      </nav>

      <div className="  w-3/4">
        
      {user?<Movies/>:<HomePage/>}
    </div>
    {user?<footer className=' align-bottom font-bold w-full bg-slate-200 text-center mt-4  p-2  '>
      Happy Assignment Verification
    </footer>:<></>}
    </div>
  )
}
