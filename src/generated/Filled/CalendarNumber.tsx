import * as React from "react";
import { SVGProps } from "react";
const SvgCalendarNumber = (
  props: SVGProps<SVGSVGElement>
): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2a1 1 0 0 1 1 1v1.075A72.932 72.932 0 0 1 12 4c.912 0 1.964.031 3 .075V3a1 1 0 1 1 2 0v1.176l.441.026C19.458 4.322 21 6 21 8H3c0-2 1.542-3.679 3.559-3.798L7 4.176V3a1 1 0 0 1 1-1Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 16.832V10h18v6.832c0 2.076-1.593 3.822-3.686 3.957-1.626.104-3.69.211-5.314.211-1.623 0-3.688-.107-5.314-.211C4.593 20.654 3 18.908 3 16.832Zm10.45-4.645a.994.994 0 0 0-.489-.574.993.993 0 0 0-.766-.066.998.998 0 0 0-.26.128l-1.49.993a1 1 0 0 0 1.055 1.698V16.5a1 1 0 1 0 2 0v-3.985a.996.996 0 0 0-.05-.328Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCalendarNumber;
