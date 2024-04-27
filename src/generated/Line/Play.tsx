import * as React from "react";
import { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="m9.307 4.772.032.024 7.407 5.374.03.021c.209.152.419.304.582.448.176.154.397.38.523.711.159.418.159.882 0 1.3-.126.33-.347.556-.523.711a8.419 8.419 0 0 1-.583.448l-.029.021-7.44 5.398c-.255.186-.502.365-.716.491-.21.124-.56.306-.992.278a1.69 1.69 0 0 1-1.277-.73c-.228-.328-.279-.695-.3-.945C6 18.067 6 17.752 6 17.412V6.588c0-.34 0-.655.021-.91.021-.25.072-.617.3-.945a1.69 1.69 0 0 1 1.277-.73c.432-.028.783.154.992.278.214.126.46.305.717.49ZM8 6.295 8 6.625v11.08l.165-.12 7.407-5.374c.116-.084.209-.151.288-.211-.08-.06-.172-.127-.288-.211L8.165 6.414 8 6.295Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPlay;
