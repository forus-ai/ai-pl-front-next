/* eslint-disable no-useless-escape */
import Document, { Html, Head, Main, NextScript } from 'next/document';

const SITE_NAME = 'FICL';
const SITE_TITLE = 'FICL';
const SITE_DESCRIPTION = 'FICL';
const SITE_IMAGE = 'https://ficl.jpg';
const SITE_URL = 'https://ficl.co.kr';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  redirectIEtoEdge() {
    return {
      __html: `<script>
      if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        window.location = 'microsoft-edge:' + window.location;
        setTimeout(function() {
          window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
        }, 1);
      }
    </script>`,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Type" content="text/xml; charset=utf-8" />
          <link rel="canonical" href={SITE_URL} />
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={SITE_URL} />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* <link rel="manifest" href="/manifest.json" />
          <script dangerouslySetInnerHTML={this.redirectIEtoEdge()} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
