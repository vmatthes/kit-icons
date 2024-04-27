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
      d="M11.314 4.493a1.41 1.41 0 0 1 1.133-.525c.394.01.685.209.817.303.142.103.302.242.453.372l.024.022a.784.784 0 0 1 .025.022l6.54 6.063a.213.213 0 0 0 .004.004c.085.073.19.164.276.253.099.102.245.271.332.518.11.307.11.643 0 .95a1.43 1.43 0 0 1-.332.518c-.086.088-.191.18-.276.253l-.007.006-6.541 5.99a.878.878 0 0 1-.02.019l-.026.022c-.15.13-.31.27-.452.371-.132.095-.423.294-.817.304a1.41 1.41 0 0 1-1.133-.525c-.245-.303-.284-.65-.299-.812a7.045 7.045 0 0 1-.015-.588v-2.387c-.855.15-1.755.405-2.404.72a8.395 8.395 0 0 0-2.823 2.228A1 1 0 0 1 4 17.96v-.51a9.096 9.096 0 0 1 2.274-6.018C7.463 10.088 9.294 9.15 11 8.698V5.893c0-.201 0-.413.015-.588.015-.162.054-.509.299-.812ZM13 6.704 18.71 12 13 17.229v-2.715a1 1 0 0 0-1.068-.998c-1.28.088-2.991.46-4.209 1.05-.496.241-.971.521-1.421.836a7.067 7.067 0 0 1 1.471-2.645c1.006-1.138 2.802-1.99 4.401-2.272A1 1 0 0 0 13 9.5V6.704Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgRedo;
