import * as React from "react";
import { SVGProps } from "react";
const SvgTwitch = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M19 4H5v12.8h3.889V20L12 16.8h3.889L19 13.6V4Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9.6a1 1 0 0 1-.283.697l-3.111 3.2a1 1 0 0 1-.717.303h-3.466l-2.817 2.897A1 1 0 0 1 7.889 20v-2.2H5a1 1 0 0 1-1-1V4Zm2 1v10.8h2.889a1 1 0 0 1 1 1v.737l1.394-1.434A1 1 0 0 1 12 15.8h3.466L18 13.194V5H6Zm5 2a1 1 0 0 1 1 1v3.2a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v3.2a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgTwitch;
