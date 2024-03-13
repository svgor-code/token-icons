
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLaunch = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.223 9.39c.677-.643 3.274-1.671 4.491-2.104-.827.428-2.631 1.414-3.235 1.954-.6.54-.969 1.65-1.076 2.139.107.004.189.034.189.115-.36 3.386-3.228 4.115-4.123 4.363 1.954-1.264 2.331-2.335 2.288-2.713-.085.052-.24.142-.313.142.969-2.966.935-3.086 1.779-3.896M14.91 7.294c-2.117.24-2.198 1.869-1.993 2.563.515-1.487 1.157-1.877 1.599-1.877.446 0 .874.351 1.226.351.355 0 .694-.222.767-.35-.322-.52-1.175-.738-1.599-.687"/><path fill="currentColor" d="M14.216 8.846c0-.065.154-.21.231-.274.073.055.227.18.227.235 0 .064-.154.193-.274.193-.124 0-.184-.077-.184-.154M9.922 7.843C7.41 6.729 6.536 5.293 6.429 4.714v1.222c0 .497.278 1.045.467 1.285.184.245.373.622.3.622a2 2 0 0 1-.489-.129c.412 1.445 2.13 2.07 3.587 2.327s2.726.896 3.005 1.102c-.017-.446-1.08-2.25-3.377-3.3M10.449 10.432c1.564.3 2.245.792 2.395 1.002-.57.343-1.534.618-2.014.558-3.231-.37-3.484-2.362-3.484-2.563.75.463 1.148.634 3.103 1.002M11.469 13.509c.415-.133 1.11-.776 1.363-1.08.128.565-.78 1.362-1.115 1.594-.33.231-1.26 1.029-1.165 1.114.184.163 1.371-.471 1.538-.523a.9.9 0 0 1 .223-.043c.043 0 .073.013.073.043-1.277.982-1.74 1.415-2.113 1.929-.369.514-.274 1.294-.463 1.714a2.52 2.52 0 0 1-2.186 1.457c-.021-.072-.042-.291.06-.6.086-.248.12-.458.12-.578 0-.06 0-.107-.03-.107-.205 0-.591.488-.758.857-.043-.36-.129-1.11-.129-1.346 0-1.41 1.183-2.49 1.779-2.854l2.803-1.942z"/>
        </>
      ) : (
        <>
          <path fill="url(#LAUNCH__a)" d="M15.223 9.39c.677-.643 3.274-1.671 4.491-2.104-.827.428-2.631 1.414-3.235 1.954-.6.54-.969 1.65-1.076 2.139.107.004.189.034.189.115-.36 3.386-3.228 4.115-4.123 4.363 1.954-1.264 2.331-2.335 2.288-2.713-.085.052-.24.142-.313.142.969-2.966.935-3.086 1.779-3.896"/><path fill="url(#LAUNCH__b)" d="M14.91 7.294c-2.117.24-2.198 1.869-1.993 2.563.515-1.487 1.157-1.877 1.599-1.877.446 0 .874.351 1.226.351.355 0 .694-.222.767-.35-.322-.52-1.175-.738-1.599-.687"/><path fill="#C771BC" d="M14.216 8.846c0-.065.154-.21.231-.274.073.055.227.18.227.235 0 .064-.154.193-.274.193-.124 0-.184-.077-.184-.154"/><path fill="url(#LAUNCH__c)" d="M9.922 7.843C7.41 6.729 6.536 5.293 6.429 4.714v1.222c0 .497.278 1.045.467 1.285.184.245.373.622.3.622a2 2 0 0 1-.489-.129c.412 1.445 2.13 2.07 3.587 2.327s2.726.896 3.005 1.102c-.017-.446-1.08-2.25-3.377-3.3"/><path fill="url(#LAUNCH__d)" d="M10.449 10.432c1.564.3 2.245.792 2.395 1.002-.57.343-1.534.618-2.014.558-3.231-.37-3.484-2.362-3.484-2.563.75.463 1.148.634 3.103 1.002"/><path fill="url(#LAUNCH__e)" d="M11.469 13.509c.415-.133 1.11-.776 1.363-1.08.128.565-.78 1.362-1.115 1.594-.33.231-1.26 1.029-1.165 1.114.184.163 1.371-.471 1.538-.523a.9.9 0 0 1 .223-.043c.043 0 .073.013.073.043-1.277.982-1.74 1.415-2.113 1.929-.369.514-.274 1.294-.463 1.714a2.52 2.52 0 0 1-2.186 1.457c-.021-.072-.042-.291.06-.6.086-.248.12-.458.12-.578 0-.06 0-.107-.03-.107-.205 0-.591.488-.758.857-.043-.36-.129-1.11-.129-1.346 0-1.41 1.183-2.49 1.779-2.854l2.803-1.942z"/><defs><linearGradient id="LAUNCH__a" x1="20.032" x2="7.342" y1="5.247" y2="17.428" gradientUnits="userSpaceOnUse"><stop stopColor="#D86582"/><stop offset="1" stopColor="#CE65C7"/></linearGradient><linearGradient id="LAUNCH__b" x1="20.615" x2="5.273" y1="8.334" y2="9.69" gradientUnits="userSpaceOnUse"><stop stopColor="#E064AB"/><stop offset="1" stopColor="#BE73D1"/></linearGradient><linearGradient id="LAUNCH__c" x1="6.064" x2="21.552" y1="5.154" y2="18.129" gradientUnits="userSpaceOnUse"><stop stopColor="#51A7E8"/><stop offset=".54" stopColor="#9386F2"/><stop offset="1" stopColor="#CE6DF3"/></linearGradient><linearGradient id="LAUNCH__d" x1="6.066" x2="21.54" y1="5.164" y2="18.11" gradientUnits="userSpaceOnUse"><stop stopColor="#51A7E8"/><stop offset=".54" stopColor="#9386F2"/><stop offset="1" stopColor="#CE6DF3"/></linearGradient><linearGradient id="LAUNCH__e" x1="12.642" x2="6.9" y1="16.063" y2="18.66" gradientUnits="userSpaceOnUse"><stop stopColor="#D265CA"/><stop offset="1" stopColor="#928AF1"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconLaunch.displayName = 'Launch';

export default IconLaunch;
