import React from 'react';
import Container from '@material-ui/core/Container';
import AddPerson from '../components/add-person.component';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        padding: '2vh 1rem 0 1rem'
    }
});

export default function AddPage(){
    const classes = useStyles();
    return(
        <Container className={classes.container} maxWidth="lg">
            <AddPerson />
        </Container>
       
    )
}