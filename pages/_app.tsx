import '../styles/globals.css'
import EmptyLayout from '@/components/layout/empty'
import { AppPropsWithLayout } from '@/models/comon'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
