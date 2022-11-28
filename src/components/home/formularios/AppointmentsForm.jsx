import React, {useState, useEffect} from 'react'
import {Typography, Table, TableContainer, TableHead, TableRow, TableCell, Paper} from "@material-ui/core";
import Axios, * as others from 'axios';
import {IconButton, TableBody} from "@mui/material";
import {EditOutlined} from '@material-ui/icons'


const AppointmentsForm = () => {
    const [apptList, setApptList] = useState()

    const getAppts = async() =>{
        const {data} = await Axios.get('http://localhost:3000/appointments')
        setApptList(data)
    }

    useEffect(getAppts, [])

    return(
        <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID Orden</TableCell>
                        <TableCell>ID Usuario</TableCell>
                        <TableCell>Fecha entrada</TableCell>
                        <TableCell>Tipo de instrumento</TableCell>
                        <TableCell>Subtotal</TableCell>
                        <TableCell>Fecha salida</TableCell>
                        <TableCell>ID Servicio</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {apptList.map((appt, index) => (
                        <TableRow key={{index}}>
                            <TableCell>{appt.idordenes}</TableCell>
                            <TableCell>{appt.id_usuario}</TableCell>
                            <TableCell>{appt.datetime_entrada}</TableCell>
                            <TableCell>{appt.idtipo_instrumento}</TableCell>
                            <TableCell>{appt.subtotal}</TableCell>
                            <TableCell>{appt.date_salida}</TableCell>
                            <TableCell>{appt.id_servicio}</TableCell>
                            <TableCell>{appt.total}</TableCell>
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