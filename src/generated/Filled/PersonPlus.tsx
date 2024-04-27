import * as React from "react";
import { SVGProps } from "react";
const SvgPersonPlus = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3c.733 0 1.427.161 2.05.45-.033.178-.05.362-.05.55a3 3 0 1 0 0 6c0 .811.322 1.547.845 2.087A4.869 4.869 0 0 1 12 13c-2.742 0-4.938-2.254-4.938-5 0-2.747 2.196-5 4.938-5Z"
      fill={props.color || "#000"}
    />
    <path
      d="M16 10a.998.998 0 0 0 1 1 1 1 0 0 0 1-1V8h2a1 1 0 1 0 0-2h-2V4a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2ZM12 14c-1.333 0-2.995.104-4.362.211C5.555 14.374 4 16.125 4 18.181c0 1.284.969 2.374 2.265 2.492 1.482.134 3.92.327 5.735.327 1.816 0 4.253-.193 5.735-.327A2.494 2.494 0 0 0 20 18.182c0-2.057-1.555-3.808-3.637-3.971C14.995 14.104 13.333 14 12 14Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPersonPlus;
