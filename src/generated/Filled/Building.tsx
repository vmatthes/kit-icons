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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h1.37a2 2 0 0 0 2-2h1.13a2 2 0 0 0 2 2H18a3 3 0 0 0 3-3v-5.172a3 3 0 0 0-.879-2.12l-.414-.415a1 1 0 1 0-1.414 1.414l.414.414a1 1 0 0 1 .293.707V18a1 1 0 0 1-1 1h-1.17c.11-.313.17-.65.17-1V6a3 3 0 0 0-3-3H6Zm1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm0 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgBuilding;
