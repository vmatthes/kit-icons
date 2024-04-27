import * as React from "react";
import { SVGProps } from "react";
const SvgBuilding = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 21a2 2 0 0 1-2-2H9.37a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v12c0 .35-.06.687-.17 1H18a1 1 0 0 0 1-1v-5.172a1 1 0 0 0-.293-.707l-.414-.414a1 1 0 0 1 1.414-1.414l.414.414A3 3 0 0 1 21 12.828V18a3 3 0 0 1-3 3h-5.5ZM5 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1.5a2 2 0 0 0-2-2H9.37a2 2 0 0 0-2 2H6a1 1 0 0 1-1-1V6Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgBuilding;
