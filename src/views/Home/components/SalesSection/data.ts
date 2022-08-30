import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. No registration, no hassle.'),
  bodyText: t('Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap?chainId=56&outputCurrency=0xE7Df6907120684add86f686E103282Ee5CD17b02',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.usdfi.com/usdfi-working-paper-v2/abstract',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'defi_neil_pic', alt: t('defi_neil') },
     
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('USDFI makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: 'https://app.usdfi.com/stake',
    text: t('Explore'),
    external: true,
  },
  secondaryButton: {
    to: 'https://docs.usdfi.com/usdfi-working-paper-v2/abstract',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'stable_logo_icon', alt: t('STABLE') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('CAKE makes our world go round.'),
  bodyText: t(
    'CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56',
    text: t('Buy CAKE'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: t('Small 3d pancake') },
      { src: 'top-right', alt: t('Small 3d pancake') },
      { src: 'coin', alt: t('CAKE token') },
      { src: 'top-left', alt: t('Small 3d pancake') },
    ],
  },
})
