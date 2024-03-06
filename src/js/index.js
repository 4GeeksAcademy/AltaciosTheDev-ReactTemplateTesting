//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

//create root, react 18 demands route creation first and then the component to render in root.
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Layout/>)
//when using react router:
//LAYOUT is preferred as the main component where everything else lives inside based on the routes.
//<Layout /> which will take care of routing the users to the specific views they should see, depending on each of the particular URLs.

