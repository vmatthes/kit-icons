import * as React from "react";
import { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8 5.873c.925-1.252-.065-3.008-1.614-2.865a9.015 9.015 0 1 0 9.806 9.806c.143-1.55-1.613-2.54-2.865-1.614A3.809 3.809 0 0 1 12.8 5.873Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgMoon;
