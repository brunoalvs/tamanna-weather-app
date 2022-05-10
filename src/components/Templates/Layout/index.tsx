import { HeaderNavigation } from '../../Organisms/HeaderNavigation'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>
        <HeaderNavigation />
        {children}
      </main>
    </>
  )
}
