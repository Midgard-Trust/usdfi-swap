import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  BackForwardIcon,
  ChartIcon,
  LineGraphIcon,
  IfoIcon,
  TradeIcon,
  TokenPocketIcon,
  ArrowForwardIcon,
  SellIcon,
  VerifiedIcon,
  Cards,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { ChainId } from '@pancakeswap/sdk'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      {
        label: t('Swap'),
        href: '/swap',
        showItemsOnMobile: false,
        items: [
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        showItemsOnMobile: false,
        items: [

        ],
      },
      {
        label: t('Stake'),
        href: 'https://app.usdfi.com/stake',
        showItemsOnMobile: false,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: t('Mint'),
        href: 'https://app.usdfi.com/mint',
        showItemsOnMobile: false,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: t('Stability Vaults'),
        href: '#',
        showItemsOnMobile: false,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: '',
        href: '#',
        icon: MoreIcon,
        hideSubNav: false,
        showItemsOnMobile: true,
        items: [
          {
             label: t('Treasury'),
             href: 'https://dashboard.usdfi.com/',
             supportChainIds: [ChainId.BSC],
           },
           {
             label: t('Affiliate'),
             href: 'https://app.usdfi.com/affiliate',
             supportChainIds: [ChainId.BSC],
          },
          {
            label: t('Info'),
            href: '/info',
            supportChainIds: [ChainId.BSC],
         },
         
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
    ].map((item) => addMenuItemSupported(item, chainId))

export default config
