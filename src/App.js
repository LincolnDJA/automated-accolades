import React, { useState , useEffect } from 'react';
import Form from './/components/Forms/form';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';





function App () {
  const [apiData, setApiData ] = useState('');

  useEffect(( ) => {
  
  var myHeaders = new Headers();
  myHeaders.append("X-Master-Key", "$2b$10$VILgllW0TzehRt.esJrHNulfQ9MBW2skHzUennlVUPu8qvu.o00ZC");

  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };

  fetch("https://api.jsonbin.io/v3/b/618336b69548541c29cd57f7", requestOptions)
  .then(response => response.json())
  .then(result => setApiData(result))
  .catch(error => console.log('error', error));
   console.log();
  },[]);

  console.log(apiData);
    
  
  
   return(
    <div className="App">
      <h1 className='App-header'>
        Automated Accolades
        <div>
        <NavBar />
        </div>   
      </h1>  
      <Router>
      <Switch>
        <Route exact path="/">
          <Form className='container' apiData={apiData}/>
        </Route> 
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        

      </Switch>
      </Router>
    </div>  
   )
  };

  
    
  
  




  
  


export default App;
