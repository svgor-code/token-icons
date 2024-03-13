
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKnc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12.632 4.757a.214.214 0 0 0-.34.13l-1.122 5.69a.214.214 0 0 0 .315.227l4.986-2.8a.212.212 0 0 0 .024-.357z"/><path fill="currentColor" d="M11.012 5.024a.214.214 0 0 1 .338.212l-1.298 6.58a.2.2 0 0 0 0 .082l1.303 6.897a.213.213 0 0 1-.212.253.2.2 0 0 1-.118-.036l-4.073-2.709a.21.21 0 0 1-.095-.178V8.24c0-.068.032-.13.086-.171z"/><path fill="currentColor" d="M12.287 19.112a.215.215 0 0 0 .33.138l4.027-2.679a.212.212 0 0 0-.005-.358l-5.141-3.214a.214.214 0 0 0-.324.221zm4.527-3.797a.214.214 0 0 0 .329-.181V8.973a.214.214 0 0 0-.32-.186l-5.192 2.915a.214.214 0 0 0-.008.368z"/>
        </>
      ) : (
        <>
          <path fill="#31CB9E" d="M12.632 4.757a.214.214 0 0 0-.339.13l-1.122 5.69a.213.213 0 0 0 .198.254.2.2 0 0 0 .117-.027l4.986-2.8a.212.212 0 0 0 .023-.357z"/><path fill="#31CB9E" d="M11.012 5.024a.214.214 0 0 1 .339.212l-1.299 6.58a.2.2 0 0 0 0 .082l1.304 6.897a.214.214 0 0 1-.33.217l-4.073-2.709a.21.21 0 0 1-.096-.178V8.24c0-.068.032-.13.086-.171z"/><path fill="#31CB9E" d="M12.287 19.112a.215.215 0 0 0 .33.138l4.027-2.679a.213.213 0 0 0-.004-.358l-5.142-3.214a.214.214 0 0 0-.324.221zm4.528-3.797a.214.214 0 0 0 .328-.181V8.973a.214.214 0 0 0-.32-.186l-5.191 2.915a.214.214 0 0 0-.009.368z"/>
        </>
      )}
    </BaseIcon>
));

IconKnc.displayName = 'Knc';

export default IconKnc;
