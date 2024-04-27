import * as React from "react";
import { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M18 5.198c0-1.463-1.063-2.741-2.555-2.93C14.42 2.14 13.075 2 12 2c-1.075 0-2.42.14-3.445.268C7.063 2.457 6 3.735 6 5.198v.115a137.323 137.323 0 0 0-1.929.175l-.128.013-.045.004a1 1 0 0 0 .176 1.992l.963 11.496a2.95 2.95 0 0 0 2.6 2.698c1.235.14 2.997.309 4.363.309 1.366 0 3.128-.169 4.363-.309a2.95 2.95 0 0 0 2.6-2.698l.963-11.496a1 1 0 0 0 .175-1.992l-.04-.004-.118-.012-.438-.042c-.37-.035-.892-.083-1.505-.134v-.115ZM12 4c-.943 0-2.184.125-3.195.253A.926.926 0 0 0 8.019 5h7.962a.926.926 0 0 0-.786-.747C14.184 4.125 12.943 4 12 4Zm-2 13a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1Zm4 0a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgTrash;
