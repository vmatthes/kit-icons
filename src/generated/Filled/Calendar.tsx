import * as React from "react";
import { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 3a1 1 0 0 0-2 0v1.176l-.441.026C4.542 4.322 3 6 3 8h18c0-2-1.542-3.679-3.559-3.798L17 4.176V3a1 1 0 1 0-2 0v1.075A72.932 72.932 0 0 0 12 4c-.912 0-1.964.031-3 .075V3ZM21 10H3v6.832c0 2.076 1.593 3.822 3.686 3.957 1.626.104 3.69.211 5.314.211 1.623 0 3.688-.107 5.314-.211C19.407 20.654 21 18.908 21 16.832V10Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCalendar;
