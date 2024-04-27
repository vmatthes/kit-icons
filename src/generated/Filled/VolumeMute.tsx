import * as React from "react";
import { SVGProps } from "react";
const SvgVolumeMute = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.919 4.588a1.37 1.37 0 0 0-1.244-.582c-.461.043-.765.349-.87.454l-.002.002c-.136.137-.29.32-.44.502L6.806 8.03l-.076.09H5.468c-.196 0-.408 0-.591.018a1.71 1.71 0 0 0-.742.234 1.823 1.823 0 0 0-.464.437 1.8 1.8 0 0 0-.16.24c-.054.092-.12.24-.155.341a2.14 2.14 0 0 0-.082.318l-.002.011C3.185 10.171 3 11.21 3 12c0 .86.22 2.024.296 2.403.012.06.024.115.053.21.022.07.073.199.105.265l.009.019.004.01a1.022 1.022 0 0 0 .051.097l.006.01.002.002c.148.24.352.456.61.613.264.162.53.213.741.234.183.018.395.018.59.017h1.264l.076.09 2.555 3.067c.151.18.305.365.44.502l.003.002c.105.105.409.41.87.454a1.37 1.37 0 0 0 1.244-.582c.214-.301.25-.64.263-.806a8.54 8.54 0 0 0 .018-.672c.129-.588.8-3.748.8-5.934 0-2.187-.671-5.346-.8-5.934a8.54 8.54 0 0 0-.018-.672c-.014-.166-.05-.505-.263-.806ZM15.293 14.707a1 1 0 0 1 0-1.414L16.586 12l-1.293-1.293a1 1 0 0 1 1.414-1.414L18 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414L19.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L18 13.414l-1.293 1.293a1 1 0 0 1-1.414 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgVolumeMute;
