import '@/styles/globals.css'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

export default function App({ Component, pageProps }) {
  return (
  <>
    <div className="SpaceBottom" ></div>

    <Header>
      <Component {...pageProps} />
    </Header>

    <Navigation>
      <Component {...pageProps} />
    </Navigation>

    <div className="SpaceBottom" ></div>

  </>
  )
}
