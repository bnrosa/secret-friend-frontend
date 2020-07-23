import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../store/actions/index";
import PersonForm from './person-form.component';

const AddPerson = () => {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = event => {
      event.preventDefault();
      
      dispatch(
        addPerson({
          name, email
        })
      );
      
      setEmail('');
      setName('');
    }

    return (
        <PersonForm
            name={name}
            email={email}
            setEmail={setEmail}
            setName={setName}
            handleSubmit={handleSubmit}
        />     
    );
}

export default AddPerson;