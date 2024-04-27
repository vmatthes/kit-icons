import * as React from "react";
import { SVGProps } from "react";
const SvgPause = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity={0.15} fill={props.color || "#000"}>
      <path d="M7.956 5h-.467c-.871 0-1.307 0-1.64.17-.292.149-.53.387-.68.68C5 6.181 5 6.617 5 7.488v9.022c0 .871 0 1.307.17 1.64.149.292.387.53.68.68.332.169.768.169 1.639.169h.467c.87 0 1.306 0 1.64-.17.292-.149.53-.387.679-.68.17-.332.17-.768.17-1.639V7.49c0-.871 0-1.307-.17-1.64a1.555 1.555 0 0 0-.68-.68C9.262 5 8.827 5 7.955 5ZM16.511 5h-.467c-.87 0-1.306 0-1.64.17-.292.149-.53.387-.679.68-.17.332-.17.768-.17 1.639v9.022c0 .871 0 1.307.17 1.64.15.292.387.53.68.68.333.169.768.169 1.64.169h.466c.871 0 1.307 0 1.64-.17.292-.149.53-.387.68-.68.169-.332.169-.768.169-1.639V7.49c0-.871 0-1.307-.17-1.64a1.556 1.556 0 0 0-.68-.68C17.819 5 17.383 5 16.512 5Z" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.452 4h.54c.404 0 .766 0 1.067.025.32.026.66.085.99.254.48.245.872.636 1.117 1.116.168.331.228.67.254.99.024.301.024.663.024 1.067v9.095c0 .405 0 .767-.024 1.067-.026.322-.085.66-.254.99-.245.482-.636.873-1.117 1.117-.33.169-.67.228-.99.255-.3.024-.663.024-1.067.024h-.54c-.404 0-.766 0-1.066-.024-.321-.027-.66-.086-.99-.255a2.555 2.555 0 0 1-1.117-1.116c-.169-.331-.228-.67-.254-.99C4 17.313 4 16.951 4 16.547V7.451c0-.404 0-.766.025-1.066.026-.321.085-.66.254-.99.245-.481.636-.872 1.116-1.117.331-.169.67-.228.99-.254C6.687 4 7.049 4 7.453 4ZM6.303 6.06a.556.556 0 0 0-.242.243c-.002.004-.027.052-.043.246C6 6.758 6 7.037 6 7.489v9.022c0 .452 0 .731.018.94.016.194.04.242.042.245.054.105.139.19.243.243.004.002.052.027.246.043.209.017.488.018.94.018h.467c.452 0 .73 0 .94-.018.194-.016.242-.04.245-.043a.556.556 0 0 0 .243-.242c.002-.004.027-.052.043-.246.017-.209.017-.488.017-.94V7.49c0-.452 0-.731-.017-.94-.016-.194-.041-.242-.043-.246a.556.556 0 0 0-.243-.242c-.003-.002-.051-.027-.245-.043A13.08 13.08 0 0 0 7.956 6h-.467c-.452 0-.731 0-.94.018-.194.016-.242.04-.246.043ZM16.008 4h.54c.404 0 .766 0 1.066.025.322.026.66.085.99.254.482.245.873.636 1.117 1.116.169.331.228.67.255.99.024.301.024.663.024 1.067v9.096c0 .404 0 .766-.024 1.066-.027.322-.086.66-.255.99-.244.482-.636.873-1.116 1.117-.331.169-.67.228-.99.255-.301.024-.663.024-1.067.024h-.54c-.404 0-.766 0-1.067-.024-.32-.027-.66-.086-.99-.255a2.556 2.556 0 0 1-1.117-1.116c-.168-.331-.228-.67-.254-.99-.024-.301-.024-.663-.024-1.067V7.451c0-.404 0-.766.024-1.066.026-.321.085-.66.254-.99.245-.481.636-.872 1.117-1.117.33-.169.67-.228.99-.254.3-.025.663-.025 1.067-.025Zm-1.15 2.06a.556.556 0 0 0-.242.243c-.002.004-.027.052-.043.246-.017.209-.017.488-.017.94v9.022c0 .452 0 .731.017.94.016.194.041.242.043.245.053.105.138.19.243.243.003.002.051.027.245.043.21.017.488.018.94.018h.467c.452 0 .731 0 .94-.018.194-.016.242-.04.245-.043a.556.556 0 0 0 .243-.242c.001-.002.027-.048.043-.246.017-.209.018-.488.018-.94V7.49c0-.452 0-.731-.018-.94-.016-.194-.04-.242-.043-.246a.556.556 0 0 0-.242-.242c-.004-.002-.052-.027-.246-.043C17.242 6 16.963 6 16.511 6h-.467c-.452 0-.73 0-.94.018-.194.016-.242.04-.245.043Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPause;