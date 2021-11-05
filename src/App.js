import React from 'react';
import Form from './/components/Forms/form';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import 'bootstrap';

var myHeaders = new Headers();
myHeaders.append("X-Master-Key", "$2b$10$VILgllW0TzehRt.esJrHNulfQ9MBW2skHzUennlVUPu8qvu.o00ZC");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.jsonbin.io/v3/b/618336b69548541c29cd57f7", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

function App () {
  return(
    
    <div className="App">
      <h1 className='App-header'>
        Automated Accolades
        <div>
        <NavBar />
        </div>   
      </h1> 
      
      <div>
      <body>
          <Form className='container'/>
      </body>
      </div>
    </div>  
  );
};


export default App;
