import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return <img {...props} width="24px" height="24px" src="/images/tokens/stable_logo_icon.png" />;
};

export default Icon;
