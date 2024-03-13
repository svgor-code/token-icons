
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCgo = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m13.851 10.586-.441-.437c.857-.888 1.573-1.719 1.59-3.043.021-1.715-1.252-3.249-3-3.249-1.749 0-3.022 1.53-3 3.249.017 1.324.728 2.155 1.585 3.043l-.44.437C9.256 9.729 8.407 9 7.07 9c-1.705 0-3.214 1.264-3.214 3s1.508 3 3.214 3c1.342 0 2.186-.729 3.077-1.59l.446.437c-.883.913-1.586 1.706-1.594 3.06-.013 1.715 1.255 3.236 3 3.236 1.757 0 2.996-1.552 2.957-3.279-.026-1.307-.699-2.134-1.543-3.008l.441-.442c.922.892 1.728 1.595 3.103 1.586 1.693-.013 3.185-1.273 3.185-3 0-1.714-1.47-2.974-3.155-3-1.367-.021-2.228.711-3.137 1.586m-1.847-6.3c-1.543 0-2.597 1.311-2.576 2.82.018 1.208.652 1.958 1.432 2.764l.296-.291c-.7-.725-1.273-1.389-1.3-2.473-.03-1.303.815-2.392 2.144-2.392 1.328 0 2.173 1.093 2.143 2.392-.026 1.084-.6 1.748-1.299 2.473l.292.295c.78-.805 1.418-1.555 1.435-2.768.022-1.505-1.028-2.82-2.571-2.82zm.566 5.018-.3-.3c.531-.54 1.016-1.075 1.016-1.894S12.904 5.571 12 5.571c-.9 0-1.286.712-1.286 1.535s.48 1.354 1.011 1.903l-.3.295c-.617-.643-1.114-1.234-1.14-2.198-.03-1.089.6-1.963 1.715-1.963 1.127 0 1.757.896 1.714 1.993-.043.951-.531 1.534-1.144 2.168m-.27.279-.3-.3-.3.3.3.313zm.566.57-.292-.296-.3.313.292.291zm-.026.583.3-.309.433.429-.309.3zm.698.698.309-.3.296.292-.313.3zm.588-.57.295.292c.746-.72 1.436-1.312 2.567-1.299 1.269.017 2.297.857 2.297 2.143 0 1.303-1.054 2.143-2.327 2.143-1.178 0-1.74-.527-2.532-1.294l-.296.291c.857.827 1.551 1.44 2.828 1.431 1.479-.012 2.756-1.054 2.756-2.571 0-1.5-1.251-2.546-2.726-2.571-1.255-.022-2.031.63-2.862 1.435m-.01 1.123.3-.287.3.3h-.003l.004.009-.3.295-.309-.3.013-.017zm-.565.017L13.543 12l.004-.004-.292-.292-.308.296.3.291.3-.287zm-.574.558-.304-.292-.403.403.291.3.416-.407zm-.146.69.429-.416.317.308-.433.429zm-.548-.01-.283-.29-.296.304.279.283zm-.026.57.296-.29.317.33-.296.29zm1.277-1.25.296-.288.317.3-.296.3zm1.157-1.132.3.3c.57-.549 1.157-1.007 1.972-1.016.822-.008 1.465.412 1.465 1.286 0 .883-.63 1.299-1.491 1.286-.853-.013-1.372-.463-1.937-1.007h-.005l-.3.295c.733.699 1.2 1.14 2.268 1.14 1.063 0 1.898-.621 1.898-1.714 0-1.084-.827-1.71-1.89-1.714-1.003-.005-1.611.505-2.271 1.144zM11.43 9.857l-.296.292.313.325.296-.291zm-1.552 3.279c-.818.788-1.577 1.436-2.807 1.436-1.517 0-2.785-1.038-2.785-2.572S5.554 9.429 7.07 9.429c1.226 0 1.985.643 2.799 1.431l-.292.292c-.732-.703-1.405-1.286-2.507-1.295-1.285-.013-2.357.832-2.357 2.143 0 1.312 1.072 2.156 2.357 2.143 1.102-.013 1.779-.591 2.512-1.303l.291.296zm.557 0 .43.433.3-.309-.42-.42-.31.3zm.438.986c-.815.844-1.457 1.53-1.44 2.785.017 1.432.951 2.812 2.571 2.812 1.543 0 2.584-1.286 2.572-2.816-.013-1.213-.652-1.967-1.432-2.773l-.296.291c.712.742 1.295 1.428 1.295 2.55 0 1.325-.828 2.319-2.143 2.319-1.333 0-2.169-1.028-2.143-2.378.021-1.158.549-1.706 1.303-2.495l-.292-.291zm.561.012-.291-.291.295-.309.292.296zm.009.557c-.707.729-1.127 1.158-1.153 2.216-.026 1.17.587 1.95 1.714 1.95 1.11 0 1.714-.745 1.714-1.894 0-.999-.505-1.607-1.144-2.267l-.266.3c.549.566.969 1.114.982 1.971s-.407 1.462-1.286 1.462c-.874 0-1.294-.605-1.286-1.462.009-.788.348-1.285 1.02-1.98l-.3-.3zm.57.018-.3-.3.291-.3.3.308zm-1.856-1.843-.291-.292.308-.3.296.292zM9.59 12.3 9.9 12l-.313-.3-.283.296.287.3zm-.578-.03c-.575.553-1.2 1.016-1.989 1.016-.788 0-1.453-.416-1.453-1.286 0-.891.665-1.286 1.5-1.286.836 0 1.372.472 1.933 1.012l.3-.3c-.651-.626-1.251-1.127-2.233-1.14-1.075-.013-1.928.613-1.928 1.714s.853 1.727 1.928 1.714c.986-.013 1.586-.514 2.233-1.144l-.3-.3zm6.261-.266c.476-.467 1.084-.861 1.697-.861.6 0 1.029.197 1.029.857s-.497.857-1.042.857c-.548 0-1.208-.39-1.688-.857zm-4.843-1.148.429-.429.313.317-.429.42-.317-.308zm-.574.566.291-.292.318.309-.296.291zM8.73 12c-.476-.459-1.072-.9-1.684-.9-.618 0-1.046.232-1.046.9 0 .66.51.9 1.028.9.729-.008 1.222-.437 1.702-.9m2.708-.977-.415.411.3.288.398-.403zm-.694.686-.296.295.296.292.304-.296-.3-.291zm1.269-1.252-.3.296.287.296.3-.309zm.27.857.291-.3.412.412-.3.291zm-.857 1.672-.408-.416.317-.304.4.398-.305.318zm.587-1.393-.408.394.4.399.402-.399zm.831 5.4c.004-.741-.377-1.243-.844-1.723-.617.634-.857 1.084-.857 1.723 0 .634.201 1.007.857 1.007s.84-.373.844-1.007M12.004 6c-.694 0-.861.574-.861 1.106 0 .531.411 1.165.857 1.628.445-.463.9-1.045.9-1.628S12.694 6 12 6z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#CGO__a)" d="m13.852 10.586-.442-.437c.857-.888 1.573-1.719 1.59-3.043.022-1.715-1.251-3.249-3-3.249-1.748 0-3.021 1.53-3 3.249.017 1.324.729 2.155 1.586 3.043l-.441.437C9.257 9.729 8.409 9 7.072 9c-1.706 0-3.215 1.264-3.215 3s1.509 3 3.215 3c1.341 0 2.185-.729 3.077-1.59l.446.437c-.883.913-1.586 1.706-1.595 3.06-.013 1.715 1.256 3.236 3 3.236 1.757 0 2.996-1.552 2.957-3.279-.025-1.307-.698-2.134-1.542-3.008l.441-.442c.921.892 1.727 1.595 3.103 1.586 1.693-.013 3.184-1.273 3.184-3 0-1.714-1.47-2.974-3.154-3-1.367-.021-2.229.711-3.137 1.586m-1.847-6.3c-1.543 0-2.598 1.311-2.576 2.82.017 1.208.651 1.958 1.431 2.764l.296-.291c-.699-.725-1.273-1.389-1.299-2.473-.03-1.303.815-2.392 2.143-2.392 1.329 0 2.173 1.093 2.143 2.392-.026 1.084-.6 1.748-1.298 2.473l.291.295c.78-.805 1.419-1.555 1.436-2.768.021-1.505-1.029-2.82-2.572-2.82zm.565 5.018-.3-.3c.532-.54 1.016-1.075 1.016-1.894S12.905 5.571 12 5.571c-.9 0-1.285.712-1.285 1.535s.48 1.354 1.011 1.903l-.3.295c-.617-.643-1.114-1.234-1.14-2.198-.03-1.089.6-1.963 1.714-1.963 1.127 0 1.757.896 1.715 1.993-.043.951-.532 1.534-1.145 2.168m-.27.279-.3-.3-.3.3.3.313zm.566.57-.291-.296-.3.313.291.291zm-.026.583.3-.309.433.429-.308.3zm.699.698.308-.3.296.292-.313.3zm.587-.57.296.292c.745-.72 1.435-1.312 2.567-1.299 1.268.017 2.297.857 2.297 2.143 0 1.303-1.054 2.143-2.327 2.143-1.179 0-1.74-.527-2.533-1.294l-.296.291c.857.827 1.552 1.44 2.829 1.431 1.478-.012 2.756-1.054 2.756-2.571 0-1.5-1.252-2.546-2.726-2.571-1.256-.022-2.032.63-2.863 1.435m-.009 1.123.3-.287.3.3h-.004l.004.009-.3.295-.308-.3.013-.017zm-.565.017L13.543 12l.004-.004-.291-.292-.309.296.3.291.3-.287zm-.575.558-.304-.292-.403.403.292.3.415-.407zm-.145.69.428-.416.317.308-.432.429zm-.549-.01-.283-.29-.295.304.278.283zm-.026.57.296-.29.317.33-.295.29zm1.278-1.25.295-.288.317.3-.295.3zm1.157-1.132.3.3c.57-.549 1.157-1.007 1.971-1.016.823-.008 1.466.412 1.466 1.286 0 .883-.63 1.299-1.492 1.286-.852-.013-1.371-.463-1.937-1.007h-.004l-.3.295c.733.699 1.2 1.14 2.267 1.14 1.063 0 1.899-.621 1.899-1.714 0-1.084-.827-1.71-1.89-1.714-1.003-.005-1.612.505-2.272 1.144zM11.43 9.857l-.295.292.312.325.296-.291zM9.88 13.136c-.819.788-1.577 1.436-2.807 1.436-1.517 0-2.786-1.038-2.786-2.572s1.269-2.571 2.786-2.571c1.225 0 1.984.643 2.798 1.431l-.291.292c-.733-.703-1.406-1.286-2.507-1.295-1.286-.013-2.357.832-2.357 2.143 0 1.312 1.071 2.156 2.357 2.143 1.101-.013 1.778-.591 2.511-1.303l.292.296zm.557 0 .429.433.3-.309-.42-.42-.309.3zm.437.986c-.814.844-1.457 1.53-1.44 2.785.017 1.432.952 2.812 2.572 2.812 1.542 0 2.584-1.286 2.571-2.816-.013-1.213-.651-1.967-1.431-2.773l-.296.291c.711.742 1.294 1.428 1.294 2.55 0 1.325-.827 2.319-2.143 2.319-1.333 0-2.168-1.028-2.143-2.378.022-1.158.549-1.706 1.303-2.495l-.291-.291zm.562.012-.292-.291.296-.309.291.296zm.008.557c-.707.729-1.127 1.158-1.153 2.216-.025 1.17.587 1.95 1.715 1.95 1.11 0 1.714-.745 1.714-1.894 0-.999-.506-1.607-1.144-2.267l-.266.3c.548.566.968 1.114.981 1.971s-.407 1.462-1.285 1.462c-.875 0-1.295-.605-1.286-1.462.008-.788.347-1.285 1.02-1.98l-.3-.3zm.57.018-.3-.3.292-.3.3.308zm-1.856-1.843-.291-.292.309-.3.295.292zm-.565-.566L9.9 12l-.313-.3-.282.296.287.3zm-.579-.03c-.574.553-1.2 1.016-1.988 1.016-.789 0-1.453-.416-1.453-1.286 0-.891.664-1.286 1.5-1.286.835 0 1.371.472 1.933 1.012l.3-.3c-.652-.626-1.252-1.127-2.233-1.14-1.076-.013-1.929.613-1.929 1.714s.853 1.727 1.929 1.714c.985-.013 1.585-.514 2.233-1.144l-.3-.3zm6.262-.266c.475-.467 1.084-.861 1.697-.861.6 0 1.028.197 1.028.857s-.497.857-1.041.857c-.549 0-1.209-.39-1.689-.857zm-4.843-1.148.428-.429.313.317-.428.42-.318-.308zm-.575.566.292-.292.317.309-.296.291zM8.73 12c-.475-.459-1.071-.9-1.684-.9-.617 0-1.046.232-1.046.9 0 .66.51.9 1.029.9.728-.008 1.221-.437 1.701-.9m2.709-.977-.416.411.3.288.399-.403zm-.694.686-.296.295.296.292.304-.296-.3-.291zm1.268-1.252-.3.296.287.296.3-.309zm.27.857.292-.3.411.412-.3.291zm-.857 1.672-.407-.416.317-.304.399.398-.305.318zm.587-1.393-.407.394.399.399.402-.399zm.832 5.4c.004-.741-.378-1.243-.845-1.723-.617.634-.857 1.084-.857 1.723 0 .634.202 1.007.857 1.007.656 0 .84-.373.845-1.007M12.005 6c-.695 0-.862.574-.862 1.106 0 .531.412 1.165.857 1.628.446-.463.9-1.045.9-1.628S12.695 6 12 6z" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="CGO__a" x1="6.725" x2="16.907" y1="6.896" y2="16.843" gradientUnits="userSpaceOnUse"><stop offset=".08" stopColor="#BA9251"/><stop offset=".5" stopColor="#E6B66E"/><stop offset="1" stopColor="#BB9352"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconCgo.displayName = 'Cgo';

export default IconCgo;
