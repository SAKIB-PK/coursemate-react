import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import Services from './Component/Services/Services';

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Switch>
          <Route exact path='/'>
             <Banner />
          </Route>
          <Route exact path='/home'>
             <Banner />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
