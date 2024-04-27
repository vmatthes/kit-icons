import * as React from "react";
import { SVGProps } from "react";
const SvgPieChart = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M11 3.95c0-1.07.893-2.072 2.108-1.938a10.004 10.004 0 0 1 8.831 8.83c.134 1.215-.868 2.109-1.939 2.109h-7a2 2 0 0 1-2-2v-7ZM20.029 15a1 1 0 0 1 .931 1.445A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12a10 10 0 0 1 5.414-8.888.995.995 0 0 1 .524-.11L8 3a1 1 0 0 1 1 1v9a2.004 2.004 0 0 0 1.993 2h9.036Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPieChart;
