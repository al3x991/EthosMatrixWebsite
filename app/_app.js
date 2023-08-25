import { useRouter } from 'next/router';
import React from 'react'

const App = ({ Component, pageProps}) => {
    const router = useRouter();
  return (
    <div key={router.pathname}>
      <Component {...pageProps} />
    </div>
  )
}

export default App;