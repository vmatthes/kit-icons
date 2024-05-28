import * as React from "react";
import { SVGProps } from "react";
const SvgApple = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 2.338c0 .845-.347 1.633-1.039 2.364-.834.867-1.844 1.369-2.939 1.29a2.351 2.351 0 0 1-.022-.32c0-.811.397-1.68 1.102-2.389.352-.36.8-.658 1.342-.896.542-.235 1.054-.365 1.536-.387.014.113.02.226.02.338Z"
      fill={props.color || "#000"}
    />
    <path
      d="M19.948 16.419c-.105.314-.217.617-.337.91l-.003.01a11.058 11.058 0 0 1-1.053 1.949c-.507.744-.972 1.337-1.383 1.708-.632.595-1.383.962-2.238.983h-.024c-.589 0-1.216-.169-1.853-.438-.481-.203-.873-.28-1.188-.28-.345 0-.753.08-1.236.281-.618.258-1.213.436-1.746.456-.897.037-1.684-.38-2.34-1.005-.432-.391-.913-.997-1.434-1.756-.613-.888-1.106-1.904-1.488-3.04v-.002C3.212 14.961 3 13.746 3 12.553c0-1.37.288-2.61.908-3.677A5.615 5.615 0 0 1 5.875 6.83a5.268 5.268 0 0 1 2.697-.784h.017c.614 0 1.315.189 2.055.473h.002c.339.132.6.224.79.282.074.022.13.037.172.047.049-.013.114-.033.2-.06.226-.073.544-.186.96-.343l.006-.003c.872-.323 1.704-.495 2.46-.43 1.751.147 3.17.882 4.114 2.262a1 1 0 0 1-.297 1.413c-1.062.662-1.529 1.518-1.519 2.652.01.914.32 1.627.925 2.204l.009.009c.283.276.591.483.93.63a1 1 0 0 1 .552 1.236Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgApple;