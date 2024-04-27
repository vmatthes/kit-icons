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
      d="M12 3C9.258 3 7.062 5.253 7.062 8c0 2.746 2.196 5 4.938 5 2.033 0 3.766-1.24 4.526-3H14.19A2.91 2.91 0 0 1 12 11c-1.607 0-2.938-1.328-2.938-3 0-1.586 1.197-2.863 2.693-2.99A2.993 2.993 0 0 1 14 4h.964A4.87 4.87 0 0 0 12 3Z"
      fill={props.color || "#000"}
    />
    <path
      d="M14 8a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2h-6Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 14c-1.333 0-2.995.104-4.362.211C5.555 14.374 4 16.125 4 18.181c0 1.284.969 2.374 2.265 2.492 1.482.134 3.92.327 5.735.327 1.816 0 4.253-.193 5.735-.327A2.494 2.494 0 0 0 20 18.182c0-2.057-1.555-3.808-3.637-3.971C14.995 14.104 13.333 14 12 14Zm-4.206 2.205C9.15 16.099 10.748 16 12 16c1.252 0 2.85.099 4.206.205 1.01.08 1.794.932 1.794 1.977a.494.494 0 0 1-.446.5c-1.48.133-3.837.318-5.554.318-1.716 0-4.073-.185-5.554-.319a.494.494 0 0 1-.446-.5c0-1.044.784-1.897 1.794-1.976Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPersonMinus;
