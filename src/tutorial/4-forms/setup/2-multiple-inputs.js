//2-multiple-inputs.js
import React, { useState } from 'react';
const ControlledInputs = () => {
  const [person,setPerson] = useState({firstName:'',email:'',zipCode:''});
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const{firstName,email,zipCode} = person;
    if(firstName&&email&&zipCode){
      console.log(firstName,email,zipCode)
      const personWithId = {...person,id:new Date().getTime().toString()};
      setPeople([...people,personWithId]);

      //reset all field
      setPerson({firstName:'',email:'',zipCode:''})
    }
    else{
      alert('Cannot be empty');
    }
  };
  const handleChange = (e)=>{
    // two properties I want from event object is => name and value
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setPerson({...person,[inputName]:inputValue})
   
    console.log(person);

  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='zip'>Postal /Zip : </label>
            <input
              type='text'
              id='zip'
              name='zipCode'
              value={person.zipCode}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email,zipCode } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{zipCode}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
