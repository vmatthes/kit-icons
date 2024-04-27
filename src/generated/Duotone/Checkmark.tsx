import * as React from "react";
import { SVGProps } from "react";
const SvgCheckmark = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M17.04 5.159a1 1 0 0 1 .302 1.381 60.72 60.72 0 0 0-5.904 11.808 1 1 0 0 1-1.727.266l-3.5-4.5a1 1 0 1 1 1.578-1.228l2.416 3.105A62.82 62.82 0 0 1 15.659 5.46a1 1 0 0 1 1.381-.301Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCheckmark;
