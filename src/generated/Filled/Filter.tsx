import * as React from "react";
import { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.202 2.84c-1.193 0-2.674.174-3.825.34a54.404 54.404 0 0 0-1.89.308l-.078.014c-1.241.056-2.207 1.092-2.207 2.332a2.353 2.353 0 0 0 .488 1.432l4.512 5.496v5.552c0 1.948 2.123 3.198 3.811 2.148l1.998-1.242h.001a2.525 2.525 0 0 0 1.19-2.149v-4.367L19.85 7.16a2.357 2.357 0 0 0 .352-1.236v-.09c0-1.24-.966-2.276-2.207-2.332l-.079-.014a54.444 54.444 0 0 0-1.89-.308c-1.15-.166-2.63-.34-3.824-.34Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgFilter;
