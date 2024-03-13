
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHgt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9 9.014v-3.87l3 2.82zm0 5.98v3.863l3-2.821zM9 9H5.143l2.817 3.053zm6 0h3.857l-2.81 2.952zm0 .014v-3.87l-3 2.82zm0 5.983v3.86l-3-2.821zM9 15H5.143l2.83-2.94zm6 0h3.857l-2.826-3.016zM12 13.714a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428"/>
        </>
      ) : (
        <>
          <path fill="#FFC908" d="M9 9.014v-3.87l3 2.82zm0 5.98v3.863l3-2.821zM9 9H5.143l2.817 3.053zm6 0h3.857l-2.81 2.952zm0 .014v-3.87l-3 2.82zm0 5.983v3.86l-3-2.821zM9 15H5.143l2.83-2.94zm6 0h3.857l-2.827-3.016zM12 13.714a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428"/>
        </>
      )}
    </BaseIcon>
));

IconHgt.displayName = 'Hgt';

export default IconHgt;
