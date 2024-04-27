import * as React from "react";
import { SVGProps } from "react";
const SvgRedo = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M12.447 3.968a1.41 1.41 0 0 0-1.133.525c-.245.303-.284.65-.299.812a7.045 7.045 0 0 0-.015.588V8.698c-1.706.452-3.537 1.39-4.726 2.734A9.096 9.096 0 0 0 4 17.451v.509a1 1 0 0 0 1.773.634 8.395 8.395 0 0 1 2.823-2.228c.65-.315 1.549-.57 2.404-.72v2.387c0 .2 0 .413.015.588.015.162.054.509.299.812.274.34.692.536 1.133.525.394-.01.685-.209.817-.303.142-.103.302-.242.452-.372l.026-.022a.622.622 0 0 0 .012-.01l.008-.008 6.54-5.99.008-.007c.085-.073.19-.165.276-.253a1.43 1.43 0 0 0 .332-.518 1.42 1.42 0 0 0 0-.95 1.43 1.43 0 0 0-.332-.518 4.482 4.482 0 0 0-.276-.253l-.005-.004-6.539-6.063a.784.784 0 0 0-.024-.022l-.026-.022a6.9 6.9 0 0 0-.452-.372c-.132-.094-.423-.293-.817-.303Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgRedo;
