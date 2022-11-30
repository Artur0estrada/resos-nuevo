import {useState, useEffect} from 'react'
import {Table, TableContainer, TableHead, TableRow, TableCell, Paper} from "@material-ui/core";
import Axios, * as others from 'axios';
import {IconButton, TableBody} from "@mui/material";
import {EditOutlined} from '@material-ui/icons'


const OrdersForm = () => {
    const [orderList, setOrdersList] = useState([])



    const getOrders = async() =>{
        const {data} = await Axios.get('http://localhost:3001/orders')
        setOrdersList(data)
    }
    useEffect(getOrders, [])

    return(
        <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID Orden</TableCell>
                        <TableCell>ID Usuario</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Celular</TableCell>
                        <TableCell>Fecha y hora</TableCell>
                        <TableCell>ID Tipo Instrumento</TableCell>
                        <TableCell>Servicio</TableCell>
                        <TableCell>Subtotal</TableCell>
                        <TableCell>Fecha entrega</TableCell>
                        <TableCell>ID Servicio</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderList.map((order, index) => (
                        <TableRow key={{index}}>
                            <TableCell>{order.idordenes}</TableCell>
                            <TableCell>{order.id_usuario}</TableCell>
                            <TableCell>{order.nombre}</TableCell>
                            <TableCell>{order.celular}</TableCell>
                            <TableCell>{order.datetime_entrada}</TableCell>
                            <TableCell>{order.idtipo_instrumento}</TableCell>
                            <TableCell>{order.tipo_servicio}</TableCell>
                            <TableCell>{order.subtotal}</TableCell>
                            <TableCell>{order.date_salida}</TableCell>
                            <TableCell>{order.id_servicio}</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => alert ('Editar ${order.idordenes}')} size={"small"} color={'primary'}>
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

export default OrdersForm