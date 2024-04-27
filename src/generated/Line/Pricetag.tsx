import * as React from "react";
import { SVGProps } from "react";
const SvgPricetag = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M10.762 5.017c-.044-.01-.103-.017-.547-.017H6.591c-.47 0-.762 0-.982.019-.208.017-.262.044-.27.048a.62.62 0 0 0-.271.271c-.005.009-.032.063-.05.271-.017.22-.018.512-.018.982v3.624c0 .444.006.502.017.547a.62.62 0 0 0 .074.18c.024.038.061.084.375.398l6.21 6.21c.493.493.82.82 1.092 1.05.263.223.406.297.508.33.287.093.597.093.884 0 .101-.033.245-.107.508-.33.271-.23.599-.557 1.091-1.05l1.792-1.79c.492-.493.819-.821 1.05-1.092.222-.263.296-.407.329-.508a1.43 1.43 0 0 0 0-.884c-.033-.102-.107-.245-.33-.508-.23-.272-.557-.599-1.05-1.092l-6.21-6.21c-.313-.314-.36-.35-.399-.375a.62.62 0 0 0-.179-.074ZM10.288 3c.323 0 .636-.001.941.072.267.064.523.17.757.314.268.164.489.385.717.614l.052.052 6.238 6.238c.457.457.842.843 1.132 1.184.303.357.56.731.707 1.184a3.43 3.43 0 0 1 0 2.12c-.147.452-.404.827-.707 1.184-.29.341-.675.726-1.132 1.183l-1.848 1.848c-.457.457-.842.842-1.183 1.132-.357.303-.731.56-1.184.707a3.43 3.43 0 0 1-2.12 0c-.453-.147-.827-.404-1.184-.707-.341-.29-.727-.675-1.184-1.132l-6.238-6.239L4 12.703c-.228-.228-.45-.45-.614-.717a2.62 2.62 0 0 1-.314-.757C3 10.924 3 10.611 3 10.289V6.554c0-.422 0-.798.025-1.109.028-.332.088-.678.26-1.016A2.62 2.62 0 0 1 4.43 3.285c.338-.172.684-.233 1.016-.26C5.757 3 6.133 3 6.555 3h3.733ZM7.454 8.859a1.405 1.405 0 1 1 2.81 0 1.405 1.405 0 0 1-2.81 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPricetag;
