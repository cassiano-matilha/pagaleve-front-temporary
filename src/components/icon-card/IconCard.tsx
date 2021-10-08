import React from 'react';
import { Card } from './styles';

const IconCard: React.FC<{className?:string}> = ({ children, ...props }) => {
  return (
    <Card className={props.className}>
        {children}
    </Card>
  );
};

export default IconCard;
