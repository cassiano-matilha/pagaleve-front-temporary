import React from 'react';
import './styles.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Arrow from '../../../public/images/word-arrow.png';
interface Props {
    word: any
}
const AnimatedWord: React.FC<Props> = ({ ...props }) => {
    if (props.word) {
        return (
            <div>
                <TransitionGroup className="word-card">
                    <CSSTransition appear={true} key={props.word.id} timeout={2000} classNames="slide">
                        <div className="word">
                            <div className="word-text">{props.word.word}</div> 
                            <div className="icon-container">
                                <img src={Arrow} alt="Arrow" className="icon"/>
                                <div className="cover"></div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    } else {
        return <></>
    }
}

export default AnimatedWord;