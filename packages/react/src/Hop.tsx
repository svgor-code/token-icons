
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHop = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m15.746 5.488 2.866 4.198a1.37 1.37 0 0 1 .133 1.328c-.128.3-.403.515-.716.589-.333.078-.621-.036-.92-.154l-.14-.054h-.003v.004c.317.54.588 1.108.809 1.695.106.28-.025.608-.307.71a.524.524 0 0 1-.637-.24s-1.04-1.722-1.88-2.53c-.745-.718-1.557-1.345-2.453-1.788a8 8 0 0 0-2.841-.784c-.984-.087-1.984-.007-2.992.162-.474.08-.95-.202-1.073-.67-.133-.506.135-.937.658-1.135h.006c4.725-1.6 8.704 1.387 8.997 1.608l.003.002h.004v-.004c-.647-.946-.918-1.718-.948-2.446-.033-.8.984-1.149 1.434-.49M8.27 18.515l-2.882-4.222a1.37 1.37 0 0 1-.132-1.326c.127-.3.402-.515.716-.588.332-.079.62.036.92.154q.07.028.139.054h.003v-.005a11 11 0 0 1-.806-1.689c-.103-.273.011-.593.28-.706a.524.524 0 0 1 .662.23s1.04 1.722 1.88 2.53c.745.717 1.557 1.345 2.453 1.788a8 8 0 0 0 2.84.784c.985.087 1.984.008 2.992-.162.474-.08.951.202 1.073.67.132.506-.134.936-.658 1.133h-.005c-4.72 1.6-8.696-1.381-8.997-1.607l-.004-.003q-.005-.001-.003.005c.65.951.92 1.726.948 2.458.03.8-.968 1.162-1.42.502" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#HOP__a)" d="m15.746 5.488 2.865 4.198a1.37 1.37 0 0 1 .133 1.328c-.127.3-.402.515-.715.589-.333.078-.621-.036-.92-.154l-.14-.054h-.004v.004c.318.54.588 1.108.81 1.695.106.28-.026.608-.308.71a.524.524 0 0 1-.636-.24s-1.041-1.722-1.88-2.53c-.746-.718-1.557-1.345-2.453-1.788a8 8 0 0 0-2.842-.784c-.983-.087-1.983-.007-2.991.162-.474.08-.951-.202-1.074-.67-.132-.506.135-.937.659-1.135h.005c4.726-1.6 8.704 1.387 8.997 1.608l.004.002h.003v-.004c-.647-.946-.917-1.718-.947-2.446-.034-.8.984-1.149 1.434-.49M8.268 18.515l-2.881-4.222a1.37 1.37 0 0 1-.132-1.326c.126-.3.402-.515.715-.588.332-.079.621.036.921.154l.138.054h.004v-.005a11 11 0 0 1-.807-1.689c-.103-.273.012-.593.28-.706a.524.524 0 0 1 .662.23s1.041 1.722 1.88 2.53c.746.717 1.557 1.345 2.453 1.788a8 8 0 0 0 2.841.784c.984.087 1.984.008 2.992-.162.474-.08.95.202 1.073.67.131.506-.134.936-.658 1.133h-.006c-4.72 1.6-8.696-1.381-8.996-1.607l-.004-.003q-.006-.001-.004.005c.65.951.92 1.726.949 2.458.03.8-.968 1.162-1.42.502" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="HOP__a" x1="16.726" x2="7.58" y1="7.011" y2="17.3" gradientUnits="userSpaceOnUse"><stop stopColor="#E995A5"/><stop offset="1" stopColor="#BE42ED"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconHop.displayName = 'Hop';

export default IconHop;
