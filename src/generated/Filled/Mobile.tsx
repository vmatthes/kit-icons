import * as React from "react";
import { SVGProps } from "react";
const SvgMobile = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M6.008 2.806A3.453 3.453 0 0 1 8.25 2h7.5c.816 0 1.625.277 2.242.806C18.614 3.339 19 4.098 19 4.929V19.07c0 .831-.386 1.59-1.008 2.123A3.453 3.453 0 0 1 15.75 22h-7.5a3.453 3.453 0 0 1-2.242-.806C5.386 20.661 5 19.902 5 19.071V4.93c0-.831.386-1.59 1.008-2.123ZM9.5 4.286a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM10 18a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 10 18Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgMobile;
