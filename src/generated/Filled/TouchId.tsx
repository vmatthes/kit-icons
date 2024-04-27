import * as React from "react";
import { SVGProps } from "react";
const SvgTouchId = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M7.905 4.098A7.94 7.94 0 0 1 11.941 3C16.407 3 20 6.675 20 11.173c0 2.31-.317 4.546-.91 6.665a1 1 0 1 1-1.927-.54c.545-1.944.837-3.999.837-6.125C18 7.75 15.272 5 11.941 5a5.94 5.94 0 0 0-3.022.822 1 1 0 1 1-1.014-1.724Zm-1.584 2.62a1 1 0 0 1 .375 1.363 6.23 6.23 0 0 0-.814 3.092c0 1.555-.351 3.03-.98 4.345a1 1 0 1 1-1.804-.863 8.051 8.051 0 0 0 .784-3.482 8.23 8.23 0 0 1 1.076-4.081 1 1 0 0 1 1.363-.374Zm1.09 4.455c0-2.518 2.013-4.586 4.53-4.586 2.517 0 4.53 2.069 4.53 4.586 0 .957-.065 1.9-.189 2.824a1 1 0 0 1-1.982-.267c.112-.836.17-1.69.17-2.557 0-1.443-1.147-2.586-2.529-2.586s-2.53 1.143-2.53 2.586A13.628 13.628 0 0 1 7.34 18.43a1 1 0 0 1-1.727-1.009l.061-.101a11.628 11.628 0 0 0 1.738-6.147Zm4.53-1a1 1 0 0 1 1 1c0 3.345-.944 6.469-2.579 9.11a1 1 0 0 1-1.7-1.054 15.257 15.257 0 0 0 2.28-8.056 1 1 0 0 1 .999-1Zm3.066 5.417a1 1 0 0 1 .695 1.232c-.35 1.259-.815 2.47-1.382 3.62a1 1 0 0 1-1.794-.884c.512-1.04.933-2.134 1.25-3.273a1 1 0 0 1 1.231-.695Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgTouchId;
