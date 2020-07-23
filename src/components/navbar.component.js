import React from 'react';
import {Link}  from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    titleText: {
        textDecoration: 'none',
        color: '#fff',
    },
}));

export default function Navbar(){
    const classes = useStyles();
    
    return(
        <AppBar className={classes.appBar} position="static" color="primary">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/" className={classes.titleText}>
                        Amigo Secreto Online <span role="img">🕵🏾‍♂️</span>
                    </Link>
                </Typography>
                <Tooltip title="Adicionar nova pessoa" arrow>
                    <Link to="/add" className={classes.titleText}>
                        <Button color="inherit">Adicionar Participante</Button>
                    </Link>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}