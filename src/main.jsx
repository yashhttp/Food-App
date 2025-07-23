import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import './index.css'
import App from './App.jsx'
import Storecontextprovider from "./Context/Storecontext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Storecontextprovider>
      <App />
    </Storecontextprovider>


  </BrowserRouter>


)
