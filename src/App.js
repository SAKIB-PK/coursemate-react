import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import NotFound from './Component/NotFound/NotFound';
import Services from './Component/Services/Services';



export const ServiceCon = createContext()


function App() {

  const [service,setService] = useState([])
  
    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
  return (
    <>
      <Router>
        <Header />
        
        <Switch>
          <Route exact path='/'>
              <ServiceCon.Provider value={service}>
                <Hero />
             </ServiceCon.Provider>
          </Route>
          <Route exact path='/home'>
            <ServiceCon.Provider value={service}>
                <Hero />
             </ServiceCon.Provider>
          </Route>
          <Route path='/services'>
           <ServiceCon.Provider value={service}>
              <Services />
           </ServiceCon.Provider>
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
