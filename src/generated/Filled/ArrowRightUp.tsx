import * as React from "react";
import { SVGProps } from "react";
const SvgArrowRightUp = (
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
      d="M9.956 8.294a1 1 0 0 1 .8-1.166l.02-.004.051-.01a33.108 33.108 0 0 1 .827-.14c.502-.08 1.155-.174 1.685-.214.6-.045 1.346-.044 1.92-.034a41.236 41.236 0 0 1 .95.029l.06.002.015.001a.995.995 0 0 1 .889.631 1.01 1.01 0 0 1 .069.33v.013l.003.06a31.585 31.585 0 0 1 .029.948c.01.576.011 1.321-.034 1.921-.04.53-.134 1.183-.214 1.685a41 41 0 0 1-.14.827l-.01.052-.004.019a1 1 0 0 1-1.966-.367l.003-.014.008-.047a37.016 37.016 0 0 0 .134-.785c.078-.492.161-1.077.194-1.52.01-.114.016-.235.02-.362l-6.8 6.8a1 1 0 0 1-1.415-1.413l6.802-6.802c-.127.005-.25.012-.363.02-.443.034-1.028.117-1.52.195a39.298 39.298 0 0 0-.784.134l-.047.008-.015.003a1 1 0 0 1-1.167-.8Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgArrowRightUp;
