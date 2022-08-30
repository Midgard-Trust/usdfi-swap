import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
  }
  body {
    background-color: #060607;
    background: #060607;

    img {
      height: auto;
      max-width: 100%;
    }
    h2, .bMPyhP {
      font-weight: 400;
    }
  }

  // Connect Wallet Header
  .StyledButton-sc-bf15f720-0.fYYrkM{
    background-color: #1c2230;
    font-color: #FFFFFF;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.6rem;

  }


  // Overlay
  .fySSve {
    background-color: rgba(0,0,0,0.8);
  }

  // Header Icons | Functions
  #open-settings-dialog-button-GLOBAL,
  .Box-sc-992b7a-1.jkjdwB{
    display: none;
  }
  .Menu__StyledNav-sc-aa822f51-1.cMjNYJ{
    background: transparent;
    background-color: transparent;
  }

  .NextLink__A-sc-a01cb22d-0.styles__StyledMenuItem-sc-c5403a41-1{
    color: #FFFFFF;
    font-size: 0.9rem;
    line-height: 1.6rem;
  }
    .NextLink__A-sc-a01cb22d-0.styles__StyledMenuItem-sc-c5403a41-1:hover,
    .NextLink__A-sc-a01cb22d-0.styles__StyledMenuItem-sc-c5403a41-1:active{
      color: #3bfc14;
      font-size: 0.9rem;
      line-height: 1.6rem;
      background-color: transparent;
    }
    

  //
  // Swap: Card, Icons, Buttons
  //

  // Hide Elements
  // Hide Graph Icon
  .blvtjX {
    display: none;
  }

  .StyledCard__StyledCardInner-sc-110bbcc2-1 {
    background: #060607;
    background-color: #060607;
    border-radius: 5px;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    padding: 1px 1px 3px 1px;
  } 
  .OFRqR {
    border-bottom: 0px solid #383241;
  }
  .IconButton-sc-1485c8cf-0 svg,
  .Svg-sc-9f43536d-0.bEIOQx{
    fill: #3bfc14;
    color: #3bfc14;
  }
  .StyledButton-sc-bf15f720-0.hEsYxv{
    border-radius: 5px;
    border: 2px solid #FFFFFF;
    background-color: #2172e5;
    height: 38px;
    font-size: 16px;
    font-weight: 400;
    line-height: 38px;
  }
  #swap-currency-input,
  #swap-currency-output{
    background-color: #1c2230;
    border-radius: 5px;
    padding: 12px 12px 12px 12px;
  }
  .CurrencyInputPanel__Container-sc-a10bfaaa-4{
    border-radius: 5px;
    background-color: #0a0e16;
  }
  .Text-sc-c557047b-0.kKSmig{
    font-size: 14px;
  }
  .Swap__Label-sc-f1c90c4-0.Text-sc-c557047b-0,
  .Text-sc-c557047b-0.gczkXX{
    color: #c9cacb;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
  }
  .Text-sc-c557047b-0.gczkXX{
    color: #FFFFFF;
  }
  .Swap__SwitchIconButton-sc-f1c90c4-1,
  .Swap__SwitchIconButton-sc-f1c90c4-1:hover{
    background: transparent;

  }
  .Svg-sc-9f43536d-0.bEIOQx.icon-up-down,
  #arrow_loading{
    fill: #3bfc14;
    color: #3bfc14;
    background: transparent;
    background-color: transparent;
  }
  .kMRCrg{
    background: transparent;
    background-color: transparent;
  }



  // Modal Settings
  .jShOOx {
    background: #060607;
    border: 1px solid #FFFFFF;
    width: 80%;
  }
  .Text-sc-c557047b-0{
    color: #FFFFFF;
    font-style: normal;
  }
  .StyledButton-sc-bf15f720-0.lnIxFz{
    background-color: #FFFFFF;
  }
  #token-search-input{
    border-radius: 5px;
    background-color: #1c2230;
    color: #FFFFFF;
  }
    #token-search-input:focus:not(:disabled) {
      box-shadow: 0px 0px 0px 0px #000000,0px 0px 0px 0pxrgba(0,0,,0);
      border: 0px;
    }
  .fHDXAM,
  .fHDXAM:focus:not(:disabled) {
      background-color: #1c2230;
      border-radius: 5px;
      box-shadow: inset 0px 0px 0px 0px rgb(0 0 0 / 0%);
      color: #FFFFFF;
      display: block;
      font-size: 16px;
      height: 48px;
      outline: 0;
      padding: 0 16px;
      width: 100%;
      border: 0px solid #262130;
  }

  .haYCcI{ border-bottom: 0px; }

`

export default GlobalStyle
