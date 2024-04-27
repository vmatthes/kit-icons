import * as React from "react";
import { SVGProps } from "react";
const SvgAttachment = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M17.11 5.59c-.83-.787-2.2-.787-3.03 0l-8.024 7.59c-1.408 1.332-1.408 3.467 0 4.799 1.439 1.361 3.794 1.361 5.233 0l8.024-7.591a1 1 0 1 1 1.374 1.453l-8.024 7.59c-2.21 2.092-5.771 2.092-7.982 0-2.241-2.12-2.241-5.583 0-7.703l8.024-7.591c1.602-1.516 4.178-1.516 5.78 0a3.836 3.836 0 0 1 0 5.62l-7.71 7.293a2.62 2.62 0 0 1-3.576 0 2.418 2.418 0 0 1 0-3.536l6.765-6.4a1 1 0 0 1 1.374 1.452l-6.765 6.4a.419.419 0 0 0 0 .631c.223.211.605.211.828 0l7.71-7.293c.799-.756.799-1.958 0-2.714Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgAttachment;
