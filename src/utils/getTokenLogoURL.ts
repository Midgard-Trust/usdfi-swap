import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
}

const getTokenLogoURL = (token?: Token) => {
  // IF STABLE
  if (token.address === "0xE7Df6907120684add86f686E103282Ee5CD17b02") {
    return `images/tokens/stable_logo_icon.svg`
  }
  // if USDFI
  if (token.address === "0x7DF1938170869AFE410098540c051A8A50308988") {
    return `images/tokens/usdfi_icon.svg`
  }

  if (token && mapping[token.chainId]) {
    return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${token.address}/logo.png`
  }
  return null
}

export default getTokenLogoURL
