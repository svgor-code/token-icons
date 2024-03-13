
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAuction = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.286 6a.87.87 0 0 1 .883-.857h2.948A.87.87 0 0 1 12 6a.87.87 0 0 1-.883.857H8.168A.87.87 0 0 1 7.287 6m9.372.849a.85.85 0 0 1-.522 1.097l-7.659 2.738a.89.89 0 0 1-1.136-.51.85.85 0 0 1 .523-1.097l7.659-2.738a.89.89 0 0 1 1.136.51m0 6.977a.85.85 0 0 1-.522 1.097L8.477 17.66a.89.89 0 0 1-1.136-.51.85.85 0 0 1 .523-1.097l7.659-2.738a.89.89 0 0 1 1.136.51M12 18a.87.87 0 0 1 .883-.857h2.948a.87.87 0 0 1 .883.857.87.87 0 0 1-.883.857h-2.948A.87.87 0 0 1 12 18m4.654-7.736a.85.85 0 0 1-.506 1.106l-7.662 2.859a.89.89 0 0 1-1.14-.493.85.85 0 0 1 .505-1.106l7.663-2.859a.89.89 0 0 1 1.14.493"/>
        </>
      ) : (
        <>
          <path fill="#000" d="M7.286 6a.87.87 0 0 1 .883-.857h2.949A.87.87 0 0 1 12 6a.87.87 0 0 1-.882.857H8.169A.87.87 0 0 1 7.286 6m9.373.849a.85.85 0 0 1-.523 1.097l-7.658 2.738a.89.89 0 0 1-1.136-.51.85.85 0 0 1 .523-1.097l7.658-2.738a.89.89 0 0 1 1.136.51m0 6.977a.85.85 0 0 1-.523 1.097L8.478 17.66a.89.89 0 0 1-1.136-.51.85.85 0 0 1 .523-1.097l7.658-2.738a.89.89 0 0 1 1.136.51M12 18a.87.87 0 0 1 .883-.857h2.949a.87.87 0 0 1 .883.857.87.87 0 0 1-.883.857h-2.949A.87.87 0 0 1 12 18m4.655-7.736a.85.85 0 0 1-.506 1.106l-7.663 2.859a.89.89 0 0 1-1.14-.493.85.85 0 0 1 .506-1.106l7.663-2.859a.89.89 0 0 1 1.14.493"/>
        </>
      )}
    </BaseIcon>
));

IconAuction.displayName = 'Auction';

export default IconAuction;
