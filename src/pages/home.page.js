import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '../components/list.component';
import { useSelector, useDispatch} from 'react-redux';
import Container from '@material-ui/core/Container';
import { getPeople, deletePerson, raffle } from '../store/actions';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    container: {
        padding: '2vh 1rem 0 1rem'
    },
    actions: {
        paddingRight: '2rem'
    },
    btnContainer: {
        padding: '2rem',
        display: 'flex',
        justifyContent: 'flex-end'
    }
});

export default function Home(){
    const classes = useStyles();
    const people = useSelector(state =>state.people.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPeople());
    }, [dispatch]);

    const handleDelete = (person) =>{
        dispatch(deletePerson(person));
    }

    const handleRaffle = () => {
        dispatch(raffle(people));
    }

    return(
        <Container className={classes.container} maxWidth="lg">
            <h1>Participantes</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Nome</TableCell>
                            <TableCell align="right">
                                <span className={classes.actions} >Ações</span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <List people={people} handleDelete={handleDelete} />
                </Table>
            </TableContainer>
            <div  className={classes.btnContainer}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleRaffle}
                    startIcon={<PlayCircleOutlineIcon />}
                >
                    Sortear agora!
                </Button>
            </div>
        </Container>
       
    )
}