import * as React from "react";
import { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16v-4.9c-1.198.068-2.375.16-3.29.238A2.969 2.969 0 0 0 3 14.305v3.39a2.969 2.969 0 0 0 2.71 2.967c1.706.146 4.321.338 6.29.338 1.969 0 4.584-.192 6.29-.338A2.969 2.969 0 0 0 21 17.695v-3.39a2.969 2.969 0 0 0-2.71-2.967c-.915-.078-2.092-.17-3.29-.238V16a3 3 0 1 1-6 0Z"
      fill={props.color || "#000"}
    />
    <path
      d="M13 16.071c0 .513-.448.929-1 .929h-.003c-.551-.002-.997-.417-.997-.929V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 6.414v9.657Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgShare;
