import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
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
        label: t('Trade'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
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
        // icon: EarnIcon,
        // fillIcon: EarnFillIcon,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
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
        // icon: TrophyIcon,
        // fillIcon: TrophyFillIcon,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: t('Mint'),
        href: 'https://app.usdfi.com/mint',
        // icon: TrophyIcon,
        // fillIcon: TrophyFillIcon,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: t('Stability Vaults'),
        href: '#',
        // icon: TrophyIcon,
        // fillIcon: TrophyFillIcon,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: t('Treasury'),
        href: 'https://dashboard.usdfi.com/',
        // icon: TrophyIcon,
        // fillIcon: TrophyFillIcon,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: t('Affiliate'),
        href: 'https://app.usdfi.com/affiliate',
        // icon: TrophyIcon,
        // fillIcon: TrophyFillIcon,
        hideSubNav: true,
        supportChainIds: [ChainId.BSC],
        items: [
        ],
      },
      {
        label: '',
        href: '/info',
        icon: MoreIcon,
        hideSubNav: true,
        items: [
          // {
          //   label: t('Info'),
          //   href: '/info',
          //   supportChainIds: [ChainId.BSC],
          // },
          // {
          //   label: t('IFO'),
          //   href: '/ifo',
          //   supportChainIds: [ChainId.BSC],
          //   image: '/images/ifos/ifo-bunny.png',
          // },
          // {
          //   label: t('Voting'),
          //   href: '/voting',
          //   supportChainIds: [ChainId.BSC],
          //   image: '/images/voting/voting-bunny.png',
          // },
          // {
          //   type: DropdownMenuItemType.DIVIDER,
          // },
          // {
          //   label: t('Leaderboard'),
          //   href: '/teams',
          //   supportChainIds: [ChainId.BSC],
          //   image: '/images/decorations/leaderboard.png',
          // },
          // {
          //   type: DropdownMenuItemType.DIVIDER,
          // },
          // {
          //   label: t('Blog'),
          //   href: 'https://medium.com/pancakeswap',
          //   type: DropdownMenuItemType.EXTERNAL_LINK,
          // },
          // {
          //   label: t('Docs'),
          //   href: 'https://docs.pancakeswap.finance',
          //   type: DropdownMenuItemType.EXTERNAL_LINK,
          // },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
    ].map((item) => addMenuItemSupported(item, chainId))

export default config
