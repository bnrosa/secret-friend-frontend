import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import {Link} from 'react-router-dom';

export default function List(props){
    return(
        <TableBody>
        {
            props.people.map((person, index) => (
                <TableRow key={index}>
                    <TableCell component="th" scope="row">
                        {person.email}
                    </TableCell>
    
                    <TableCell align="right">
                        {person.name}
                    </TableCell>
                    
                    <TableCell align="right">
                        <Tooltip title="Editar pessoa" arrow>
                            <Link to={'/edit/'+person._id}>
                                <IconButton aria-label="edit" color="primary">
                                    <EditIcon />
                                </IconButton>
                            </Link> 
                        </Tooltip>
                        <Tooltip title="Remover pessoa" arrow>
                            <IconButton onClick={() => props.handleDelete(person)} aria-label="delete" color="secondary">
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </TableCell>
                </TableRow>
            ))
        }      
        </TableBody>
    );
} 