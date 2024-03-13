
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOnion = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M16.549 10.52c-1.214-1.283-3.075-2.942-3.278-3.774-.198-.838.337-1.603.337-1.603-.85-.015-1.332.399-1.61.869-.272-.47-.759-.884-1.609-.869 0 0 .54.765.337 1.603-.198.832-2.064 2.492-3.272 3.774-3.385 3.582-.444 8.337 4.545 8.337 4.993 0 7.929-4.755 4.55-8.337m-4.55 7.242c-2.01 0-4.299-1.044-4.807-3.154-.577-2.466 1.92-3.98 3.395-5.464l.24.233q.192.182.39.362c-.106.103-.213.201-.309.294-1.224 1.153-3.342 2.477-2.882 4.374.411 1.7 2.369 2.497 3.973 2.497s3.56-.797 3.973-2.497c.459-1.898-1.658-3.22-2.883-4.373q-.87-.827-1.727-1.665a7 7 0 0 0 .626-.724l.01-.01.011.01c1.546 2.166 5.529 3.929 4.802 6.964-.514 2.108-2.797 3.153-4.812 3.153M13.528 13a3.5 3.5 0 0 0-.332-.336l.62-.63c.899.888 1.754 2 .433 3.085-.572.47-1.433.683-2.261.683-.824 0-1.684-.213-2.256-.683-1.326-1.09-.455-2.207.449-3.101l.62.635q-.19.158-.347.347c-.98 1.173.454 1.902 1.534 1.902 1.085 0 2.518-.729 1.54-1.902m-.797.765a1.51 1.51 0 0 1-1.46-.005l.305-1.686a.83.83 0 0 1-.443-.728c0-.46.39-.838.865-.838.482 0 .867.377.867.838a.82.82 0 0 1-.444.728z"/>
        </>
      ) : (
        <>
          <path fill="#7D50CF" d="M16.549 10.52c-1.214-1.283-3.075-2.942-3.278-3.774-.198-.838.337-1.603.337-1.603-.85-.015-1.332.399-1.61.869-.272-.47-.759-.884-1.609-.869 0 0 .54.765.337 1.603-.198.832-2.064 2.492-3.272 3.774-3.385 3.582-.444 8.337 4.545 8.337 4.993 0 7.929-4.755 4.55-8.337m-4.55 7.242c-2.01 0-4.299-1.044-4.807-3.154-.577-2.466 1.92-3.98 3.395-5.464l.24.233q.192.182.39.362c-.106.103-.213.201-.309.294-1.224 1.153-3.342 2.477-2.882 4.374.411 1.7 2.369 2.497 3.973 2.497s3.56-.797 3.973-2.497c.459-1.898-1.658-3.22-2.883-4.373q-.87-.827-1.727-1.665a7 7 0 0 0 .626-.724l.01-.01.011.01c1.546 2.166 5.529 3.929 4.802 6.964-.514 2.108-2.797 3.153-4.812 3.153M13.528 13a3.5 3.5 0 0 0-.332-.336l.62-.63c.899.888 1.754 2 .433 3.085-.572.47-1.433.683-2.261.683-.824 0-1.684-.213-2.256-.683-1.326-1.09-.455-2.207.449-3.101l.62.635q-.19.158-.347.347c-.98 1.173.454 1.902 1.534 1.902 1.085 0 2.518-.729 1.54-1.902m-.797.765a1.51 1.51 0 0 1-1.46-.005l.305-1.686a.83.83 0 0 1-.443-.728c0-.46.39-.838.865-.838.482 0 .867.377.867.838a.82.82 0 0 1-.444.728z"/>
        </>
      )}
    </BaseIcon>
));

IconOnion.displayName = 'Onion';

export default IconOnion;
