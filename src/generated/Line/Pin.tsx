import * as React from "react";
import { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C7.633 2 4 5.368 4 9.635c0 2.801 1.287 5.432 2.711 7.502 1.436 2.086 3.087 3.713 3.979 4.527a1.905 1.905 0 0 0 2.622-.04c.879-.854 2.527-2.563 3.963-4.67C18.693 14.873 20 12.264 20 9.634 20 5.369 16.367 2 12 2ZM6 9.635C6 6.573 8.635 4 12 4s6 2.573 6 5.635c0 2.019-1.03 4.216-2.378 6.193-1.3 1.907-2.802 3.48-3.645 4.303-.845-.777-2.334-2.26-3.618-4.127C7.032 14.075 6 11.848 6 9.634Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPin;
