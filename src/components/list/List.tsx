import React from 'react';
import { IProps } from './interfaces';
import { StyledList, StyledItem, ItemContent, StyledIcon } from './styles';
import Typography from '../typography';
import Icon from '../icon';

const List: React.FC<IProps> = ({ children, ...props }) => {
    return (
        <StyledList className={props.className}>
            {props.items.map((item:any) => {
                return (
                    <StyledItem key={item.id}>
                        <StyledIcon><Icon name={item.icone} size="medium"></Icon></StyledIcon>
                        <ItemContent>
                            <Typography className="desktop" variant="h4" color="black">{item.titulo}</Typography>
                            <Typography className="desktop" variant="p2" color="black">{item.texto}</Typography>
                            <Typography className="mobile" variant="p1" color="black">{item.titulo}</Typography>
                            <Typography className="mobile" variant="p3" color="black">{item.texto}</Typography>
                        </ItemContent>
                    </StyledItem>
                )
            })}
        </StyledList>
    )
}

export default List;