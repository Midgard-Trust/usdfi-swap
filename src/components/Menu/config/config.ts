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
        //icon: BackForwardIcon,
        //fillIcon: BackForwardIcon,
        href: '/swap',
        showItemsOnMobile: false,
        items: [
          // {
          //   label: t('Swap'),
          //   href: '/swap',
          // },
          // {
          //   label: t('Limit'),
          //   href: '/limit-orders',
          //   supportChainIds: [ChainId.BSC],
          //   image: '/images/decorations/3d-coin.png',
          // },
          // {
          //   label: t('Liquidity'),
          //   href: '/liquidity',
          // },
          // {
          //   label: t('Perpetual'),
          //   href: `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT?theme=${perpTheme(
          //     isDark,
          //   )}`,
          //   type: DropdownMenuItemType.EXTERNAL_LINK,
          // },
          // {
          //   label: t('Transfer'),
          //   href: '/transfer',
          // },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
        //icon: TradeIcon,
        //fillIcon: TradeIcon,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        showItemsOnMobile: false,
        // image: '/images/decorations/pe2.png',
        items: [
          // {
          //   label: t('Farms'),
          //   href: '/farms',
          // },
          // {
          //   label: t('Pools'),
          //   href: '/pools',
          // },
        ],
      },
      {
        label: t('Stake'),
        href: 'https://app.usdfi.com/stake',
        showItemsOnMobile: false,
        //icon: VerifiedIcon,
        //fillIcon: VerifiedIcon,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: t('Mint'),
        href: 'https://app.usdfi.com/mint',
        showItemsOnMobile: false,
        //icon: ArrowForwardIcon,
        //fillIcon: ArrowForwardIcon,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: t('Stability Vaults'),
        href: '#',
        showItemsOnMobile: false,
        //icon: Cards,
        //fillIcon: Cards,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      /*{
        label: t('Treasury'),
        href: 'https://dashboard.usdfi.com/',
        showItemsOnMobile: false,
        //icon: ChartIcon,
        //fillIcon: ChartIcon,
        // hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: t('Affiliate'),
        href: 'https://app.usdfi.com/affiliate',
        showItemsOnMobile: false,
        //icon: SellIcon,
        //fillIcon: SellIcon,
        // hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },*/
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
