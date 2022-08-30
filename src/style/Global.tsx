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
  ::-webkit-scrollbar-thumb {
    background: #3bfc14;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #1c2230;
    border-radius: 5px;
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
    border-bottom: 0px;
  }
  


  // Navigation
  .NextLink__A-sc-a01cb22d-0.styles__StyledMenuItem-sc-c5403a41-1{
    color: #FFFFFF;
    font-size: 0.9rem;
    line-height: 1.6rem;
  }
    .NextLink__A-sc-a01cb22d-0.styles__StyledMenuItem-sc-c5403a41-1:hover,
    .NextLink__A-sc-a01cb22d-0.styles__StyledMenuItem-sc-c5403a41-1:active,
    .NextLink__A-sc-a01cb22d-0.styles__StyledMenuItem-sc-c5403a41-1.bHxnjb{
      color: #3bfc14;
      font-size: 0.9rem;
      line-height: 1.6rem;
      background-color: transparent;
      font-weight: 400;
    }
    

  //
  // Swap: Card, Icons, Buttons
  //

  // Hide Elements
  // Hide Graph Icon
  .blvtjX {
    display: none;
  }

  .StyledCard__StyledCardInner-sc-110bbcc2-1{
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
  
  // Button blue
  .StyledButton-sc-bf15f720-0.hEsYxv,
  .StyledButton-sc-bf15f720-0.OlPUk {
    border-radius: 5px;
    border: 2px solid #FFFFFF;
    background-color: #2172e5;
    height: 38px;
    font-size: 16px;
    font-weight: 400;
    line-height: 38px;
    color: #FFFFFF;
  }

  #swap-currency-input,
  #swap-currency-output{
    background-color: #1c2230;
    border-radius: 5px;
    padding: 12px 12px 12px 12px;
  }
  .CurrencyInputPanel__Container-sc-a10bfaaa-4,
  .CurrencyInputPanel__Container-sc-a10bfaaa-4::placeholder{
    border-radius: 5px;
    background-color: #0a0e16;
    border: 0px;
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


  .StyledButton-sc-bf15f720-0.lnIxFz,
  .StyledButton-sc-bf15f720-0.gMKaqv{
    background-color: #1c2230;
    color: #3bfc14;
  }
  .StyledButton-sc-bf15f720-0.bvUBvZ,
  .StyledButton-sc-bf15f720-0.cARgyN{
    background-color: #1c2230;
    color: rgba(255,255,255, 0.5);
  }



  #token-search-input,
  #token-search-input::placeholder{
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
      box-shadow: none;
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
  .cDBZrR,
  .list-token-manage-button{
    background-color: transparent;
    color: #3bfc14;
  }
  .styles__ModalHeader-sc-488fdc9f-0{
    background: transparent;
    background-color: transparent;
    border-bottom: 0px;
  }
  .Input-sc-d5e8c91e-0.hqiKXF,
  .Input-sc-d5e8c91e-0.hqiKXF::placeholder{
    border-radius: 5px;
    border: 0px;
    background-color: #1c2230;
    color: #FFFFFF;
  }

  .StyledToggle-sc-aca522c6-2.dXnOZr{
    background-color: #1c2230;
  }
  .StyledToggle-sc-aca522c6-2,
  .StyledToggle-sc-aca522c6-2.bdXTre{
    border-radius: 18px;
  }
    .StyledToggle-sc-aca522c6-2.bdXTre{
      background-color: #3bfc14;
    }
    .StyledToggle__Handle-sc-aca522c6-0.fuVDkn{
      background-color: #0a0e16;
    }
  .deUwWW:hover + .StyledToggle__Handle-sc-aca522c6-0:not(:disabled):not(:checked),
  .deUwWW:hover + .StyledToggle__Handle-sc-aca522c6-0,
  .deUwWW:focus + .StyledToggle__Handle-sc-aca522c6-0
  {
    box-shadow: 0px 0px 0px 0px #7645d9, 0px 0px 0px 0px rgb(118 69 217 / 0%);
  }
  
  .CommonBases__BaseWrapper-sc-9d81b0a8-1.jizLiz,
  .CommonBases__BaseWrapper-sc-9d81b0a8-1.fVHTmH{
    background-color: #1c2230;
    border: 0px;
  }

  .Box-sc-992b7a-1.Flex-sc-832e84f7-0.edrlKM.jYInqI,
  .jNAXra
  {
    align-items: start;
    width: 100%;
  }


  .bYvHuU {
    background: #0a0e16;
    box-shadow: 0px 0px 0px -8pxrgba(14,14,44,0.1),0px 1px 1pxrgba(0,0,0,0.05);
    border: 1px solid #FFFFFF;
  }
  .llmibc {
    border-bottom: 0px solid #383241;
  }


  .StyledButton-sc-bf15f720-0.eBsMCf{
    background-color: #3e424d;
    color: #FFF;
    border: 0px;
    height: 24px;
  }
  .Text-sc-c557047b-0.iKpGLB{
    font-size: 12px;
    color: #f4f4f4;
    font-weight: 400;
  }

  .Box-sc-992b7a-1.Card-sc-21be8dee-0.Card__GreyCard-sc-21be8dee-3.edrlKM.krpSGQ.grxKKt{
    background-color: #1c2230;
    border-radius: 5px;
    font-size: 14px;
  }
    .Text-sc-c557047b-0.ZGYOD{
      font-size: 14px;
    }

  .kwjpGs{
    background-color: #1c2230;
    border-radius: 5px;
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
  .boaZiE {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #1c2230;
    border-color: #1c2230;
    border-radius: 50%;
    border-style: solid;
    border-width: 0px;
    height: 32px;
    width: 32px;
}
.WalletModal__Tabs-sc-d3e447d7-1.iklkSp{
  background-color: transparent;
  border-bottom: 0px solid #383241;
  padding: 16px 24px;
}




    `

export default GlobalStyle
