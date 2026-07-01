

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mackbook Pro',

}

export default function RoorLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang={'en'}>
      <body className={`overflow-x-clip`}>{children}</body>
    </html>
  )
}