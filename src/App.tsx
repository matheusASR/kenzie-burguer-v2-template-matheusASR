import Router from './routes';
import { GlobalStyles } from './styles/global';
import { ToastContainer } from 'react-toastify';

const App = () => (
  <>
    <GlobalStyles />
    <Router />
    <ToastContainer/>
  </>
);

export default App;
