//const server = "http://localhost:3000";
const server = "https://61aaaf2834e347008fcc4139--relaxed-morse-4883ee.netlify.app";
const apiAdmin = `${server}/admin`;
const apiLoginUser = `${apiAdmin}/login`
const apiRegister = `${apiAdmin}/register`
const apiAlojamiento = `${server}/alojamientos`;
const apiFiltroNombre = `${server}/nombre`
const apiFiltroHabitacion = `${apiAlojamiento}/habitacion`
const apiFiltroUbicacion = `${apiAlojamiento}/ubicacion`
const apiFiltroPresupuesto = `${apiAlojamiento}/presupuesto`
const apiFiltroFchaIngreso = `${apiAlojamiento}/fch_ingreso`
const apiFiltroTEstadia = `${apiAlojamiento}/tmp_estadia`
const apiUsuario = `${server}/usuarios`
const apiReserva = `${server}/reservas`


export {apiAdmin, apiLoginUser, apiRegister, apiAlojamiento, apiUsuario, apiReserva, apiFiltroNombre, apiFiltroHabitacion, apiFiltroUbicacion, apiFiltroPresupuesto, apiFiltroFchaIngreso, apiFiltroTEstadia};
