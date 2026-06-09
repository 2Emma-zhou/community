import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {useEffect} from 'react';

export default function HomeRedirect() {
  useEffect(() => {
    window.location.replace('/introduction');
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0;url=/introduction" />
        <link rel="canonical" href="/introduction" />
      </Head>
      <main>
        <p>
          Redirecting to <Link to="/introduction">Introduction</Link>.
        </p>
      </main>
    </>
  );
}
