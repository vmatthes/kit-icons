import * as React from "react";
import { SVGProps } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M9.172 7.757a1 1 0 1 0-1.415 1.414L10.586 12l-2.829 2.829a1 1 0 0 0 1.415 1.414L12 13.414l2.828 2.829a1 1 0 1 0 1.415-1.415L13.414 12l2.829-2.828a1 1 0 0 0-1.415-1.415L12 10.586 9.172 7.757Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCross;
