import React from 'react'
import Link from 'next/link'
import { LayoutProps } from '@/models/index'

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Link href={'/'}>
        <a>home</a>
      </Link>
      <Link href={'/notFound'}>
        <a>not found</a>
      </Link>
      <div>{children}</div>
    </div>
  )
}
export default MainLayout
