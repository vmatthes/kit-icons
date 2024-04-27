import * as React from "react";
import { SVGProps } from "react";
const SvgVolume = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.412 4.59a1 1 0 0 0-1.824.82C18.675 7.83 19 9.346 19 12c0 2.646-.439 4.424-1.412 6.59a1 1 0 0 0 1.824.82C20.494 17.002 21 14.946 21 12c0-2.937-.384-4.73-1.588-7.41Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.675 4.006a1.37 1.37 0 0 1 1.244.582c.214.301.25.64.263.806.017.194.018.43.018.672.129.588.8 3.748.8 5.934 0 2.187-.671 5.346-.8 5.934 0 .242-.001.478-.018.672-.014.166-.05.505-.263.806a1.37 1.37 0 0 1-1.244.582c-.461-.043-.765-.349-.87-.454l-.002-.002a8.143 8.143 0 0 1-.44-.502L6.806 15.97l-.076-.09H5.468c-.196 0-.408 0-.591-.018a1.71 1.71 0 0 1-.742-.234 1.857 1.857 0 0 1-.61-.613v-.002l-.007-.01a.964.964 0 0 1-.05-.096l-.005-.011-.01-.02a2.598 2.598 0 0 1-.104-.264 1.783 1.783 0 0 1-.053-.21C3.22 14.022 3 12.86 3 12c0-.79.185-1.83.272-2.28l.002-.012a2.14 2.14 0 0 1 .082-.318c.035-.101.101-.249.155-.342a1.8 1.8 0 0 1 .16-.239c.062-.08.23-.294.464-.437a1.71 1.71 0 0 1 .742-.234c.183-.018.395-.018.59-.017h1.264l.076-.09 2.555-3.067c.151-.181.305-.365.44-.502l.003-.002c.105-.105.409-.41.87-.454Zm-.339 2.913C10.553 7.975 11 10.354 11 12c0 1.646-.447 4.025-.664 5.08l-1.993-2.39-.03-.037c-.103-.125-.25-.303-.434-.438a1.735 1.735 0 0 0-.547-.27 2.193 2.193 0 0 0-.621-.066H5.23C5.145 13.423 5 12.571 5 12c0-.565.142-1.411.231-1.878l.269-.002h1.21c.147.002.387.003.622-.065.2-.058.385-.15.547-.27.184-.135.33-.313.434-.438l.03-.036 1.993-2.392Z"
      fill={props.color || "#000"}
    />
    <path
      d="M15.22 7.54a1 1 0 0 1 1.24.68c.413 1.416.54 2.304.54 3.78s-.127 2.364-.54 3.78a1 1 0 1 1-1.92-.56c.36-1.235.46-1.934.46-3.22 0-1.286-.1-1.986-.46-3.22a1 1 0 0 1 .68-1.24Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgVolume;
