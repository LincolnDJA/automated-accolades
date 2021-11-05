import React, { useState } from 'react';



function Form() {
  const [catagory, setCatagory] = useState('');
 
  return (
    <form>
      <label>I need a compliment on my</label>
      <select
      catagory={''}
      onChange={e => setCatagory(e.target.value)}
    >
      <option value="aesthetic" onChange={() => setCatagory(catagory)}>Aesthetic</option>
      <option value="character">Character</option>
      <option value="intelligence">Intelligence</option>
    </select>
    </form>
  );
};


export default Form;

