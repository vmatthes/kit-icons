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
      d="M7 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.74 4.353C6.653 4.205 9.719 4 12 4s5.348.205 7.26.353A2.974 2.974 0 0 1 22 7.326v9.348a2.974 2.974 0 0 1-2.74 2.973c-1.912.148-4.978.353-7.26.353s-5.348-.205-7.26-.353A2.974 2.974 0 0 1 2 16.674V7.326a2.974 2.974 0 0 1 2.74-2.973ZM12 6c-2.197 0-5.196.2-7.105.347A.974.974 0 0 0 4 7.326V8h16v-.674c0-.52-.393-.94-.895-.98C17.196 6.2 14.197 6 12 6ZM4 16.674V10h16v6.674c0 .52-.393.94-.895.98C17.196 17.8 14.197 18 12 18s-5.196-.2-7.105-.347A.974.974 0 0 1 4 16.674Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCreditcard;
