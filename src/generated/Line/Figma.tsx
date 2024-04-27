import * as React from "react";
import { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M6.354 15A4 4 0 1 0 13 18v-2.536A3.99 3.99 0 0 0 15 16a4 4 0 0 0 2.646-7A3.999 3.999 0 0 0 15 2H9a4 4 0 0 0-2.646 7 4 4 0 0 0 0 6ZM9 4a2 2 0 1 0 0 4h2V4H9Zm2 12H9a2 2 0 1 0 2 2v-2Zm-2-6a2 2 0 1 0 0 4h2v-4H9Zm4 2a2 2 0 1 0 4.001 0A2 2 0 0 0 13 12Zm2-4a2 2 0 0 0 0-4h-2v4h2Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgFigma;
