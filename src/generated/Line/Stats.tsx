import * as React from "react";
import { SVGProps } from "react";
const SvgStats = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 14a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2ZM12 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM17 11a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3c-1.14 0-2.49.064-3.747.146l-.041.002c-.698.045-1.284.083-1.768.156-.51.076-.974.2-1.42.453a4.074 4.074 0 0 0-1.623 1.731c-.225.464-.317.946-.36 1.47C3 7.458 3 8.064 3 8.792v6.416c0 .728 0 1.334.041 1.834.043.524.135 1.006.36 1.47.347.714.933 1.34 1.624 1.731.445.253.91.377 1.42.453.483.073 1.068.11 1.767.156l.04.002C9.512 20.936 10.862 21 12 21c1.14 0 2.49-.064 3.748-.146l.04-.002c.698-.045 1.284-.083 1.767-.156.51-.076.975-.2 1.42-.453a4.074 4.074 0 0 0 1.624-1.731c.225-.464.317-.946.36-1.47.041-.5.041-1.106.041-1.834V8.792c0-.728 0-1.334-.041-1.834-.043-.524-.135-1.006-.36-1.47a4.074 4.074 0 0 0-1.624-1.731c-.445-.253-.91-.377-1.42-.453-.483-.073-1.069-.11-1.767-.156l-.04-.002A61.078 61.078 0 0 0 12 3ZM8.382 5.141A59.169 59.169 0 0 1 12 5c1.076 0 2.376.061 3.618.141.75.049 1.25.082 1.64.14.373.057.575.127.73.215.338.192.641.515.811.866.076.156.134.366.167.76.033.408.034.932.034 1.71v6.336c0 .778 0 1.302-.034 1.71-.033.394-.09.604-.167.76-.17.35-.473.674-.811.866-.155.088-.357.158-.73.214-.39.059-.89.092-1.64.14C14.376 18.94 13.076 19 12 19a59.13 59.13 0 0 1-3.618-.141c-.75-.049-1.25-.082-1.64-.14-.373-.057-.575-.127-.73-.215a2.076 2.076 0 0 1-.811-.866c-.076-.156-.134-.366-.167-.76-.033-.408-.034-.932-.034-1.71V8.832c0-.778 0-1.302.034-1.71.033-.394.09-.604.167-.76.17-.35.473-.674.811-.866.155-.088.357-.158.73-.214.39-.059.89-.092 1.64-.14Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgStats;
