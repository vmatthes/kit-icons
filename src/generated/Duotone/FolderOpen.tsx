import * as React from "react";
import { SVGProps } from "react";
const SvgFolderOpen = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M4.689 10.113c.099-.014.2-.022.305-.022h14.012c.103 0 .205.008.304.022m-14.621 0a2.01 2.01 0 0 0-1.297.75c-.313.404-.446.91-.372 1.407l.76 4.59c.067.456.304.872.667 1.173.362.301.826.467 1.306.467 0 0 3.8.5 6.247.5s6.247-.5 6.247-.5c.48 0 .944-.166 1.306-.467.363-.301.6-.718.668-1.172l.759-4.591a1.848 1.848 0 0 0-.372-1.407 2.012 2.012 0 0 0-1.298-.75"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 9.258v-.44c0-1.416-1.154-2.636-2.614-2.636h-3.862a.075.075 0 0 1-.052-.024l-1.52-1.54A2.07 2.07 0 0 0 10.477 4H6.616C5.155 4 4 5.221 4 6.636v2.622c-1.254.44-2.187 1.7-1.97 3.16l.003.015.759 4.584c.226 1.484 1.52 2.45 2.89 2.482 4.247.547 8.39.547 12.636 0 1.37-.032 2.664-.998 2.89-2.482l.758-4.584.003-.015c.218-1.46-.716-2.72-1.97-3.16ZM6.616 6C6.298 6 6 6.287 6 6.636v2.477h12v-.295c0-.35-.298-.636-.616-.636h-3.862a2.073 2.073 0 0 1-1.472-.616l-1.523-1.544a.072.072 0 0 0-.05-.022H6.615Zm-2.607 6.117c-.06-.43.259-.897.767-1.004h14.448c.51.107.829.575.768 1.003l-.757 4.582-.002.015c-.065.432-.47.787-.985.787a.992.992 0 0 0-.13.008c-4.114.535-8.12.535-12.236 0a.992.992 0 0 0-.128-.008c-.516 0-.92-.355-.984-.786l-.003-.016-.758-4.582Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgFolderOpen;