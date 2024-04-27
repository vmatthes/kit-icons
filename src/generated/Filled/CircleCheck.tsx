import * as React from "react";
import { SVGProps } from "react";
const SvgCircleCheck = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.83-2.943-.01.016-.042.064-.159.246c-.134.21-.32.506-.525.845-.416.688-.888 1.518-1.18 2.176-.302.685-.605 1.632-.838 2.437a40.677 40.677 0 0 0-.352 1.293l-.02.078-.004.02-.001.005a1 1 0 0 1-1.712.436l-2.727-3a1 1 0 0 1 1.48-1.346l1.504 1.655c.228-.766.525-1.669.841-2.386.345-.782.873-1.702 1.298-2.404a42.684 42.684 0 0 1 .72-1.147l.046-.07.012-.02.005-.006a1 1 0 0 1 1.668 1.103l-.003.005Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCircleCheck;
