import * as React from "react";
import { SVGProps } from "react";
const SvgPersonMinus = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3C9.258 3 7.062 5.253 7.062 8c0 2.746 2.196 5 4.938 5 2.033 0 3.766-1.24 4.526-3H14a3 3 0 1 1 0-6h.964A4.87 4.87 0 0 0 12 3Z"
      fill={props.color || "#000"}
    />
    <path
      d="M13 7a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2h-6a1 1 0 0 0-1 1ZM12 14c-1.333 0-2.995.104-4.362.211C5.555 14.374 4 16.125 4 18.181c0 1.284.969 2.374 2.265 2.492 1.482.134 3.92.327 5.735.327 1.816 0 4.253-.193 5.735-.327A2.494 2.494 0 0 0 20 18.182c0-2.057-1.555-3.808-3.637-3.971C14.995 14.104 13.333 14 12 14Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPersonMinus;
