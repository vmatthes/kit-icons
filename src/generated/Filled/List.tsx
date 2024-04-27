import * as React from "react";
import { SVGProps } from "react";
const SvgList = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M3 9.343c0-2.057 0-3.086.41-3.92a4.11 4.11 0 0 1 1.652-1.736c.813-.45 1.798-.499 3.766-.595A66.85 66.85 0 0 1 12 3c.962 0 2.07.037 3.172.092 1.968.096 2.953.145 3.765.595a4.109 4.109 0 0 1 1.653 1.736c.41.834.41 1.863.41 3.92v5.314c0 2.057 0 3.086-.41 3.92a4.11 4.11 0 0 1-1.652 1.736c-.813.45-1.798.499-3.766.595-1.103.055-2.21.092-3.172.092-.962 0-2.07-.037-3.172-.092-1.968-.096-2.953-.145-3.766-.595a4.11 4.11 0 0 1-1.652-1.736C3 17.743 3 16.714 3 14.657V9.343ZM9 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4 2a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgList;
