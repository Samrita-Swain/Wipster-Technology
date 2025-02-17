import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Routes from './components/Routes';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes />
      <Form/>
      <Footer />
    </Router>
  );
}

export default App;
