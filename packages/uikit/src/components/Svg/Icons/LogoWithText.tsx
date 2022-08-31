import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return <img {...props} width="24px" height="24px" src="/images/tokens/usdfi_logo_white.png" />;
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
