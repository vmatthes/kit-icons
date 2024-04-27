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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2a1 1 0 0 1 1 1v1.1c1.034-.059 2.086-.1 3-.1.914 0 1.966.041 3 .1V3a1 1 0 1 1 2 0v1.234l.383.03c1.996.156 3.51 1.78 3.612 3.736H21v8.792c0 2.047-1.55 3.782-3.617 3.945-1.635.128-3.734.263-5.383.263-1.65 0-3.748-.135-5.383-.263C4.55 20.574 3 18.839 3 16.792V8h.005c.101-1.955 1.616-3.58 3.612-3.737L7 4.233V3a1 1 0 0 1 1-1Zm-3 8v6.792c0 1.03.774 1.872 1.774 1.95C8.4 18.872 10.434 19 12 19c1.566 0 3.6-.13 5.226-.257 1-.079 1.774-.92 1.774-1.95V10H5Zm1.774-3.743A1.934 1.934 0 0 0 5.011 8h13.978a1.934 1.934 0 0 0-1.763-1.743C15.6 6.13 13.566 6 12 6c-1.566 0-3.6.13-5.226.257Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCalendar;
