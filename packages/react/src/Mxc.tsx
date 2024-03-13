
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMxc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.857 8.678a.58.58 0 0 1 .557-.535h1.659a.36.36 0 0 0 .355-.356v-1.86a.36.36 0 0 0-.355-.356h-1.86a.356.356 0 0 0-.356.356v1.659a.59.59 0 0 1-.501.557H13.64a.356.356 0 0 0-.355.355v1.659a.59.59 0 0 1-.502.557h-1.568a.59.59 0 0 1-.502-.501V8.498a.354.354 0 0 0-.36-.351H8.64a.59.59 0 0 1-.497-.501V5.93a.356.356 0 0 0-.356-.355h-1.86a.356.356 0 0 0-.356.355v1.86a.356.356 0 0 0 .356.356h1.654c.155.009.3.081.412.197a.61.61 0 0 1 .141.45h.009v1.367a.6.6 0 0 1-.159.377.6.6 0 0 1-.343.18H5.927a.356.356 0 0 0-.356.356v6.999a.356.356 0 0 0 .356.355h1.86a.355.355 0 0 0 .356-.355V11.25a.6.6 0 0 1 .141-.343.63.63 0 0 1 .412-.193h1.457a.584.584 0 0 1 .557.647v-.004 1.573a.357.357 0 0 0 .36.356h1.856a.356.356 0 0 0 .355-.356v-1.68a.6.6 0 0 1 .146-.343.62.62 0 0 1 .411-.193h1.458c.154.009.3.082.407.197a.61.61 0 0 1 .145.45l.009-.004v6.716a.356.356 0 0 0 .351.355h1.86a.356.356 0 0 0 .356-.355V11.07a.356.356 0 0 0-.356-.356h-1.714a.586.586 0 0 1-.497-.501z"/>
        </>
      ) : (
        <>
          <path fill="url(#MXC__a)" d="M15.857 8.678a.58.58 0 0 1 .557-.535h1.659a.36.36 0 0 0 .355-.356v-1.86a.36.36 0 0 0-.355-.356h-1.86a.356.356 0 0 0-.356.356v1.659a.59.59 0 0 1-.501.557H13.64a.356.356 0 0 0-.355.355v1.659a.59.59 0 0 1-.502.557h-1.568a.59.59 0 0 1-.502-.501V8.498a.354.354 0 0 0-.36-.351H8.64a.59.59 0 0 1-.497-.501V5.93a.356.356 0 0 0-.356-.355h-1.86a.356.356 0 0 0-.356.355v1.86a.356.356 0 0 0 .356.356h1.654c.155.009.3.081.412.197a.61.61 0 0 1 .141.45h.009v1.367a.6.6 0 0 1-.159.377.6.6 0 0 1-.343.18H5.927a.356.356 0 0 0-.356.356v6.999a.356.356 0 0 0 .356.355h1.86a.355.355 0 0 0 .356-.355V11.25a.6.6 0 0 1 .141-.343.63.63 0 0 1 .412-.193h1.457a.584.584 0 0 1 .557.647v-.004 1.573a.357.357 0 0 0 .36.356h1.856a.356.356 0 0 0 .355-.356v-1.68a.6.6 0 0 1 .146-.343.62.62 0 0 1 .411-.193h1.458c.154.009.3.082.407.197a.61.61 0 0 1 .145.45l.009-.004v6.716a.356.356 0 0 0 .351.355h1.86a.356.356 0 0 0 .356-.355V11.07a.356.356 0 0 0-.356-.356h-1.714a.586.586 0 0 1-.497-.501z"/><defs><linearGradient id="MXC__a" x1="7.5" x2="16.622" y1="7.436" y2="16.599" gradientUnits="userSpaceOnUse"><stop stopColor="#3538E0"/><stop offset="1" stopColor="#DB1E83"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconMxc.displayName = 'Mxc';

export default IconMxc;
