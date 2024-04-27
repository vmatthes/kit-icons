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
      opacity={0.15}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 12c.552 0 1.006-.45.945-.998a9.004 9.004 0 0 0-7.947-7.947C12.45 2.995 12 3.448 12 4v7a1 1 0 0 0 1 1h7Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.108 2.06C11.893 1.928 11 2.93 11 4v7a2 2 0 0 0 2 2h7c1.071 0 2.073-.893 1.94-2.108a10.004 10.004 0 0 0-8.832-8.831ZM13 11V4.062A8.004 8.004 0 0 1 19.938 11H13Z"
      fill={props.color || "#000"}
    />
    <path
      d="M8.332 4.888a1 1 0 1 0-.918-1.776A10 10 0 0 0 2 12c0 5.523 4.477 10 10 10a10 10 0 0 0 8.96-5.555 1 1 0 1 0-1.791-.89A8 8 0 1 1 8.332 4.888Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPieChart;
