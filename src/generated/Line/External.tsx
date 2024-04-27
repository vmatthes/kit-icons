import * as React from "react";
import { SVGProps } from "react";
const SvgExternal = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.008 8.124a1 1 0 0 0 1.984-.248l-.28-2.248A3 3 0 0 0 9.733 3H6.305a2.969 2.969 0 0 0-2.967 2.71C3.192 7.417 3 10.032 3 12c0 1.969.192 4.584.338 6.29A2.969 2.969 0 0 0 6.305 21h3.43a3 3 0 0 0 2.976-2.628l.281-2.248a1 1 0 1 0-1.984-.248l-.281 2.248a1 1 0 0 1-.993.876H6.305a.969.969 0 0 1-.975-.881C5.185 16.417 5 13.876 5 12c0-1.876.185-4.417.33-6.119A.969.969 0 0 1 6.305 5h3.43a1 1 0 0 1 .992.876l.28 2.248Z"
      fill={props.color || "#000"}
    />
    <path
      d="M16.707 7.293a1 1 0 1 0-1.414 1.414L17.586 11H8a1 1 0 1 0 0 2h9.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.415l-4-4Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgExternal;
