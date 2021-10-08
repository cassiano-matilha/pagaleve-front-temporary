import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './App.css';
import Home from './pages/home';
import Faq from './pages/faq';
import FaqRetailer from './pages/faq-varejista';
import RetailerPage from './pages/retailers';
import Header from './components/header';
import Footer from './components/footer';
import DesignSystem from './pages/design-system';
import Terms from './pages/terms-of-use';
import RetailersRegister from './pages/retailer-register';
import Contact from './pages/contact';
import Logo from '../public/images/logo.png';
import ScrollTop from './components/scroll-top';
import { IntercomProvider } from 'react-use-intercom';

const headerItems = [
	{to: "/", label: 'Home'},
	{to: "/#first-step", label: 'Como funciona'},
	{to: "/varejista", label: 'Varejista'},
	{to: "/ajuda", label: 'Ajuda'},
	{to: "/contato", label: 'Entre em contato'},
]

if (process.env.NODE_ENV === 'development') {
	let ds = {to: 'design-system', label: 'Design system'};
	headerItems.push(ds);
}
const App = () => {
	return (
		<div id="wrapper">
			<IntercomProvider appId={'qtffoygi'} autoBoot>
				<Router>
					<ScrollTop />
					<ThemeProvider theme={theme}>
						<Header logo={Logo} items={headerItems}/>
						<Switch>
							<Route path="/ajuda">
								<Faq />
							</Route>
							<Route path="/ajuda-varejista">
								<FaqRetailer />
							</Route>
							<Route path="/varejista">
								<RetailerPage />
							</Route>
							<Route path="/design-system">
								<DesignSystem />
							</Route>
							<Route path="/termos-de-uso">
								<Terms />
							</Route>
							<Route path="/contato">
								<Contact />
							</Route>
							<Route path="/cadastro-varejista">
								<RetailersRegister />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
						<Footer/>
					</ThemeProvider>
				</Router>
			</IntercomProvider>
		</div>
	);
}

export default App;
