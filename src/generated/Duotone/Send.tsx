import * as React from "react";
import { SVGProps } from "react";
const SvgSend = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity={0.15}
      d="M10.538 13.774 4 10c5.268-2.847 10.193-4.946 16.156-5.844C19.259 10.12 17.346 14.731 14.5 20l-3.962-6.226Zm0 0 4.659-4.658-4.659 4.658Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9.986a1 1 0 0 1 .525-.866c5.32-2.874 10.36-5.031 16.482-5.953a1 1 0 0 1 1.138 1.138c-.92 6.116-2.887 10.842-5.765 16.17a1 1 0 0 1-1.724.062l-3.83-6.02-6.326-3.65a1 1 0 0 1-.5-.881Zm8.813 3.928 2.607 4.098c2.16-4.184 3.671-8.022 4.519-12.637-4.625.865-8.66 2.491-12.872 4.664l4.307 2.485 4.115-4.115a1 1 0 1 1 1.415 1.414l-4.091 4.09Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSend;
