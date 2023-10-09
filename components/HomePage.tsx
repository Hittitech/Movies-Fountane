import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='width-3/4   text-center mt-12 py-12'>
      <div className='text-green-600 m-auto text-center justify-center mt-12 text-4xl'>
        uh oh! You need to Login first
        <Link
              href="/login"
              className="text-center justify-center py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Login
            </Link>
      </div>

    </div>
  )
}

export default HomePage