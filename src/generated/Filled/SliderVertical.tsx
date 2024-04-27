import * as React from "react";
import { SVGProps } from "react";
const SvgSliderVertical = (
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
      d="M19 16.83a3.001 3.001 0 1 0-2 0V20a1 1 0 1 0 2 0v-3.17ZM13 14.999A1 1 0 0 0 11 15l.007 5a1 1 0 0 0 2-.002l-.007-5ZM12.007 3a1 1 0 0 1 1 1v2c0 .057-.005.114-.014.168a3.001 3.001 0 1 1-1.973-.004A1.013 1.013 0 0 1 11.007 6V4a1 1 0 0 1 1-1ZM19 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V4ZM6.009 3a1 1 0 0 1 .998 1.001l-.007 5A1 1 0 1 1 5 9l.007-5A1 1 0 0 1 6.01 3ZM7.007 18.004c0-.059-.005-.116-.014-.172a3.001 3.001 0 1 0-1.973.005 1.006 1.006 0 0 0-.013.16l-.007 2a1 1 0 1 0 2 .007l.007-2Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSliderVertical;
