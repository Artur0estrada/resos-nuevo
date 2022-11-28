import {useState, useEffect} from 'react'
import {Table, TableContainer, TableHead, TableRow, TableCell, Paper} from "@material-ui/core";
import Axios, * as others from 'axios';
import {IconButton, TableBody} from "@mui/material";
import {EditOutlined} from '@material-ui/icons'


const AppointmentsForm = () => {
    const [apptList, setApptList] = useState([])

    const getAppts = async() =>{
        const {data} = await Axios.get('http://localhost:3001/appointments')
        setApptList(data)
    }
    useEffect(getAppts, [])

    return(
        <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID Servicio</TableCell>
                        <TableCell>ID Costo</TableCell>
                        <TableCell>idtipo_instrumento</TableCell>
                        <TableCell>marca</TableCell>
                        <TableCell>Numero de serie</TableCell>
                        <TableCell>Descripcion</TableCell>
                        <TableCell>Adicional</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {apptList.map((appt, index) => (
                        <TableRow key={{index}}>
                            <TableCell>{appt.idservicio}</TableCell>
                            <TableCell>{appt.id_costos}</TableCell>
                            <TableCell>{appt.idtipo_instrumento}</TableCell>
                            <TableCell>{appt.marca}</TableCell>
                            <TableCell>{appt.num_serie}</TableCell>
                            <TableCell>{appt.descripcion}</TableCell>
                            <TableCell>{appt.adicional}</TableCell>
                            <TableCell>{appt.precio_total}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => alert ('Editar ${appt.idordenes}')} size={"small"} color={'primary'}>
                                    <EditOutlined />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AppointmentsForm