import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const VaciarCarrito = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Carrito Vacío',
        showConfirmButton: false,
        timer: 2000
      })
}

export const AgregarAlCarrito = () => {
    toast.success('🛒 Agregado al carrito', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

export const EliminarProducto = () => {
    toast.success('Producto Eliminado', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

export const OrdenGenerada = () => {
    toast.success('👌 Genial!, la orden se generó correctamente', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

export const FueraDeStock = () => {
    Swal.fire({
        icon: 'error',
        title: 'Lo sentimos...',
        text: 'Producto sin Stock',
        showConfirmButton: true,
      })
}