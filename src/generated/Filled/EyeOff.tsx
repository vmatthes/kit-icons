import * as React from "react";
import { SVGProps } from "react";
const SvgEyeOff = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M4.707 3.293a1 1 0 0 0-1.414 1.414l2.076 2.077c-.251.231-.495.474-.731.725a15.66 15.66 0 0 0-1.722 2.21c-.285.442-.5.82-.634 1.088a2.667 2.667 0 0 0 0 2.386c.134.268.35.646.634 1.087.483.748 1.056 1.5 1.722 2.21C6.57 18.553 9.038 20 12 20c1.885 0 3.569-.586 5.043-1.543l2.25 2.25a1 1 0 0 0 1.414-1.414l-16-16Zm8.586 11.415-4-4.001a3 3 0 0 0 4.001 4.001Z"
      fill={props.color || "#000"}
    />
    <path
      d="M13.816 9.612c.215.164.408.357.572.572l5.598 5.598a15.93 15.93 0 0 0 1.098-1.502c.285-.441.5-.819.634-1.087a2.667 2.667 0 0 0 0-2.386c-.134-.268-.35-.646-.634-1.087a15.668 15.668 0 0 0-1.722-2.21C17.43 5.447 14.962 4 12 4c-1.14 0-2.208.215-3.2.596l5.015 5.016Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgEyeOff;
