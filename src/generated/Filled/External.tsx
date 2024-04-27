import * as React from "react";
import { SVGProps } from "react";
const SvgExternal = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 9h4.9c-.068-1.198-.16-2.375-.238-3.29A2.969 2.969 0 0 0 9.695 3h-3.39a2.969 2.969 0 0 0-2.967 2.71C3.192 7.417 3 10.032 3 12c0 1.969.192 4.584.338 6.29A2.969 2.969 0 0 0 6.305 21h3.39a2.969 2.969 0 0 0 2.967-2.71c.078-.915.17-2.092.238-3.29H8a3 3 0 1 1 0-6Z"
      fill={props.color || "#000"}
    />
    <path
      d="M7.929 13C7.416 13 7 12.552 7 12v-.003c.002-.551.417-.997.929-.997h9.657l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 13H7.929Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgExternal;
