import * as React from "react";
import { SVGProps } from "react";
const SvgStats = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M8.253 3.146A61.076 61.076 0 0 1 12 3c1.14 0 2.49.064 3.748.146l.04.002c.698.045 1.284.083 1.767.156.51.076.975.2 1.42.453A4.074 4.074 0 0 1 20.6 5.488c.225.464.317.946.36 1.47.041.5.041 1.106.041 1.834v6.416c0 .728 0 1.334-.041 1.834-.043.524-.135 1.006-.36 1.47a4.074 4.074 0 0 1-1.624 1.731c-.445.253-.91.377-1.42.453-.483.073-1.069.11-1.767.156l-.04.002A61.015 61.015 0 0 1 12 21c-1.14 0-2.49-.064-3.747-.146l-.041-.002c-.698-.045-1.284-.083-1.768-.156-.51-.076-.974-.2-1.42-.453a4.074 4.074 0 0 1-1.623-1.731c-.225-.464-.317-.946-.36-1.47C3 16.542 3 15.936 3 15.208V8.792c0-.728 0-1.334.041-1.834.043-.524.135-1.006.36-1.47a4.074 4.074 0 0 1 1.624-1.731c.445-.253.91-.377 1.42-.453.483-.073 1.069-.11 1.767-.156l.04-.002ZM13 8a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V8Zm-4 6a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm7-4a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgStats;
