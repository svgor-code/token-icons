
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEti = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12.049 19.286h-.098zm.38-.013v-3.416h2.284c.394 0 .715-.257.715-.626 0-.373-.321-.66-.715-.66h-4.586c-.184 0-.27-.171-.27-.342v-1.05c0-.172.086-.322.266-.322h4.568c.407 0 .737-.201.737-.587s-.33-.699-.737-.699h-6.12v3.772c0 .201.172.514.386.514h2.186v3.4a7.294 7.294 0 0 1-6.429-7.244V12a7.29 7.29 0 0 1 6.429-7.237V8.57H9c-.206 0-.429.159-.429.365v.921H14.7c.39 0 .728-.197.728-.587s-.338-.699-.728-.699h-2.272V4.727h-.888q.15-.009.302-.013v.002L12 4.714a7.286 7.286 0 0 1 .428 14.56m-.997.013h.002z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#31AAA7" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"/><path fill="#333" d="M11.841 4.714v4.543h-3.27v5.893h2.863v4.136a7.294 7.294 0 0 1-6.72-7.273c0-3.977 3.176-7.213 7.127-7.299"/><path fill="#EEF1F8" d="M11.143 4.727v3.844H9c-.206 0-.429.159-.429.365v.921H14.7c.39 0 .728-.197.728-.587s-.338-.699-.728-.699h-2.272V4.727zM8.57 11.571v3.772c0 .201.172.514.386.514h2.186v3.429h1.285v-3.429h2.285c.394 0 .715-.257.715-.626 0-.373-.321-.66-.715-.66h-4.586c-.184 0-.27-.171-.27-.342v-1.05c0-.172.086-.322.266-.322h4.568c.407 0 .737-.201.737-.587s-.33-.699-.737-.699z"/>
        </>
      )}
    </BaseIcon>
));

IconEti.displayName = 'Eti';

export default IconEti;
