import React from 'react'
import Typography from '../typography';
import Icon from '../icon';
import { Container, List, ListItem, QuestionContainer, IconContainer, ArrowContainer, AnswerContainer } from './styles';
import Collapsible from 'react-collapsible';
import './styles.css';

class FaqDropdown extends React.Component<{items: Array<any>, className: string}, {dropDownItems:Array<any>}> {
    constructor(props:any) {
        super(props);
        let items = props.items.map((item:any) => {
            return {
                ...item,
                opened: false
            }
        });
        this.state = {dropDownItems: items};
        this.handleClick.bind(this);
        this.questionContainer.bind(this);
    }
    
    questionContainer(item:any) {
        return (
            <QuestionContainer className="question-container" onClick={() => this.handleClick(item)}>
                <IconContainer>
                    <Icon size="medium" name="navRight"/>
                </IconContainer>
                <Typography variant="p3" color="darkerGray" className="question">{item.question}</Typography>
                <ArrowContainer className="arrow">
                    <Icon size="medium" name="arrowDown" className={item.opened ? 'dropdown-arrow rotated' : 'dropdown-arrow'}/>
                </ArrowContainer>
            </QuestionContainer>
        )
    }

    handleClick(item:any) {
        item.opened = !item.opened;
        let newItems = this.state.dropDownItems.map((oldItem:any) => {
            return (oldItem.id = item.id ? item : oldItem);
        });
        this.setState({
            dropDownItems: newItems
        });
    }

    render() {
        return (
            <Container className={this.props.className + " dropdown"}>
                <List>
                    {this.props.items.map((item:any) => {
                        return (
                            <ListItem>
                                <Collapsible trigger={this.questionContainer(item)}>
                                    <AnswerContainer className="answer-container">
                                        <Typography variant="p3" color="darkerGray">{item.answer}</Typography>
                                    </AnswerContainer>
                                </Collapsible>
                            </ListItem>
                        )
                    })}
                </List>
            </Container>
        )
    }
}

export default FaqDropdown;