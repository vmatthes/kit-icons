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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3h16v10.8l-3.556 3.6H12L8.444 21v-3.6H4V3Zm8 5a1 1 0 1 0-2 0v3.2a1 1 0 1 0 2 0V8Zm4 0a1 1 0 1 0-2 0v3.2a1 1 0 1 0 2 0V8Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgTwitch;
