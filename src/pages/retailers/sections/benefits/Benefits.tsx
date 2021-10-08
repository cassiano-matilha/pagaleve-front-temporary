import React from 'react';
import './index.css';
import Typography from 'src/components/typography';
import Icon from 'src/components/icon';
import questions from 'src/data/retailer.benefits.json';

class Benefits extends React.Component<{}, {}> {
    ref: any;

    render() {
        return (
            <div id='benefits'>
                <div className='grid'>
                    <Typography className="title" color="black" variant="h2">Sem riscos, <br/>apenas benefícios</Typography>
                    <div className="benefits">
                        <ul>
                            {questions.data.map((question:any) => {
                                return (
                                    <>
                                        <li className="desktop">
                                            <div className="benefit-title-container">
                                                <div className="flex-container">
                                                    <Icon size="large" name="arrowStroke" className="arrow-icon"/>
                                                    <Typography variant="h4" color="pink" className="benefit-title">{question.title}</Typography>
                                                </div>
                                            </div>
                                            <Typography variant="p2" color="black" className="benefit-description">{question.description}</Typography>
                                        </li>
                                        <li className="mobile">
                                            <Icon size="large" name="arrowStroke" className="arrow-icon"/>
                                            <div className="flex-container">
                                                <Typography variant="h4" color="pink" className="benefit-title">{question.title}</Typography>
                                                <Typography variant="p2" color="black" className="benefit-description">{question.description}</Typography>
                                            </div>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                {/*<Grafism index={2} width="170px" className="grafism-top desktop"/>
                <Grafism index={3} width="170px" className="grafism-bottom desktop"/>*/}
            </div>
        )
    }
}
export default Benefits;