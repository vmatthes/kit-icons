import * as React from "react";
import { SVGProps } from "react";
const SvgBoxedGraph = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M4 8.832c0-1.524 0-2.287.301-2.907A3.075 3.075 0 0 1 5.52 4.626c.6-.34 1.332-.388 2.798-.483C9.567 4.063 10.892 4 12 4c1.107 0 2.433.063 3.683.143 1.466.095 2.199.143 2.798.483.515.292.96.767 1.218 1.299.301.62.301 1.383.301 2.907v6.336c0 1.524 0 2.287-.301 2.907a3.075 3.075 0 0 1-1.218 1.299c-.6.34-1.332.388-2.798.483A60.11 60.11 0 0 1 12 20a60.11 60.11 0 0 1-3.683-.143c-1.466-.095-2.199-.143-2.798-.483A3.075 3.075 0 0 1 4.3 18.075C4 17.455 4 16.692 4 15.168V8.832Z"
      fill={props.color || "#000"}
    />
    <path
      d="M15 11.59V13a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1h-3.429a1 1 0 1 0 0 2h1.163l-1.992 2.276-1.82-.849a1 1 0 0 0-1.326.478l-1.5 3.167a1 1 0 0 0 1.808.856l1.074-2.268 1.6.746a1 1 0 0 0 1.175-.248L15 11.59Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.253 3.146A61.076 61.076 0 0 1 12 3c1.14 0 2.49.064 3.748.146l.04.002c.698.045 1.284.083 1.767.156.51.076.975.2 1.42.453A4.074 4.074 0 0 1 20.6 5.488c.225.464.317.946.36 1.47.041.5.041 1.106.041 1.834v6.416c0 .728 0 1.334-.041 1.834-.043.524-.135 1.006-.36 1.47a4.074 4.074 0 0 1-1.624 1.731c-.445.253-.91.377-1.42.453-.483.073-1.069.11-1.767.156l-.04.002A61.015 61.015 0 0 1 12 21c-1.14 0-2.49-.064-3.747-.146l-.041-.002c-.698-.045-1.284-.083-1.768-.156-.51-.076-.974-.2-1.42-.453a4.074 4.074 0 0 1-1.623-1.731c-.225-.464-.317-.946-.36-1.47C3 16.542 3 15.936 3 15.208V8.792c0-.728 0-1.334.041-1.834.043-.524.135-1.006.36-1.47a4.074 4.074 0 0 1 1.624-1.731c.445-.253.91-.377 1.42-.453.483-.073 1.069-.11 1.767-.156l.04-.002ZM12 5c-1.076 0-2.376.061-3.618.141-.75.049-1.25.082-1.64.14-.373.057-.575.127-.73.215a2.076 2.076 0 0 0-.811.866c-.076.156-.134.366-.167.76C5.001 7.53 5 8.053 5 8.831v6.336c0 .778 0 1.302.034 1.71.033.394.09.604.167.76.17.35.473.674.811.866.155.088.357.158.73.214.39.059.89.092 1.64.14A59.13 59.13 0 0 0 12 19c1.076 0 2.376-.061 3.618-.141.75-.049 1.25-.082 1.64-.14.373-.057.575-.127.73-.215.338-.192.641-.516.811-.866.076-.156.134-.366.167-.76.033-.408.034-.932.034-1.71V8.832c0-.778 0-1.302-.034-1.71-.033-.394-.09-.604-.167-.76a2.076 2.076 0 0 0-.811-.866c-.155-.088-.357-.158-.73-.214-.39-.059-.89-.092-1.64-.14A59.165 59.165 0 0 0 12 5Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgBoxedGraph;
