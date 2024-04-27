import * as React from "react";
import { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity={0.15}
      d="M19.996 12.722a8.015 8.015 0 1 1-8.718-8.718.802.802 0 0 1 .718 1.274 4.81 4.81 0 0 0 6.726 6.726.802.802 0 0 1 1.274.718Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.94 5.052a7.015 7.015 0 1 0 8.008 8.008 5.81 5.81 0 0 1-8.008-8.008Zm.246-2.044c1.55-.143 2.54 1.613 1.614 2.865a3.81 3.81 0 0 0 5.327 5.327c1.252-.925 3.008.065 2.865 1.614a9.015 9.015 0 1 1-9.806-9.806Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgMoon;
