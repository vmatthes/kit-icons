import * as React from "react";
import { SVGProps } from "react";
const SvgArrowLeftDown = (
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
      d="M14.044 15.706a1 1 0 0 1-.8 1.166l-.02.004-.051.009a36.994 36.994 0 0 1-.827.14c-.502.08-1.155.175-1.685.215-.6.045-1.346.044-1.92.034a40.523 40.523 0 0 1-.95-.029l-.06-.003h-.015a.992.992 0 0 1-.666-.292.997.997 0 0 1-.292-.67v-.012l-.003-.06a33.57 33.57 0 0 1-.029-.948c-.01-.576-.011-1.322.034-1.921.04-.53.134-1.183.214-1.685a41.05 41.05 0 0 1 .14-.827l.01-.052.004-.019a1 1 0 0 1 1.966.367l-.003.014-.008.047a31.381 31.381 0 0 0-.134.785 20.38 20.38 0 0 0-.195 1.52c-.008.114-.015.235-.02.362l6.802-6.8a1 1 0 1 1 1.414 1.413l-6.802 6.802c.127-.005.25-.012.363-.02a20.349 20.349 0 0 0 1.52-.195 38.498 38.498 0 0 0 .784-.134l.047-.008.015-.003a1 1 0 0 1 1.167.8Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgArrowLeftDown;