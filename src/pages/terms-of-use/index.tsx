import './index.css';
import Typography from 'src/components/typography';

const Terms = () => {
	return (
		<div id="terms">
			<div className="container">
				<Typography variant="h4">TERMOS E CONDIÇÕES DE USO DA PLATAFORMA PAGALEVE</Typography>
				<Typography variant="p2">Neste documento explicamos como funcionam os nossos serviços e o que acontece com as suas informações quando você utiliza a plataforma Pagaleve, disponibilizada pela PAGALEVE TECNOLOGIA FINANCEIRA LTDA.,inscrita no CNPJ/ME sob nº42.563.672/0001-55. Se mesmo assim ficar alguma dúvida, entre em contato conosco para esclarecimentos, por meio de nossos canais de atendimento.</Typography>
				<Typography variant="p2"><b>Caso não esteja de acordo com estes Termos ou suas eventuais alterações, você deve se abster de utilizar a plataforma.</b> A utilizaçãodos serviços disponibilizados implica aceitação e adesão irrestrita às condições estabelecidas neste documento.</Typography>
				
				<Typography variant="h5">Plataforma Pagaleve</Typography>
				<Typography variant="p2">A Plataforma Pagaleve, disponível para acesso pelo site www.pagaleve.com.br e/ou pelo aplicativo Pagaleve, possibilita o pagamento parcelado de compras em estabelecimentos credenciados.</Typography>
				<Typography variant="p2">As compras serão parceladas em quatro prestações quinzenais sem juros, sendo a primeira paga no ato da compra e as demais devidas em D+15,D+30 e D+45. Os pagamentos serão realizados sempre via PIX.</Typography>

				<Typography variant="h5">Cadastro</Typography>
				<Typography variant="p2">Para utilizar nossos serviços você deve fazer um cadastro prévio, informando seu nome completo, CPF, data de nascimento, endereço residencial, e-mail, telefone celular e uma senha de uso pessoal e intransferível.</Typography>
				<Typography variant="p2">Ao realizar o cadastro, você declara ser maior de idade e civilmente capaz.</Typography>

				<Typography variant="h5">Procedimentos para uso dos serviços</Typography>
				<Typography variant="p2">Ao adquirir produtos ou serviços em um dos estabelecimentos credenciados você poderá optar por efetuar o pagamento utilizando a Plataforma Pagaleve.</Typography>
				<Typography variant="p2">Para compras em lojas físicas, basta acessar o site ou aplicativo Pagaleve, ler o QR code apresentado pelo estabelecimento, confirmar o valor da compra, da taxa de conveniência e condições de pagamento e validar sua identidade por biometria ou digitação de senha. A plataforma vai gerar um novo QR code para pagamento da primeira parcela. Em seguida, você deve entrar no site ou aplicativo de seu banco ou instituição de pagamento e seguir as instruções para efetivação do PIX relativo à primeira parcela.</Typography>
				<Typography variant="p2">Para compras em lojas virtuais, basta selecionar a Pagaleve como meio de pagamento no carrinho. A plataforma vai gerar um QR code para pagamento da primeira parcela. Em seguida, você deve entrar no site ou aplicativo de seu banco ou instituição de pagamento e seguir as instruções para efetivação do PIX relativo à primeira parcela.</Typography>
				<Typography variant="p2">Assim que a transferência da primeira parcela for efetuada a compra será confirmada. A confirmação geralmente acontece em segundos.</Typography>
				<Typography variant="p2">Alguns dias antes do vencimento de cada parcela enviaremos lembretes por meio de notificações no aplicativo, email e/ou SMS. Os QR codes para pagamento por Pix poderão ser acessados em nossa plataforma.</Typography>
				<Typography variant="p2">Os extratos das compras realizadas, valores pagos, parcelas vencidas e a vencer ficam disponíveis para consulta na Plataforma Pagaleve pelo prazo de seis meses da data de cada transação.</Typography>
				<Typography variant="p2"><b>ATENÇÃO</b>: Por motivos de segurança, como suspeita de fraude ou transação fora do perfil do cliente, a transação poderá ser negada. Nesse caso, entre em contato com nossa central de atendimento.</Typography>

				<Typography variant="h5">Taxa de conveniência</Typography>
				<Typography variant="p2">A Pagaleve cobra uma taxa de conveniência de R$ 60,00 por transação. A cobrança é realizada de forma parcial, juntamente com as parcelas quinzenais, sendo devido um terço do valor da taxa de conveniência a cada parcela, excetuada a primeira. Por exemplo:</Typography>
				<Typography variant="p2">Valor da compra: R$ 400,00 (4x de R$ 100,00)</Typography>
				<Typography variant="p2">Taxa de conveniência: R$ 60,00 (3x de R$ 20,00)</Typography>
				<div className="table-container">
					<table>
						<tr>
							<th><Typography variant="h5">Parcela</Typography></th>
							<th><Typography variant="h5">Valor da parcela referente à compra</Typography></th>
							<th><Typography variant="h5">Valor da parcela referente à taxa de conveniência</Typography></th>
						</tr>
						<tr>
							<td><Typography variant="p2">Primeira parcela (Pix no ato da compra)</Typography></td>
							<td><Typography variant="p2">R$ 100,00</Typography></td>
							<td><Typography variant="p2">-</Typography></td>
						</tr>
						<tr>
							<td><Typography variant="p2">Segunda parcela (D+15)</Typography></td>
							<td><Typography variant="p2">R$ 100,00</Typography></td>
							<td><Typography variant="p2">R$ 20,00</Typography></td>
						</tr>
						<tr>
							<td><Typography variant="p2">Terceira parcela (D+30)</Typography></td>
							<td><Typography variant="p2">R$ 100,00</Typography></td>
							<td><Typography variant="p2">R$ 20,00</Typography></td>
						</tr>
						<tr>
							<td><Typography variant="p2">Quarta parcela (D+45)</Typography></td>
							<td><Typography variant="p2">R$ 100,00</Typography></td>
							<td><Typography variant="p2">R$ 20,00</Typography></td>
						</tr>
						<tr>
							<td><Typography variant="h5">Total</Typography></td>
							<td><Typography variant="h5">R$ 400,00</Typography></td>
							<td><Typography variant="h5">R$ 60,00</Typography></td>
						</tr>
					</table>
				</div>
				<Typography variant="p2">A nota fiscal ou recibo eletrônico relativos aos serviços de conveniência prestados pela Pagaleve, conforme aplicável, serão encaminhados ao e-mail indicado no cadastro em um prazo de até 60 dias.</Typography>
				<Typography variant="p2"><b>Em caráter promocional, a Pagaleve isentará o pagamento do valor da parcela referente à taxa de conveniência caso a parcelare ferente à compra seja paga em dia. <u>Essa condição é ofertada por tempo indeterminado, podendo ser revogada pela Pagaleve sem aviso prévio.</u></b> Eventual revogação será amplamente comunicada aos usuários da Pagaleve e não afetará as transações realizadas anteriormente à comunicação de revogação.</Typography>

				<Typography variant="h5">Atrasos no pagamento</Typography>
				<Typography variant="p2">Em caso de atraso no pagamento de qualquer parcela poderão ser tomadas pela Pagaleve as medidas necessárias para cobrança, inclusive protesto e inscrição do nome do devedor nos serviços de proteção ao crédito.</Typography>

				<Typography variant="h5">Responsabilidade pelos produtos e serviços adquiridos</Typography>
				<Typography variant="p2">A Pagaleve atua como mera intermediária de pagamentos. Eventuais reclamações, demandas ou problemas relacionados aos produtos e/ou serviços adquiridos por intermédio da Plataforma Pagaleve deverão ser solucionados diretamente com o estabelecimento que os forneceu, não podendo a Pagaleve ser responsabilizada, em qualquer hipótese.</Typography>

				<Typography variant="h5">Proteção de dados pessoais</Typography>
				<Typography variant="p2"><b>Ao utilizar a Plataforma Pagaleve você autoriza a Pagaleve a fazer uso de suas informações pessoais a que a Pagaleve venha a ter acesso para que possa prestar adequadamente seus serviços.</b> Tais dados poderão ser usados para (i) aprimorar a prestação de serviços, os produtos e serviços oferecidos pela Pagaleve; (ii) testar, desenvolver e aprimorar os sistemas da Pagaleve; (iii) gerenciar o relacionamento e as comunicações com clientes e parceiros; (iv) responder a demandas e reclamações; (v) realizar análises e pesquisas e criar dashboards e bancos de dados, os quais poderão ser disponibilizados a terceiros, desde que de forma anonimizada; e/ou (vi) divulgar produtos e serviços da Pagaleve e seus parceiros em ações de marketing.</Typography>
				<Typography variant="p2">A Pagaleve retém apenas os dados essenciais para as finalidades aqui previstas e somente pelo tempo necessário para os propósitos aqui declarados.</Typography>
				<Typography variant="p2">Todos os dados coletados pela Pagaleve são armazenados de forma segura, em sistema de tecnologia no estado da arte, com monitoramento constante e acesso apenas por pessoas autorizadas, em estrita conformidade com a legislação aplicável. No entanto, mesmo com a adoção das devidas medidas de segurança, a Pagaleve não assegura que atos ilícitos não sejam cometidos por terceiros, não podendo, portanto, ser responsabilizada por eventual destruição, alteração, vazamento ou uso inadequado de informações ilicitamente obtidas por terceiros.</Typography>
				<Typography variant="p2"><b>A Pagaleve poderá divulgar seus dados pessoais para cumprimento de obrigações legais e regulatórias (como auditorias, fiscalizações ou investigações de autoridades competentes), para execução de suas políticas corporativas, para atender a demandas de terceiros ou para a proteção da vida ou da incolumidade física do titular oude terceiro, sempre de acordo com as previsões legais aplicáveis.</b></Typography>
				<Typography variant="p2"><b>A Pagaleve poderá compartilhar seus dados com empresas pertencentes ao mesmo grupo econômico ou parceiros de negócios, desde que mantenham políticas de proteção de dados equivalentes às da Pagaleve e sempre com a finalidade de atender aos seus interesses.</b></Typography>
				<Typography variant="p2">Você poderá solicitar, a qualquer tempo, acesso a seus dados pessoais por meio dos canais de atendimento da Pagaleve. Caso seja verificado qualquer erro, inconsistência ou discrepância nos dados armazenados pela Pagaleve, você poderá demandar sua pronta correção ou atualização.</Typography>
				<Typography variant="p2">Você também poderá, a qualquer tempo, se opor ao tratamento de seus dados pessoais pela Pagaleve, restringir seu uso ou exigir a exclusão de seus dados pessoais dos bancos de dados da Pagaleve, conforme estabelecido na legislação aplicável. A solicitação deverá ser feita por meio dos canais de atendimento da Pagaleve e será atendida no prazo de até dez dias úteis. No entanto, é importante destacar que, nesses casos, a Pagaleve poderá ficar impossibilitada de fornecer seus serviços.</Typography>

				<Typography variant="h5">Propriedade intelectual</Typography>
				<Typography variant="p2">A identidade visual da Plataforma Pagaleve, assim como as marcas, logomarcas, nomes de domínio ou quaisquer outros sinais distintivos da Pagaleve presentes no aplicativo ou website são de propriedade exclusivada Pagaleve.</Typography>
				<Typography variant="p2">A utilização da Plataforma Pagaleve não confere ao usuário qualquer direito sobre essa propriedade intelectual, tampouco lhe concede qualquer direito ao software, aplicativo ou funcionalidade empregados na Plataforma.</Typography>
				<Typography variant="p2">É expressamente vedado:</Typography>
				<ul>
					<li><Typography variant="p2">copiar ou alterar de qualquer forma a propriedade intelectual da Pagaleve;</Typography></li>
					<li><Typography variant="p2">realizar engenharia reversa, descompilação ou atividades semelhantes;</Typography></li>
					<li><Typography variant="p2">remover, ocultar ou alterar qualquer bloqueio ou mecanismo de segurança existente que restrinja o acesso a determinada funcionalidade;</Typography></li>
					<li><Typography variant="p2">utilizar a Plataforma Pagaleve para quaisquer outros fins que não os expressamente previstos nestes termos de uso.</Typography></li>
				</ul>

				<Typography variant="h5">Disponibilidade do aplicativos</Typography>
				<Typography variant="p2">Procuramos manter a Plataforma Pagaleve disponível em tempo integral, mas imprevistos podem levar a interrupções ou falhas no acesso. Não podemos garantir, portanto, a disponibilidade ininterrupta do aplicativo.</Typography>
				<Typography variant="p2">A Pagaleve se reserva o direito de, a qualquer tempo, retirar a Plataforma Pagaleve do ar ou alterar o seu conteúdo, sem aviso prévio.</Typography>

				<Typography variant="h5">Cookies</Typography>
				<Typography variant="p2">Durante a utilização da Plataforma Pagaleve algumas informações podem ser retidas por meio de ferramentas automáticas de coleta de dados, como endereço IP, ações realizadas, funcionalidades acessadas, data e horário de acesso. Com isso, conseguimos melhorar a experiência de acesso do usuário, tornando-a personalizada.</Typography>
				<Typography variant="p2">A coleta de cookies pode ser desabilitada no seu navegador, mas essa opção poderá impossibilitar o acesso à Plataforma Pagaleve, pois algumas das funcionalidades poderão ser prejudicadas.</Typography>

				<Typography variant="h5">Links de terceiros e publicidade</Typography>
				<Typography variant="p2">A Pagaleve não se responsabiliza por links para sites e/ou aplicativos de terceiros que possam estar disponibilizados na Plataforma Pagaleve, nem garante a veracidade das informações de terceiros que eventualmente sejam divulgadas no aplicativo.</Typography>
				<Typography variant="p2">O usuário que acessar os links fica sujeito aos termos e condições de uso dos respectivos sites e/ou aplicativos.</Typography>

				<Typography variant="h5">Alterações</Typography>
				<Typography variant="p2">Estes Termos e Condições de Uso poderão ser alterados a qualquer tempo pela Pagaleve, com entrada em vigor de forma imediata. Eventuais modificações serão divulgadas na Plataforma Pagaleve.</Typography>

				<Typography variant="p2"><b>Em caso de não concordância com as alterações introduzidas, você deve se abster de utilizar os serviços da Pagaleve.</b></Typography>
			</div>
		</div>
	)
}

export default Terms;