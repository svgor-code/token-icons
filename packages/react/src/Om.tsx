
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOm = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m3.643 9.857.429.411-.43.407-.428-.407zm-.356 1.564a.52.52 0 0 0 .712 0l1.144-1.135.429.32v3.108h-.43v-2.696l-.715.673a1.13 1.13 0 0 1-.784.309c-.283 0-.57-.103-.784-.309l-.716-.677v2.7h-.429v-3.107l.429-.321zm2.499 2.293 1.401-3.428h.63l1.397 3.428h-.471l-.36-.857h-1.74l-.369.857zm1.697-3-.699 1.714h1.449l-.724-1.714zM12 12.981h-.026l-2.04-2.695H9.43v3.428h.428v-2.777h.03L12 13.71l.429.004v-3.428H12zm.857-2.271v-.425h3v.43h-1.285v3h-.43v-3h-1.285zm3.429-.425h1.453c.728 0 1.118.395 1.118.943v.069c0 .514-.235.651-.505.728v.03c.308.013.505.19.505.626v1.033h-.428v-.981c0-.305-.335-.305-.6-.305h-1.115v1.286h-.428zm2.571 3.43 1.402-3.43h.63l1.397 3.43h-.472l-.36-.858h-1.74l-.368.857zM16.714 12h.96c.429 0 .755-.33.755-.643s-.313-.643-.772-.643h-.943zm3.142.428.698-1.714h.026l.724 1.714z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#OM__a)" d="m3.642 9.857.429.411-.429.407-.428-.407zm-.355 1.564a.52.52 0 0 0 .711 0l1.144-1.135.429.32v3.108h-.429v-2.696l-.715.673a1.13 1.13 0 0 1-.785.309c-.282 0-.57-.103-.784-.309l-.716-.677v2.7h-.428v-3.107l.428-.321zm2.498 2.293 1.402-3.428h.63l1.397 3.428h-.472l-.36-.857h-1.74l-.368.857zm1.697-3-.698 1.714h1.448l-.724-1.714zM12 12.981h-.026l-2.04-2.695h-.506v3.428h.429v-2.777h.03L12 13.71l.428.004v-3.428H12zm.857-2.271v-.425h3v.43H14.57v3h-.429v-3h-1.285zm3.428-.425h1.453c.729 0 1.119.395 1.119.943v.069c0 .514-.236.651-.506.728v.03c.309.013.506.19.506.626v1.033h-.429v-.981c0-.305-.334-.305-.6-.305h-1.114v1.286h-.429zm2.572 3.43 1.401-3.43h.63l1.397 3.43h-.471l-.36-.858h-1.74l-.369.857zM16.714 12h.96c.428 0 .754-.33.754-.643s-.313-.643-.771-.643h-.943zm3.141.428.699-1.714h.026l.724 1.714z" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="OM__a" x1="1.714" x2="22.285" y1="11.786" y2="11.786" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB298"/><stop offset="1" stopColor="#FE95CE"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconOm.displayName = 'Om';

export default IconOm;
