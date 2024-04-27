import * as React from "react";
import { SVGProps } from "react";
const SvgSecurity = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M11.775 3.026a1 1 0 0 1 .45 0l.008.001.02.005.073.017a40.685 40.685 0 0 1 1.18.297c.715.19 1.63.45 2.345.718.761.285 1.675.722 2.38 1.075a49.182 49.182 0 0 1 1.15.597l.071.038.02.01.006.004c.321.175.522.513.522.879V12c0 3.55-2.018 5.82-3.927 7.153a13.198 13.198 0 0 1-3.722 1.788l-.072.02-.021.005-.007.002-.004.001a1.005 1.005 0 0 1-.494 0h-.004l-.007-.003-.021-.005a6.665 6.665 0 0 1-.324-.096 13.2 13.2 0 0 1-3.47-1.711C6.018 17.82 4 15.55 4 12V6.667a1 1 0 0 1 .521-.878l.008-.004.019-.01.071-.04a40.613 40.613 0 0 1 1.15-.596c.705-.353 1.619-.79 2.38-1.075.715-.268 1.63-.529 2.344-.718a49.313 49.313 0 0 1 1.18-.297l.075-.017.02-.005.007-.001ZM10 10a2 2 0 1 1 2.969 1.75c.02.08.031.164.031.25v3a1 1 0 1 1-2 0v-3c0-.086.01-.17.031-.25A2 2 0 0 1 10 10Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSecurity;
