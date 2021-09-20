import Layout from '../components/Layout.js'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  // Passing Component tag as an parameter to my
  // Layout component.
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp