import Head from 'next/head'
import { useRouter } from 'next/router'
import { Lato } from 'next/font/google'

import settings from '../data/settings.js'
import { colors } from '../data/theme.js'
import Strategies from './strategies.js'
import Header from './header.js'
import Footer from './footer.js'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const Layout = ({ children }) => {
  const router = useRouter()
  const { locale } = router

  return (
    <div className={lato.className}>
      <Head>
        <title>{settings.text[locale].siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <div className="container main-container mx-auto">
        <Header />

        {children}

        <Strategies />

        <Footer />
      </div>

      <style jsx global>{`
        body {
          background: ${colors.background};
          font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          line-height: 1.2;
        }

        h1,
        h2,
        h3,
        h4 {
          font-weight: bold;
        }

        h2 {
          font-size: 22px;
          margin-bottom: 10px;
        }

        h3 {
          font-size: 16px;
        }

        h4 {
          font-size: 14px;
        }

        a {
          color: ${colors.link};
        }

        p {
          margin-bottom: 10px;
        }

        a:hover {
          color: ${colors.linkHover};
        }

        .btn {
          display: inline-block;
          color: #212529;
          text-align: center;
          vertical-align: middle;
          user-select: none;
          background-color: transparent;
          border: 1px solid transparent;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
          border-radius: 0.25rem;
          transition:
            color 0.15s ease-in-out,
            background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }

        .btn.disabled,
        .btn:disabled {
          opacity: 0.65;
          cursor: auto;
        }

        .btn-block {
          display: block;
        }

        .btn-light {
          background: ${colors.btnLight};
          color: ${colors.btnLightText};
        }

        .btn-reset {
          background: ${colors.resetBtn};
          color: ${colors.resetBtnText};
        }

        .btn-light:hover {
          color: ${colors.btnLightText};
          background: ${colors.btnLightHover};
        }

        .btn-dark {
          background: ${colors.btnDark};
          color: ${colors.btnDarkText};
        }

        .btn-dark:hover {
          background: ${colors.btnDarkHover};
        }

        .btn-dark:disabled {
          color: ${colors.btnDarkDisabled};
        }

        .btn-primary {
          color: #fff;
          background-color: #007bff;
          border-color: #007bff;
        }

        .btn-primary:hover {
          color: #fff;
          background-color: #0069d9;
          border-color: #0062cc;
        }

        .btn-secondary {
          color: #fff;
          background-color: #6c757d;
          border-color: #6c757d;
        }

        .btn-secondary:hover {
          color: #fff;
          background-color: #5a6268;
          border-color: #545b62;
        }

        .bg-dark {
          background-color: ${colors.cardDark};
        }

        .list-disc {
          list-style-type: disc;
        }
      `}</style>

      <style jsx>{`
        .main-container {
          max-width: 960px;
        }
      `}</style>
    </div>
  )
}

export default Layout
