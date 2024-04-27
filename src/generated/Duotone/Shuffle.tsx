import * as React from "react";
import { SVGProps } from "react";
const SvgShuffle = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.293 5.293a1 1 0 0 1 1.414 0l1.995 1.995.005.005a.996.996 0 0 1 .292.752.985.985 0 0 1-.561.931l-1.73 1.731a1 1 0 0 1-1.415-1.414l.286-.286c-.919.093-1.732.374-2.421.962-.752.642-1.334 1.513-2.008 2.523-.176.264-.359.538-.553.82-.872 1.268-1.964 2.666-3.668 3.328-1.086.421-1.8.38-2.633.33a33.03 33.03 0 0 0-.346-.02.99.99 0 0 1-.949-1.032.994.994 0 0 1 1.049-.934l.376.02c.8.044 1.107.061 1.77-.196 1.087-.422 1.886-1.352 2.746-2.6.149-.218.302-.448.46-.685.281-.425.579-.872.9-1.31l1.546-1.732c1.147-.978 2.466-1.357 3.765-1.454l-.32-.32a1 1 0 0 1 0-1.414Z"
      fill={props.color || "#000"}
    />
    <path
      d="M12.848 8.481c-.58.495-1.087 1.104-1.546 1.731l1.546-1.73ZM6.697 9.226c-.378-.282-.759-.316-1.569-.214a.996.996 0 0 1-1.12-.846.984.984 0 0 1 .864-1.097c.893-.113 1.988-.186 3.038.6.268.2.524.411.767.63a.966.966 0 0 1 .06 1.384 1.015 1.015 0 0 1-1.414.059 8.645 8.645 0 0 0-.624-.513l-.002-.002ZM17.707 13.293a1 1 0 0 0-1.414 1.414l.472.472a4.92 4.92 0 0 1-.363-.007c-.28-.016-.433-.057-.488-.082-.161-.073-.415-.297-.683-.614a6.06 6.06 0 0 1-.37-.486l-.018-.028-.003-.004a1 1 0 0 0-1.68 1.084l.001.003.003.004.01.015a8.46 8.46 0 0 0 .142.205c.093.13.226.307.387.498.294.348.79.874 1.383 1.143.39.177.833.237 1.2.259l.125.006-.118.118a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgShuffle;