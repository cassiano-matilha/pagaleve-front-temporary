import Typography from 'src/components/typography';
import React from 'react';
import TextInput from 'src/components/text-input';
import TextArea from 'src/components/text-area';
import Modal from 'src/components/modal';
import Icon from 'src/components/icon';
import Button from 'src/components/button';
import './index.css';

class Contact extends React.Component<{}, {open:boolean, data:any}> {
    
    constructor(props:any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            open: false,
            data: [
                {
                    name: 'assunto',
                    value: '',
                    error: ''
                },
                {
                    name: 'nome_completo',
                    value: '',
                    error: ''
                },
                {
                    name: 'email',
                    value: '',
                    error: ''
                },
                {
                    name: 'telefone',
                    value: '',
                    error: ''
                },
                {
                    name: 'mensagem',
                    value: '',
                    error: ''
                },
            ]
        };
    }

    handleChange = (event:any, field:string) => {
        let data:Array<any> = [];
        this.state.data.map((input:any) => {
            let newInput = {};
            if (input.name === field) {
                newInput = {
                    name: input.name,
                    value: event.target.value,
                    error: ''
                }
            } else {
                newInput = input;
            }
            data.push(newInput);
            return 1;
        })
        this.setState({
            data: data
        });
    }

    validateFields() {
        let data:Array<any> = [];
        let valid = true;
        this.state.data.map((input:any) => {
            let newInput = {};
            if (input.value === '') {
                newInput = {
                    name: input.name,
                    value: '',
                    error: 'Campo obrigatório'
                }
                valid = false;
            } else {
                newInput = input;
            }
            data.push(newInput);
            return 1;
        })
        this.setState({
            data: data
        });
        return valid;
    }
    handleSubmit() {
        if (this.validateFields()) {
            let data = new FormData();
            this.state.data.map((input:any) => {
                data.append(input.name, input.value);
                return 1;
            })
            fetch('https://wordpress-api.pagaleve.com.br/wp-json/contact-form-7/v1/contact-forms/25/feedback', {
                method: 'POST',
                body: data
            })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        open: true
                    })
                }
            })
        }
    }

    handleCloseModal() {
        this.setState({
            open: false,
            data: [
                {
                    name: 'assunto',
                    value: '',
                    error: ''
                },
                {
                    name: 'nome_completo',
                    value: '',
                    error: ''
                },
                {
                    name: 'email',
                    value: '',
                    error: ''
                },
                {
                    name: 'telefone',
                    value: '',
                    error: ''
                },
                {
                    name: 'mensagem',
                    value: '',
                    error: ''
                },
            ]
        });
    }

    render() {
        return (
            <div id="contact">
                <div className="grid">
                    <div className="title">
                        <Typography variant="h1" color="black">Fale com a gente!</Typography>
                    </div>
                    <div className="excerpt">
                        <Typography variant="p2" color="black">É só mandar sua mensagem por aqui,<br/> tire suas dúvidas, deixe sugestões.</Typography>
                    </div>
                    <TextInput className="first-row form-input" placeholder="Assunto" errorMessage={this.state.data[0].error} onChange={(e) => this.handleChange(e, "assunto")} value={this.state.data[0].value}/>
                    <TextInput className="second-row form-input" placeholder="Nome completo" errorMessage={this.state.data[1].error} onChange={(e) => this.handleChange(e, "nome_completo")} value={this.state.data[1].value}/>
                    <TextInput className="first-row form-input" placeholder="E-mail" errorMessage={this.state.data[2].error} onChange={(e) => this.handleChange(e, "email")} value={this.state.data[2].value}/>
                    <TextInput className="second-row form-input" placeholder="Telefone" errorMessage={this.state.data[3].error} onChange={(e) => this.handleChange(e, "telefone")} value={this.state.data[3].value}/>
                    <TextArea label="Mensagem" className="text-area" placeholder="Deixe sua mensagem aqui (opcional)" errorMessage={this.state.data[4].error} onChange={(e) => this.handleChange(e, "mensagem")} value={this.state.data[4].value}/>    
                    <div className="button-container">
                        <Button bg="black" color="white" hoverBg="white" hoverColor="black" onClick={this.handleSubmit}>Enviar</Button>
                    </div>
                </div>
                <Modal open={this.state.open}>
                    <div className="modal-content">
                        <Icon size="huge" className="icon-message" name="pinkMessage"/>
                        <Typography className="success" variant="h4" color="black">Sua mensagem foi enviada com <span className="pink-text">sucesso</span>!</Typography>
                        <Typography className="message" variant="p3" color="black">Assim que possível entraremos em contato com você!</Typography>
                        <Button className="button-close" bg="white" color="black" hoverBg="black" hoverColor="white" onClick={this.handleCloseModal}>Ok, voltar</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Contact;