import * as React from "react";
import { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.638 7.51C6.57 5.447 9.038 4 12 4c2.963 0 5.43 1.448 7.362 3.51.666.71 1.24 1.462 1.722 2.21.285.441.5.819.634 1.087.376.751.376 1.635 0 2.386-.134.268-.35.646-.634 1.087a15.67 15.67 0 0 1-1.722 2.21C17.43 18.553 14.962 20 12 20c-2.963 0-5.43-1.448-7.362-3.51a15.662 15.662 0 0 1-1.722-2.21c-.285-.441-.5-.819-.634-1.087a2.667 2.667 0 0 1 0-2.386c.134-.268.35-.646.634-1.087a15.66 15.66 0 0 1 1.722-2.21ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgEye;
