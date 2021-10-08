import React from 'react';
import './index.css';
import Typography from 'src/components/typography';
import TextInput from 'src/components/text-input';
import TextArea from 'src/components/text-area';
import Button from 'src/components/button';
//import DropdownInput from 'src/components/dropdown-input';
import Modal from 'src/components/modal';
import Icon from 'src/components/icon';

class RetailerForm extends React.Component<{}, {open:boolean, data:any}> {
    constructor(props:any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
        this.state = {
            open: false,
            data: [
                {
                    name: 'setor_atuacao',
                    value: '',
                    error: ''
                },
                {
                    name: 'nome_loja',
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
                    name: 'site',
                    value: '',
                    error: ''
                },
                {
                    name: 'plataforma',
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

    handleSubmit() {
        if (this.validateFields()) {
            let data = new FormData();
            this.state.data.map((input:any) => {
                data.append(input.name, input.value);
                return 1;
            })
            fetch('https://wordpress-api.pagaleve.com.br/wp-json/contact-form-7/v1/contact-forms/6/feedback', {
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
                    name: 'setor_atuacao',
                    value: '',
                    error: ''
                },
                {
                    name: 'nome_loja',
                    value: '',
                    error: ''
                },
                {
                    name: 'telefone',
                    value: '',
                    error: ''
                },
                {
                    name: 'email',
                    value: '',
                    error: ''
                },
                {
                    name: 'site',
                    value: '',
                    error: ''
                },
                {
                    name: 'plataforma',
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

    handleChange(event:any, field:string) {
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
    handleChangeDropdown(event:any) {
    }
    render() {
        return (
            <div id="retailer-form">
                <div className="grid">
                    <Typography variant="h4" className="title" color="black">Entre em contato</Typography>
                    {/*<DropdownInput className="first-row form-input" options={this.items} placeholder="Setor de atuação"></DropdownInput>*/}
                    <TextInput className="first-row form-input" placeholder="Setor de atuação" errorMessage={this.state.data[0].error} onChange={(e) => this.handleChange(e, this.state.data[0].name)} value={this.state.data[0].value}/>
                    <TextInput className="second-row form-input" placeholder="Nome da sua loja" errorMessage={this.state.data[1].error} onChange={(e) => this.handleChange(e, this.state.data[1].name)} value={this.state.data[1].value}/>
                    <TextInput className="first-row form-input" placeholder="Telefone" errorMessage={this.state.data[2].error} onChange={(e) => this.handleChange(e, this.state.data[2].name)} value={this.state.data[2].value}/>
                    <TextInput className="second-row form-input" placeholder="E-mail" errorMessage={this.state.data[3].error} onChange={(e) => this.handleChange(e, this.state.data[3].name)} value={this.state.data[3].value}/>
                    <TextInput className="first-row form-input" placeholder="Site" errorMessage={this.state.data[4].error} onChange={(e) => this.handleChange(e, this.state.data[4].name)} value={this.state.data[4].value}/>
                    <TextInput className="second-row form-input" placeholder="Plataforma de Ecommerce utilizada" errorMessage={this.state.data[5].error} onChange={(e) => this.handleChange(e, this.state.data[5].name)} value={this.state.data[5].value}/>
                    {/*<DropdownInput className="second-row form-input" options={this.items} placeholder="Plataforma de Ecommerce utilizada" value={this.state.data.plataforma} onChange={this.handleChangeDropdown}></DropdownInput>*/}
                    <TextArea label="Mensagem" className="text-area" placeholder="Deixe sua mensagem aqui (opcional)" errorMessage={this.state.data[6].error} onChange={(e) => this.handleChange(e, this.state.data[6].name)} value={this.state.data[6].value}/>
                    <div className="button-container">
                        <Button bg="black" color="white" hoverBg="white" hoverColor="black" onClick={this.handleSubmit}>Enviar</Button>
                    </div>
                </div>
                <Modal open={this.state.open}>
                    <div className="modal-content">
                        <Icon size="huge" className="icon-message" name="pinkMessage"/>
                        <Typography className="success" variant="h4" color="black">Sua mensagem foi enviada com <span className="pink-text">sucesso</span>!</Typography>
                        <Typography className="message" variant="p3" color="black">Agora é só esperar, que entraremos em contato em até <span className="pink-text">4 dias uteis</span>.</Typography>
                        <Button className="button-close" bg="white" color="black" hoverBg="black" hoverColor="white" onClick={this.handleCloseModal}>Ok, voltar</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default RetailerForm;
