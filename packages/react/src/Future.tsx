
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFuture = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.286 18.184a5.327 5.327 0 1 0 0-10.654 5.327 5.327 0 0 0 0 10.654m0 .244a5.572 5.572 0 1 0 0-11.143 5.572 5.572 0 0 0 0 11.143" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M5.829 11.7a.51.51 0 0 1 .583-.056c.158.086.377.244.59.407.43.322.858.643.858.322 0-.485.729-.485.973 0 .103.205.073.364.043.54-.039.235-.082.492.197.912.283.42.317 1.243.347 1.865.021.454.039.801.137.801.245 0 .973-1.213 1.213-1.697.244-.484.244-.969 0-1.209a6 6 0 0 1-.278-.317c-.33-.385-.815-.96-1.175-1.14-.484-.24-.484-.968 0-1.208.116-.06.27-.116.429-.172.531-.201 1.153-.428.784-.797-.257-.257-.784-.377-1.187-.471-.36-.086-.626-.142-.514-.257.132-.129.197-.485.227-.802a4.61 4.61 0 0 0-3.227 3.283zm7.663-2.143a4.585 4.585 0 0 1-.31 6.874c-.11-.146-.12-.407.01-.668.244-.485 0-1.693-.24-2.422-.15-.45-.395-.437-.678-.415-.171.008-.351.02-.535-.07-.485-.243 0-.968.484-1.456.356-.352.45-.575.57-.857.143-.384.384-.724.699-.986"/><path fill="currentColor" d="M10.286 17.323a4.466 4.466 0 1 0 0-8.932 4.466 4.466 0 0 0 0 8.932m0 .248a4.714 4.714 0 1 0 0-9.428 4.714 4.714 0 0 0 0 9.428" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M6.013 17.001c1.371 1.316 2.85 1.492 3.424 1.415-2.935-4.903 2.199-8.165 5.135-9.185V9C7.329 9.565 5.85 14.57 6.012 17"/><path fill="currentColor" d="M15.737 7.011h-.6a.1.1 0 0 0-.068.03l-.9 1.059c-.065.073.012.18.102.145l.695-.274a.104.104 0 0 1 .137.086c.06.531.484.724.789.767.064.009.11.077.085.137l-.317.772c-.03.077.06.154.133.111l1.354-.754a.09.09 0 0 0 .047-.082v-.565c0-.043.026-.073.065-.086 1.384-.544 1.92-1.929 2.027-2.632a.09.09 0 0 0-.017-.066.09.09 0 0 0-.06-.032c-1.946-.309-3.043.728-3.386 1.333a.1.1 0 0 1-.086.051M18 6.857A.429.429 0 1 0 18 6a.429.429 0 0 0 0 .857" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#0C364F" d="M10.285 18.184a5.328 5.328 0 1 0 0-10.655 5.328 5.328 0 0 0 0 10.655m0 .244a5.572 5.572 0 1 0 0-11.143 5.572 5.572 0 0 0 0 11.143" fillRule="evenodd" clipRule="evenodd"/><path fill="#0C364F" d="M5.828 11.7a.51.51 0 0 1 .583-.056c.159.086.377.244.591.407.429.322.858.643.858.322 0-.485.728-.485.972 0 .103.205.073.364.043.54-.038.235-.081.492.197.912.283.42.318 1.243.348 1.865.021.454.038.801.137.801.244 0 .973-1.213 1.213-1.697.244-.484.244-.969 0-1.209a6 6 0 0 1-.279-.317c-.33-.385-.814-.96-1.174-1.14-.485-.24-.485-.968 0-1.208.115-.06.27-.116.428-.172.532-.201 1.153-.428.785-.797-.258-.257-.785-.377-1.188-.471-.36-.086-.625-.142-.514-.257.133-.129.197-.485.227-.802a4.61 4.61 0 0 0-3.227 3.283zm7.663-2.143a4.584 4.584 0 0 1-.309 6.874c-.111-.146-.12-.407.009-.668.244-.485 0-1.693-.24-2.422-.15-.45-.394-.437-.677-.415-.172.008-.352.02-.536-.07-.484-.243 0-.968.484-1.456.356-.352.45-.575.57-.857.144-.384.385-.724.699-.986"/><path fill="#0C364F" d="M10.285 17.323a4.467 4.467 0 1 0 0-8.934 4.467 4.467 0 0 0 0 8.934m0 .248a4.714 4.714 0 1 0 0-9.428 4.714 4.714 0 0 0 0 9.428" fillRule="evenodd" clipRule="evenodd"/><path fill="#FAA41A" d="M6.012 17.001c1.372 1.316 2.85 1.492 3.425 1.415C6.5 13.513 11.635 10.25 14.57 9.23V9C7.328 9.565 5.85 14.57 6.012 17"/><path fill="#FEA224" d="M15.737 7.011h-.6a.1.1 0 0 0-.069.03l-.9 1.059c-.064.073.013.18.103.145l.694-.274a.104.104 0 0 1 .137.086c.06.531.485.724.789.767.064.009.111.077.086.137l-.317.772c-.03.077.06.154.132.111l1.355-.754a.09.09 0 0 0 .047-.082v-.565c0-.043.026-.073.064-.086 1.384-.544 1.92-1.929 2.027-2.632a.09.09 0 0 0-.017-.066.09.09 0 0 0-.06-.032c-1.946-.309-3.043.728-3.386 1.333a.1.1 0 0 1-.085.051M18 6.857A.428.428 0 1 0 18 6a.428.428 0 0 0 0 .857" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconFuture.displayName = 'Future';

export default IconFuture;
