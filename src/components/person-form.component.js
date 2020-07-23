import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function PersonForm(props){

    const classes = useStyles();

    return (
        <form className={classes.root} onSubmit={event => props.handleSubmit(event)} noValidate>
          <div>
            <TextField
                  id="standard-error-helper-text"
                  label="Name"
                  value={props.name}
                  helperText="O nome é obrigatório."
                  placeholder="Fulano de Tal"
                  onChange={e => props.setName(e.target.value)}
              />
            <TextField
                id="standard-error-helper-text"
                label="Email"
                value={props.email}
                helperText="Digite um email válido"
                placeholder="exemplo@email.com.br"
                type="email"
                onChange={e => props.setEmail(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
            Save
            </Button>
          </div>
         </form>
    );
}