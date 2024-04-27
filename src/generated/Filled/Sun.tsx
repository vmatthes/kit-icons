import * as React from "react";
import { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 3a1 1 0 1 0-2 0v2.25a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.59 1.591A1 1 0 0 0 7.935 6.52l-1.59-1.591ZM17.48 7.934l1.591-1.59a1 1 0 0 0-1.414-1.415l-1.591 1.59a1 1 0 0 0 1.414 1.415ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM3 11a1 1 0 1 0 0 2h2.25a1 1 0 1 0 0-2H3ZM18.75 11a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2h-2.25ZM6.343 19.071l1.591-1.59a1 1 0 1 0-1.414-1.415l-1.591 1.59a1 1 0 1 0 1.414 1.415ZM19.071 17.657l-1.59-1.591a1 1 0 0 0-1.415 1.414l1.59 1.591a1 1 0 0 0 1.415-1.414ZM13 18.75a1 1 0 1 0-2 0V21a1 1 0 1 0 2 0v-2.25Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSun;
