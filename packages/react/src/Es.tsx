
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEs = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M16.822 9.257c.141-.386-.137-.703-.129-1.097q-.001-.085.056-.021l3.716 3.775a.38.38 0 0 1 .077.416.4.4 0 0 1-.086.12l-3.309 3.232c-.192.184-.257.15-.205-.112.291-1.449-.258-3.364-1.702-4.041-1.191-.557-2.914-.545-4.118-.746-.845-.141-1.535-.823-1.359-1.714.274-1.402 2.314-1.556 3.377-1.179.763.274.909.643 1.192 1.26q.096.201.45.236c.321.034.643.043.951.043.304 0 .604 0 .9-.026a.22.22 0 0 0 .189-.146"/><path fill="currentColor" d="m7.303 14.957.206.767c.013.043 0 .082-.047.103-.06.026-.112.022-.15-.025a138 138 0 0 0-3.772-3.85c-.15-.153-.15-.3.004-.45l3.703-3.556c.155-.142.215-.112.189.098q-.046.359-.086.853c-.197 2.336 1.582 4.063 3.772 4.183 1.238.069 3.107-.171 3.342 1.123.176.99-.604 1.77-1.534 1.984-1.371.313-2.4-.116-3.077-1.286-.296-.505-1.8-.308-2.336-.257a.25.25 0 0 0-.218.202.25.25 0 0 0 0 .107z"/>
        </>
      ) : (
        <>
          <path fill="#4D4D4D" d="M16.821 9.257c.142-.386-.137-.703-.128-1.097q-.001-.085.055-.021l3.716 3.775a.38.38 0 0 1 .077.416.4.4 0 0 1-.086.12l-3.308 3.232c-.193.184-.257.15-.206-.112.292-1.449-.257-3.364-1.701-4.041-1.192-.557-2.915-.545-4.119-.746-.844-.141-1.534-.823-1.358-1.714.274-1.402 2.314-1.556 3.377-1.179.763.274.908.643 1.191 1.26q.096.201.45.236c.322.034.643.043.952.043.304 0 .604 0 .9-.026a.22.22 0 0 0 .188-.146"/><path fill="#8C1A09" d="m7.303 14.957.205.767c.013.043 0 .082-.047.103-.06.026-.111.022-.15-.025a138 138 0 0 0-3.771-3.85c-.15-.153-.15-.3.004-.45l3.703-3.556c.154-.142.214-.112.188.098q-.046.359-.085.853c-.197 2.336 1.581 4.063 3.771 4.183 1.239.069 3.107-.171 3.343 1.123.176.99-.604 1.77-1.534 1.984q-2.06.47-3.077-1.286c-.296-.505-1.8-.308-2.336-.257a.25.25 0 0 0-.219.202.25.25 0 0 0 0 .107z"/>
        </>
      )}
    </BaseIcon>
));

IconEs.displayName = 'Es';

export default IconEs;
