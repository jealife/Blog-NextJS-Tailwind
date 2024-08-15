import Image from 'next/image'
import React from 'react'

export default function notFound() {
  return (
    <main className='text-center m-auto flex  w-full items-center justify-center py-20'>
        <Image src='/404.svg' width={500} height={500} className='w-96 ' />
    </main>
  )
}
