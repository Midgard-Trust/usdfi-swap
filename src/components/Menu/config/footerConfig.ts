import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t(''),
    items: [
      {
        label: t('Mint'),
        href: 'https://app.usdfi.com/mint',
        // isHighlighted: true,
      },
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      {
        label: t('Stake'),
        href: 'https://app.usdfi.com/stake',
      },
      {
        label: t('Lend/Borrow'),
        href: 'https://lending.usdfi.com/',
      },
      {
        label: '—',
      },
      {
        label: t('Affiliate'),
        href: 'https://app.usdfi.com/affiliate',
      },
    ],
  },
  {
    label: t(''),
    items: [
      {
        label: t('Treasury'),
        href: 'https://dashboard.usdfi.com/',
      },
      {
        label: t('Certik Audit'),
        href: 'https://www.certik.com/projects/usdfi',
      },
      {
        label: t('Docs'),
        href: 'https://docs.usdfi.com/usdfi-working-paper-v2/abstract',
      },
    ],
  },
  {
    label: t(''),
    items: [
      {
        label: 'Terms Of Service',
        href: 'https://usdfi.com/documents/USDFI-Terms-of-Service.pdf',
      },
      {
        label: t('Cookies Policy'),
        href: 'https://usdfi.com/documents/USDFI-Cookies-Policy.pdf',
      },
      {
        label: t('Privacy Policy'),
        href: 'https://usdfi.com/documents/USDFI-Privacy-Policy.pdf',
      },
      {
        label: t('Risk Disclaimer'),
        href: 'https://usdfi.com/documents/USDFI-risk-disclaimer.pdf',
      },
    ],
  },
]
