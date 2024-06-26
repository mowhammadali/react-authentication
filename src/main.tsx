import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import AuthProvider from './context/AuthProvider.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')! as HTMLElement);

root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </BrowserRouter>,
)