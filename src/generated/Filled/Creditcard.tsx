import * as React from "react";
import { SVGProps } from "react";
const SvgCreditcard = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.74 4.353C6.653 4.205 9.719 4 12 4s5.348.205 7.26.353A2.974 2.974 0 0 1 22 7.326V8H2v-.674a2.974 2.974 0 0 1 2.74-2.973Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 10v6.674a2.974 2.974 0 0 0 2.74 2.973C6.653 19.795 9.719 20 12 20s5.348-.205 7.26-.353A2.974 2.974 0 0 0 22 16.674V10H2Zm4 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCreditcard;
