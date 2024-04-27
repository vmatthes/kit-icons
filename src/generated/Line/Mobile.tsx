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
      d="M10.75 17.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 2c-.816 0-1.625.277-2.242.806C5.386 3.339 5 4.098 5 4.929V19.07c0 .831.386 1.59 1.008 2.123A3.453 3.453 0 0 0 8.25 22h7.5c.816 0 1.625-.277 2.242-.806.622-.533 1.008-1.292 1.008-2.123V4.93c0-.831-.386-1.59-1.008-2.123A3.453 3.453 0 0 0 15.75 2h-7.5Zm-.94 2.324C7.537 4.13 7.873 4 8.25 4H9.5v.286a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4h1.25c.377 0 .713.13.94.324.222.19.31.412.31.605V19.07c0 .193-.088.415-.31.605a1.456 1.456 0 0 1-.94.324h-7.5c-.377 0-.713-.13-.94-.324-.222-.19-.31-.412-.31-.605V4.93c0-.193.088-.415.31-.605Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgMobile;
