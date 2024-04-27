import * as React from "react";
import { SVGProps } from "react";
const SvgRepeat = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M15.192 3.283a1 1 0 0 1 1.414.02l3.111 3.2a1 1 0 0 1 0 1.394l-3.111 3.2a1 1 0 1 1-1.434-1.394l1.576-1.622c-.27-.023-.543-.047-.82-.073l-.531-.05c-.957-.089-1.943-.181-2.924-.238-1.164-.067-2.284-.083-3.286.011-1.01.095-1.836.295-2.449.616-.249.13-.456.342-.588.607-.047.095-.094.248-.121.589C6 9.894 6 10.352 6 11.04v.16a1 1 0 1 1-2 0v-.199c0-.639 0-1.176.035-1.617.036-.46.116-.899.323-1.317A3.368 3.368 0 0 1 5.81 6.576c.937-.491 2.053-.73 3.19-.836 1.147-.108 2.38-.087 3.589-.017 1.02.06 2.046.156 3.002.245l.521.049.376.034-1.316-1.354a1 1 0 0 1 .02-1.414ZM19 11.8a1 1 0 0 1 1 1v.199c0 .639 0 1.176-.035 1.617-.037.46-.116.899-.323 1.318a3.368 3.368 0 0 1-1.452 1.49c-.937.491-2.053.73-3.19.836-1.147.107-2.38.087-3.589.017a85.574 85.574 0 0 1-3.002-.245 441.606 441.606 0 0 0-.897-.083l1.316 1.354a1 1 0 0 1-1.434 1.394l-3.111-3.2a1 1 0 0 1 0-1.394l3.111-3.2a1 1 0 1 1 1.434 1.394L7.251 15.92c.27.022.544.047.82.073l.532.05c.957.089 1.943.181 2.924.238 1.164.067 2.284.083 3.286-.011 1.01-.095 1.836-.295 2.449-.616.248-.13.456-.341.588-.607.046-.095.094-.248.121-.589.028-.351.029-.809.029-1.497v-.16a1 1 0 0 1 1-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgRepeat;
