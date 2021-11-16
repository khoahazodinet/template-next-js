import '../styles/globals.css'

import '@/styles/Home.scss'
import '@/styles/common/calculatorInputStyles.scss'
import '@/styles/common/calculatorOuputStyles.scss'

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
