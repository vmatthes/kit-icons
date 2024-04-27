import * as React from "react";
import { SVGProps } from "react";
const SvgDelivery = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M14 16h.171a3 3 0 1 0 5.659 0H21a1 1 0 0 0 1-1v-4a1 1 0 0 0-.226-.634l-.007-.008-.018-.021a25.873 25.873 0 0 0-.301-.358 33.68 33.68 0 0 0-.794-.893c-.6-.653-1.434-1.5-2.122-1.933-.913-.574-2.154-.696-3.008-.717a12.136 12.136 0 0 0-.58 0 2.83 2.83 0 0 0-2.733-2.254l-.066-.005a65.952 65.952 0 0 0-1.213-.084A42.99 42.99 0 0 0 8.5 4c-.75 0-1.691.047-2.432.093a80.407 80.407 0 0 0-1.214.084l-.065.005A2.825 2.825 0 0 0 2 7v7.09c0 .815.51 1.503 1.22 1.78a3 3 0 1 0 5.61.13H14Zm-8 0a1 1 0 1 0-.001 1.999A1 1 0 0 0 6 16Zm14-2h-5V8.435c.148-.003.309-.003.476 0 .813.02 1.572.148 1.992.412.43.27 1.096.922 1.716 1.594.295.32.557.62.745.84l.071.083V14Zm-3 2a1 1 0 1 0-.001 1.999A1 1 0 0 0 17 16Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgDelivery;
