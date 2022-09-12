import { PancakeTheme, ResetCSS, dark, light, ModalProvider } from '@pancakeswap/uikit'
import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Script from 'next/script'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import Head from 'next/head'
import { Menu } from '../components/Menu'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const StyledThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { resolvedTheme } = useNextTheme()
  return (
    <ThemeProvider theme={resolvedTheme === 'dark' ? dark : light} {...props}>
      {props.children}
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto Condensed', sans-serif;
  }
  html, body, #__next {
    height: 100%;
  }
  #__next {
    display: flex;
    flex-direction: column;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}

function MyApp({ Component, pageProps }: AppProps) {
  // FIXME: server render styled component className conflict
  const isMounted = useIsMounted()
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="The revolution will not be centralized. USDFI is the decentralized digital currency for decentralized finance and beyond. Blue-chip crypto collateral reserve. 100% transparent, real time on-chain treasury."
        />
        <meta name="theme-color" content="#3BFC14" />
        <meta name="twitter:image" content="" />
        <meta
          name="twitter:description"
          content="The revolution will not be centralized. USDFI is the decentralized digital currency for decentralized finance and beyond. Blue-chip crypto collateral reserve. 100% transparent, real time on-chain treasury."
        />
        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="USDFI - Decentralized dollars for the internet." />
        <title>USDFI</title>
      </Head>
      <NextThemeProvider>
        <StyledThemeProvider>
          <ModalProvider>
            <ResetCSS />
            <GlobalStyle />
            {isMounted && (
              <>
                <Menu />
                <Component {...pageProps} />
              </>
            )}
          </ModalProvider>
        </StyledThemeProvider>
      </NextThemeProvider>
    </>
  )
}

export default MyApp
