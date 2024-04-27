import * as React from "react";
import { SVGProps } from "react";
const SvgDocumentDown = (
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
      d="M13 10a1 1 0 1 0-2 0v2.586l-.793-.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l2.5-2.5a1 1 0 0 0-1.414-1.414l-.793.793V10Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.991 2H12c.62 0 1.886.196 3.055.475.598.143 1.21.317 1.738.515.484.181 1.048.437 1.414.803.47.47.907 1.052 1.23 1.67.32.61.563 1.32.563 2.037v11.224a2.96 2.96 0 0 1-2.673 2.956c-1.49.143-3.665.32-5.327.32s-3.837-.177-5.327-.32A2.962 2.962 0 0 1 4 18.721V5.297a2.97 2.97 0 0 1 2.698-2.966c1.48-.134 3.62-.302 5.284-.33l.01-.001Zm5.675 4.39c.056.108.105.212.146.312a10.974 10.974 0 0 0-.859-.114c-.553-.053-1.226-.043-1.74-.022a.073.073 0 0 1-.048-.017.074.074 0 0 1-.029-.043 13.143 13.143 0 0 0-.327-1.312 7.858 7.858 0 0 0-.304-.794l.086.02c.551.132 1.076.284 1.5.442a4.4 4.4 0 0 1 .512.225c.064.034.112.063.146.087.032.022.044.033.044.033.334.335.648.753.873 1.184ZM12.008 4c.033 0 .072.001.115.004.118.292.242.55.35.775l.058.12c.142.296.265.567.374.907.097.302.193.713.272 1.1a2.08 2.08 0 0 0 2.117 1.659c.496-.02 1.056-.026 1.467.014.505.048.822.106 1.239.205v9.94a.96.96 0 0 1-.864.966c-1.484.142-3.577.31-5.136.31-1.559 0-3.652-.168-5.136-.31A.962.962 0 0 1 6 18.72V5.297a.97.97 0 0 1 .877-.974c1.47-.133 3.544-.295 5.13-.323Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgDocumentDown;
