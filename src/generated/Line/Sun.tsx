import * as React from "react";
import { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M12 2a1 1 0 0 1 1 1v2.25a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM4.929 4.929a1 1 0 0 1 1.414 0l1.591 1.59A1 1 0 0 1 6.52 7.935l-1.591-1.59a1 1 0 0 1 0-1.415Zm14.142 0a1 1 0 0 1 0 1.414l-1.59 1.591a1 1 0 1 1-1.415-1.414l1.59-1.591a1 1 0 0 1 1.415 0ZM12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-3.359-.609a4.75 4.75 0 1 1 6.718 6.718A4.75 4.75 0 0 1 8.64 8.64ZM2 12a1 1 0 0 1 1-1h2.25a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm15.75 0a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-2.25a1 1 0 0 1-1-1Zm-9.816 4.066a1 1 0 0 1 0 1.414l-1.59 1.591a1 1 0 0 1-1.415-1.414l1.59-1.591a1 1 0 0 1 1.415 0Zm8.132 0a1 1 0 0 1 1.414 0l1.591 1.59a1 1 0 0 1-1.414 1.415l-1.591-1.59a1 1 0 0 1 0-1.415ZM12 17.75a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-2.25a1 1 0 0 1 1-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSun;
