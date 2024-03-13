
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIcp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m12 13.252.022-.026c1.251 1.217 3.055 2.631 4.62 2.631A3.89 3.89 0 0 0 20.572 12c0-2.13-1.758-3.857-3.93-3.857-1.663 0-3.3 1.234-4.642 2.606zm4.586 1.045c1.337 0 2.421-1.028 2.421-2.297 0-1.268-1.084-2.297-2.425-2.297-1.342 0-2.649 1.243-3.566 2.297.608.686 2.228 2.297 3.566 2.297z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="m12.052 13.303-.086-.086c-1.213 1.205-3 2.64-4.607 2.64A3.89 3.89 0 0 1 3.429 12c0-2.13 1.757-3.857 3.93-3.857 1.688 0 3.257 1.333 4.577 2.756l.116-.12zm-4.638.994C6.073 14.297 4.99 13.27 4.99 12c0-1.268 1.084-2.297 2.425-2.297 1.342 0 2.649 1.243 3.566 2.297-.608.686-2.228 2.297-3.566 2.297" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="m10.817 11.859.103.09 1.05 1.337c1.234 1.153 3.034 2.571 4.672 2.571a3.91 3.91 0 0 0 3.857-3.111c-.335.604-1.5 1.551-3.583 1.53a3 3 0 0 1-.334.021c-1.342 0-2.958-1.611-3.566-2.297l.013-.017-1.265-1.521-1.264-1.2C9.49 8.49 8.443 8.006 7.294 8.006c-1.941 0-3.501 1.543-3.814 3.386.866-1.569 2.73-2.075 4.367-1.642 1.072.184 2.002 1.037 2.97 2.109"/>
        </>
      ) : (
        <>
          <path fill="url(#ICP__a)" d="m12 13.252.022-.026c1.251 1.217 3.055 2.631 4.62 2.631A3.89 3.89 0 0 0 20.572 12c0-2.13-1.758-3.857-3.93-3.857-1.663 0-3.3 1.234-4.642 2.606zm4.586 1.045c1.337 0 2.421-1.028 2.421-2.297 0-1.268-1.084-2.297-2.425-2.297-1.342 0-2.649 1.243-3.566 2.297.608.686 2.228 2.297 3.566 2.297z" fillRule="evenodd" clipRule="evenodd"/><path fill="url(#ICP__b)" d="m12.052 13.303-.086-.086c-1.213 1.205-3 2.64-4.607 2.64A3.89 3.89 0 0 1 3.429 12c0-2.13 1.757-3.857 3.93-3.857 1.688 0 3.257 1.333 4.577 2.756l.116-.12zm-4.638.994C6.073 14.297 4.99 13.27 4.99 12c0-1.268 1.084-2.297 2.425-2.297 1.342 0 2.649 1.243 3.566 2.297-.608.686-2.228 2.297-3.566 2.297" fillRule="evenodd" clipRule="evenodd"/><path fill="#46ABE3" d="m10.817 11.859.103.09 1.05 1.337c1.234 1.153 3.034 2.571 4.672 2.571a3.91 3.91 0 0 0 3.857-3.111c-.335.604-1.5 1.551-3.583 1.53a3 3 0 0 1-.334.021c-1.342 0-2.958-1.611-3.566-2.297l.013-.017-1.265-1.521-1.264-1.2C9.49 8.49 8.443 8.006 7.294 8.006c-1.941 0-3.501 1.543-3.814 3.386.866-1.569 2.73-2.075 4.367-1.642 1.072.184 2.002 1.037 2.97 2.109"/><defs><linearGradient id="ICP__a" x1="21.446" x2="2.614" y1="11.565" y2="11.565" gradientUnits="userSpaceOnUse"><stop stopColor="#F2A528"/><stop offset="1" stopColor="#EF5E12"/></linearGradient><linearGradient id="ICP__b" x1="5.039" x2="20.955" y1="11.639" y2="11.639" gradientUnits="userSpaceOnUse"><stop stopColor="#5F2685"/><stop offset="1" stopColor="#DA1980"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconIcp.displayName = 'Icp';

export default IconIcp;
