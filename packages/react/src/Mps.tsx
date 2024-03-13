
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMps = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M16.286 4.286h-1.14a3.214 3.214 0 0 1-3.09 3.265h-.112a3.214 3.214 0 0 1-3.09-3.265h-1.14c0 1.65.866 3.085 2.147 3.857C8.577 8.914 7.714 10.35 7.714 12s.866 3.086 2.147 3.857c-1.285.771-2.147 2.207-2.147 3.857h1.14a3.214 3.214 0 0 1 3.095-3.265h.103a3.214 3.214 0 0 1 3.094 3.265h1.14c0-1.65-.866-3.085-2.147-3.857 1.285-.771 2.147-2.207 2.147-3.857s-.866-3.086-2.147-3.857c1.285-.772 2.147-2.207 2.147-3.857M15.146 12a3.215 3.215 0 0 1-3.094 3.266h-.103A3.214 3.214 0 0 1 8.854 12a3.214 3.214 0 0 1 3.09-3.266h.112A3.214 3.214 0 0 1 15.146 12"/>
        </>
      ) : (
        <>
          <path fill="#59C7F2" d="M16.285 4.286h-1.14a3.214 3.214 0 0 1-3.09 3.265h-.111a3.214 3.214 0 0 1-3.09-3.265h-1.14c0 1.65.866 3.085 2.147 3.857C8.575 8.914 7.714 10.35 7.714 12s.866 3.086 2.147 3.857c-1.286.771-2.147 2.207-2.147 3.857h1.14a3.214 3.214 0 0 1 3.094-3.265h.103a3.214 3.214 0 0 1 3.094 3.265h1.14c0-1.65-.865-3.085-2.147-3.857 1.286-.771 2.147-2.207 2.147-3.857s-.865-3.086-2.147-3.857c1.286-.772 2.147-2.207 2.147-3.857M15.145 12a3.215 3.215 0 0 1-3.094 3.266h-.103A3.214 3.214 0 0 1 8.854 12a3.214 3.214 0 0 1 3.09-3.266h.111A3.214 3.214 0 0 1 15.145 12"/>
        </>
      )}
    </BaseIcon>
));

IconMps.displayName = 'Mps';

export default IconMps;
