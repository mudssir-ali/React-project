import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from './Context/context'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>

    </React.StrictMode>
    
);


// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'


// //const root = ReactDOM.createRoot(document.getElementById('root'))

// ReactDOM.render(
//     <React.StrictMode>
   //  <ContextProvider>
   //  <App />
   //  </ContextProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );


//import reportWebVitals from "./reportWebVitals";


//reportWebVitals();