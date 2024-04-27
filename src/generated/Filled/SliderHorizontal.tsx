import * as React from "react";
import { SVGProps } from "react";
const SvgSliderHorizontal = (
  props: SVGProps<SVGSVGElement>
): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.83 5a3.001 3.001 0 1 0 0 2H20a1 1 0 1 0 0-2h-3.17ZM14.999 11A1 1 0 0 0 15 13l5-.007a1 1 0 0 0-.002-2l-5 .007ZM3 11.993a1 1 0 0 1 1-1h2c.057 0 .114.005.168.014a3.001 3.001 0 1 1-.004 1.973 1.002 1.002 0 0 1-.164.013H4a1 1 0 0 1-1-1ZM4 5a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2H4ZM3 17.991a1 1 0 0 1 1.001-.998l5 .007A1 1 0 1 1 9 19l-5-.007A1 1 0 0 1 3 17.99ZM18.004 16.993c-.059 0-.116.005-.172.014a3.001 3.001 0 1 0 .005 1.973c.052.008.105.013.16.013l2 .007a1 1 0 0 0 .007-2l-2-.007Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSliderHorizontal;
