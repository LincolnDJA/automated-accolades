
import React, { useState } from 'react';





function Form(props) {
  const [catagory, setCatagory] = useState('...');
  const [gender, setGender] = useState('...');
  const {apiData}=props;
  const [canShow, setCanShow] = useState(false);
  const [compliment, setCompliment] = useState([]);
  
  function verifyData() {
    if (Object.keys(apiData).length !== 0)
    return (canShow)
  };

  
    
   function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

  
  function submitClicked() {
    setCanShow(true);
    verifyData()
    if (catagory !== '...' && gender !== '...') {
      console.log(apiData.record)
      const complimentArr = apiData.record[catagory][gender]
      setCompliment(complimentArr[getRandomInt(complimentArr.length)])
    }
    
    return (
      compliment
    )
  }
    
    
    


  console.log(canShow);
  console.log(catagory);
  console.log(compliment)
  console.log(typeof apiData);

   
  return (
    
    <div>
      <form>
      <label>I need a compliment on my</label>
      <select
      value={catagory}
      onChange={e => setCatagory(e.target.value)}
    >
      <option value="..." onChange={() => setCatagory(catagory)}>...</option>
      <option value="aesthetic">Aesthetic</option>
      <option value="character">Character</option>
      <option value="intelligence">Intelligence</option>
    </select>
    </form>
    <label>My gender is</label>
      <select
      value={gender}
      onChange={e => setGender(e.target.value)}
    >
      <option value="..." onChange={() => setCatagory(gender)}>...</option>
      <option value="nonBinary">Non Binary</option>
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>
    <button onClick={() => submitClicked()}>Submit</button>
    {canShow ?
       <div>{compliment}</div>
      : null}
    </div>
    
    
    

      );
};

export default Form;
