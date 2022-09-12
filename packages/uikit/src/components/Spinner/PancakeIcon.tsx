import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d=""
          fill="#FEDC90"
          stroke="#D1884F"
          strokeWidth="2.89134"
        />
        <path
          d=""
          fill="#D1884F"
          stroke="#633001"
          strokeWidth="2.89134"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="Z"
          fill="#633001"
        />
      </svg>
    </Svg>
  );
};

export default Icon;
