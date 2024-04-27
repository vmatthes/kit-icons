import * as React from "react";
import { SVGProps } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M3.822 4.864A2.816 2.816 0 0 1 5.846 4h4.414a2.197 2.197 0 0 1 1.59.678l1.739 1.799a.214.214 0 0 0 .152.068h4.413c.766 0 1.493.315 2.024.864.53.548.822 1.285.822 2.046v7.136c0 .76-.292 1.497-.822 2.045a2.817 2.817 0 0 1-1.952.863l-.111.014-.464.058c-.393.047-.943.11-1.57.174C14.839 19.87 13.259 20 12 20c-1.258 0-2.838-.13-4.082-.255a82.415 82.415 0 0 1-2.033-.232l-.111-.014a2.818 2.818 0 0 1-1.952-.863A2.943 2.943 0 0 1 3 16.591V6.909c0-.76.292-1.497.822-2.045Zm1.438 6.481a.816.816 0 0 1 .586-.254h12.308c.213 0 .425.087.586.254a1 1 0 0 0 1.438-1.39 2.816 2.816 0 0 0-2.024-.864H5.846c-.766 0-1.493.315-2.024.864a1 1 0 0 0 1.438 1.39Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgFolder;
