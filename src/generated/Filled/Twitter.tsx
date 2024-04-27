import * as React from "react";
import { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 4.008s-.7 2.099-2 3.398c1.6 9.995-9.4 17.292-18 11.595 2.2.1 4.4-.6 6-2C3 15.503.5 9.606 3 5.008c2.2 2.6 5.6 4.098 9 3.998-.9-4.198 4-6.596 7-3.798 1.1 0 3-1.2 3-1.2Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgTwitter;
