
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M13.714 8.44c0-2.337-1.12-4.348-1.971-5.003-.004-.002-.066-.037-.06.056l-.002.003c-.07 4.515-2.338 5.739-3.585 7.387-2.877 3.804-.201 7.974 2.523 8.745 1.525.431-.352-.763-.594-3.286-.292-3.05 3.69-5.377 3.69-7.901M15.2 9.869c-.017-.012-.042-.021-.059.008-.046.575-.615 1.804-1.335 2.933-2.443 3.83-1.05 5.675-.268 6.666.455.576 0 0 1.136-.588.09-.046 2.217-1.279 2.447-4.087.223-2.72-1.358-4.434-1.92-4.932"/>
        </>
      ) : (
        <>
          <path fill="#E6EEFA" d="M13.715 8.44c0-2.337-1.12-4.348-1.972-5.003-.004-.002-.065-.037-.06.056l-.002.003c-.07 4.515-2.338 5.739-3.585 7.387-2.877 3.804-.201 7.974 2.524 8.745 1.524.431-.352-.763-.594-3.286-.292-3.05 3.689-5.377 3.689-7.901"/><path fill="#2EA7DF" d="M15.2 9.869c-.016-.012-.041-.021-.058.008-.047.575-.615 1.804-1.335 2.933-2.443 3.83-1.051 5.675-.268 6.666.454.576 0 0 1.136-.588.089-.046 2.216-1.279 2.447-4.087.223-2.72-1.358-4.434-1.921-4.932"/>
        </>
      )}
    </BaseIcon>
));

IconHt.displayName = 'Ht';

export default IconHt;
