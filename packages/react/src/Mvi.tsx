
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMvi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.857 4.714a1.286 1.286 0 1 0 0 2.572 1.286 1.286 0 0 0 0-2.572M6.763 10.5c0-.587 2.344-1.071 5.237-1.071s5.237.484 5.237 1.071c0 .591-2.622 1.072-5.237 1.072-2.623 0-5.237-.472-5.237-1.072m-1.62.214s0 1.715 6.857 1.715 6.857-1.715 6.857-1.715c0 1.758-1.62 5.46-2.622 6.095-.515.325-.665-.249-.823-.87-.15-.583-.313-1.205-.798-1.175-.497.035-.9 1.042-1.302 2.053-.407 1.02-.815 2.04-1.312 2.04s-.9-1.028-1.303-2.048c-.411-1.038-.814-2.07-1.32-2.04-.475.034-.643.643-.788 1.208-.163.613-.309 1.17-.832.836-.99-.634-2.614-4.333-2.614-6.099"/>
        </>
      ) : (
        <>
          <path fill="url(#MVI__a)" d="M15.857 4.714a1.286 1.286 0 1 0 0 2.572 1.286 1.286 0 0 0 0-2.572M6.763 10.5c0-.587 2.344-1.071 5.237-1.071s5.237.484 5.237 1.071c0 .591-2.623 1.072-5.237 1.072-2.623 0-5.237-.472-5.237-1.072m-1.62.214s0 1.715 6.857 1.715 6.857-1.715 6.857-1.715c0 1.758-1.62 5.46-2.623 6.095-.514.325-.664-.249-.823-.87-.15-.583-.313-1.205-.797-1.175-.497.035-.9 1.042-1.303 2.053-.407 1.02-.814 2.04-1.311 2.04s-.9-1.028-1.303-2.048c-.412-1.038-.814-2.07-1.32-2.04-.476.034-.643.643-.789 1.208-.163.613-.308 1.17-.831.836-.99-.634-2.614-4.333-2.614-6.099"/><defs><linearGradient id="MVI__a" x1="16.43" x2="7.427" y1="6.298" y2="16.944" gradientUnits="userSpaceOnUse"><stop stopColor="#3AFCE7"/><stop offset="1" stopColor="#FC5CDD"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconMvi.displayName = 'Mvi';

export default IconMvi;
