import * as React from "react";
import { SVGProps } from "react";
const SvgZoomIn = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M10 3a7 7 0 1 0 4.195 12.604l.056.062 5.042 5.041a1 1 0 1 0 1.414-1.414l-5.042-5.042a.978.978 0 0 0-.06-.056A7 7 0 0 0 10 3Zm0 10a1 1 0 0 1-1-1v-1H8a1 1 0 1 1 0-2h1V8a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 0 1-1 1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgZoomIn;
