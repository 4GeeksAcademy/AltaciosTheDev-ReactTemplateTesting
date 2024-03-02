import React from "react";

//nuevas importaciones de react-router-dom
//<BrowserRouter>: This tag tells React that everything inside will be conditionally rendered based on particular URLs.
//<Routes>       : Works similar to switches, tells React that ONLY the first route matching the URL will be displayed.
//<Route>        : Way of React Router to map routes with components.
import { BrowserRouter, Route, Routes } from "react-router-dom";
//solo trae funcionalidad y nada mas solo te manda arriba 
import ScrollToTop from "./component/scrollToTop";

//NEW VIEW COMPONENTS
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";

//OUR VERY OWN CHARACTER DATA VIEW WITH THE ID QUERY PARAMETER 
import { CharacterData } from "./views/characterData";

//Context API hook 
import injectContext from "./store/appContext";

//normal components
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	//PROCESS from node
	//.ENV from node environmnet
	//BASENAME variable en el .env

	return (
		<div>
			{/* indicates everything insde will be conditionally rendered based on URLs, basename = origin of project URL. */}
			<BrowserRouter basename={basename}>
				{/* {headless component only meant to add functionality to where it wraps around.} */}
				<ScrollToTop>
					<Navbar />
				{/* switch deciding that the first path that matches URL will be displayed. */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						{/* our very own route for route character */}
						<Route path="/character/:id" element={<CharacterData/>} />
						{/* else case, si no es ninguno de los de arriba, este caso y es NOT FOUND */}
						<Route path="*" element={<h1>404 Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
