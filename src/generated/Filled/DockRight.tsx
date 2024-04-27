import * as React from "react";
import { SVGProps } from "react";
const SvgDockRight = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M20.854 8.253C20.936 9.51 21 10.86 21 12c0 1.14-.064 2.49-.146 3.748l-.002.04c-.045.698-.083 1.284-.156 1.767-.076.51-.2.975-.453 1.42a4.074 4.074 0 0 1-1.731 1.624c-.464.225-.946.317-1.47.36-.5.041-1.106.041-1.834.041H8.792c-.728 0-1.334 0-1.834-.041-.524-.043-1.006-.135-1.47-.36a4.074 4.074 0 0 1-1.731-1.624c-.253-.445-.377-.91-.453-1.42-.073-.483-.11-1.069-.156-1.767l-.002-.04A61.085 61.085 0 0 1 3 12c0-1.14.064-2.49.146-3.747l.002-.041c.045-.698.083-1.284.156-1.768.076-.51.2-.974.453-1.42a4.074 4.074 0 0 1 1.731-1.623c.464-.225.946-.317 1.47-.36C7.458 3 8.064 3 8.792 3h6.416c.728 0 1.334 0 1.834.041.524.043 1.006.135 1.47.36.714.347 1.34.933 1.731 1.624.253.445.377.91.453 1.42.073.483.11 1.069.156 1.767l.002.04ZM17 8a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V8Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgDockRight;
