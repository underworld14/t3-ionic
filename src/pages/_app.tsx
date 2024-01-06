import Head from 'next/head';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import 'react-spring-bottom-sheet/dist/style.css';

import '../styles/global.css';
import '../styles/variables.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
