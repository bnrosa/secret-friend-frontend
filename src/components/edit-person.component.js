import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom';
import { editPerson } from "../store/actions/index";
import PersonForm from './person-form.component';

const EditPerson = (props) => {
  
    const { id } = useParams();
    const person = useSelector(state => state.people.find(e => e._id === id));
    const [name, setName] = useState(person.name);
    const [email, setEmail] = useState(person.email);

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const newPerson = {
            ...person,
            email: email,
            name: name
        }

        dispatch(
            editPerson(newPerson)
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

export default EditPerson;