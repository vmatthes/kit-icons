import * as React from "react";
import { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="m14.455 4.19-.014-.002a24.619 24.619 0 0 0-.804-.092c-.484-.049-1.123-.1-1.646-.096-.468.004-1.04.056-1.473.103a29.787 29.787 0 0 0-.718.086l-.005.001a1.765 1.765 0 0 0-1.32.68L7.394 6.1H5.25C3.521 6.1 2 7.424 2 9.2v7.3c0 1.758 1.49 3.073 3.198 3.1h.004l.137.013.507.046c.43.038 1.03.088 1.715.138 1.362.1 3.08.203 4.439.203s3.077-.102 4.439-.203a123.015 123.015 0 0 0 2.222-.184l.137-.013h.004C20.51 19.573 22 18.258 22 16.5V9.2c0-1.776-1.521-3.1-3.25-3.1h-2.086l-.85-1.181-.002-.002a1.763 1.763 0 0 0-1.357-.727ZM8 13a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCamera;
