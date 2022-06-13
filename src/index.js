import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(
  <Router>
    <App />
  </Router>
)