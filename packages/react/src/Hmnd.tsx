
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHmnd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M18.857 17.083 12.01 5.143l-6.866 12c.711-.33 1.856-.737 2.884-.737.592 0 1.175.116 1.62.206.266.051.506.103.639.103 1.174 0 2.13-.733 2.606-1.093.154-.116.257-.193.3-.193.3 0 .437.223.57.437.137.214.27.424.548.424.112 0 .189-.085.274-.18.108-.12.228-.253.438-.253.48 0 .801.549.93.853.034-.15.184-.42.488-.42.227 0 .364.21.48.386.086.12.154.227.232.227.068 0 .107-.026.162-.056.095-.06.228-.137.63-.137.352 0 .665.172.91.373z"/><path fill="currentColor" d="M18.857 17.092 12.013 5.143 5.156 17.126c.711-.36 1.843-.836 2.871-.836.592 0 1.175.163 1.62.287.266.077.506.137.639.137 1.174 0 2.13-.728 2.606-1.088.154-.12.257-.197.3-.197.3 0 .437.218.574.437.133.214.266.42.549.42.107 0 .184-.086.27-.18.107-.116.227-.249.437-.249.48 0 .801.558.93.858.034-.146.184-.43.488-.43.227 0 .364.215.48.387.086.124.154.231.232.231.068 0 .107-.026.162-.056.095-.055.228-.128.63-.128.352 0 .67.171.913.373"/>
        </>
      ) : (
        <>
          <path fill="url(#HMND__a)" d="m18.857 17.083-6.849-11.94-6.865 12c.711-.33 1.855-.737 2.884-.737.591 0 1.174.116 1.62.206.266.051.506.103.638.103 1.175 0 2.13-.733 2.606-1.093.154-.116.257-.193.3-.193.3 0 .437.223.57.437.137.214.27.424.549.424.111 0 .188-.085.274-.18.107-.12.227-.253.437-.253.48 0 .802.549.93.853.034-.15.184-.42.489-.42.227 0 .364.21.48.386.085.12.154.227.231.227.069 0 .107-.026.163-.056.094-.06.227-.137.63-.137.351 0 .664.172.909.373z"/><path fill="url(#HMND__b)" d="M18.857 17.092 12.013 5.143 5.155 17.126c.712-.36 1.843-.836 2.872-.836.591 0 1.174.163 1.62.287.266.077.506.137.638.137 1.175 0 2.13-.728 2.606-1.088.154-.12.257-.197.3-.197.3 0 .437.218.574.437.133.214.266.42.549.42.107 0 .184-.086.27-.18.107-.116.227-.249.437-.249.48 0 .802.558.93.858.034-.146.184-.43.489-.43.227 0 .364.215.48.387.085.124.154.231.231.231.069 0 .107-.026.163-.056.094-.055.227-.128.63-.128.351 0 .669.171.913.373"/><defs><linearGradient id="HMND__a" x1="12" x2="12" y1="5.143" y2="17.143" gradientUnits="userSpaceOnUse"><stop stopColor="#B4386C"/><stop offset="1" stopColor="#F87056"/></linearGradient><linearGradient id="HMND__b" x1="13.405" x2="17.678" y1="14.1" y2="16.453" gradientUnits="userSpaceOnUse"><stop stopColor="#FDC570" stopOpacity="0"/><stop offset="1" stopColor="#FEC574"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconHmnd.displayName = 'Hmnd';

export default IconHmnd;
