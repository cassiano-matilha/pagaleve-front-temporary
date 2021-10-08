import React from 'react';
import './index.css';
import Typography from 'src/components/typography';
//import Button from 'src/components/button';
import AnimatedWord from 'src/components/animated-word';

class Hero extends React.Component<{}, {words: Array<any>, index: number, interval: any, image: any}> {
    constructor(props:any) {
        super(props);
        
        fetch('https://wordpress-api.pagaleve.com.br/wp-json/acf/v3/options/options/hero_images', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            let length = data['hero_images'].length;
            let image = data['hero_images'][Math.floor(Math.random() * length)];
            this.setState({image: image});
        });


        fetch('https://wordpress-api.pagaleve.com.br/wp-json/acf/v3/options/options/hero_carrousel', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            let words = data['hero_carrousel'].map((word:any, index:number) => {
                return {
                    word: word.palavra,
                    id: index
                }
            })
            this.setState({words: words});
        });

        this.state = {
            words: [],
            index: 0,
            interval: null,
            image: 0
        }
    }
    componentDidMount() {
        let index = this.state.index;
        let interval = setInterval(() => {
            index++;
            if (index >= this.state.words.length) {
                index = 0;
            }
            this.setState({index: index});
        }, 5000);

        this.setState({interval: interval});
    }
    render() {
        return (
            <div id='hero'>
                <div className='hero-grid'>
                    <div className='content'>
                        <Typography variant="h1" className='call'>
                            Leve a vida com mais <br/>
                            <AnimatedWord word={this.state.words[this.state.index]} ></AnimatedWord>
                        </Typography>
                        <Typography variant="p2" className='excerpt'>
                            Dá para comprar sem medo de pagar. Quando os juros do cartão te assustam, Pagaleve
                        </Typography>
                        {/*<Button bg="black" color="white" hoverBg="white" hoverColor="black">Se inscreva</Button>*/}
                    </div>
                </div>
                <img src={this.state.image} alt="Desktop hero" className="hero-image desktop"/>
                <img src={this.state.image} alt="Mobile hero" className="hero-image mobile"/>
            </div>
        )
    }
}
export default Hero;
