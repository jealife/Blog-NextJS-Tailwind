import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <main className='text-center m-auto flex flex-col  w-full items-center justify-center py-20'>
        <Image src='/404.svg' width={500} height={500} className='w-96 ' />
        <p className='text-xl font-semibold flex gap-1' >Go to<Link href={'/'} className='underline text-blue-800 '> Home </Link></p>
    </main>
  )
}
