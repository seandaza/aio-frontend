import { BsBicycle } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { FiWifi } from "react-icons/fi";
import { MdElectricCar, MdTvOff } from "react-icons/md";
import iconosdescripcion from "./iconosdescripcion.css";


function IconosDescripcion() {
  return (
    <table className="Iconos">
      <tr>
        <td className="iconD">
          <BsBicycle />
        </td>
        <td>Acceso a parqueaderos de bicicleta</td>
      </tr>

      <tr>
        <td className="iconD">
          <BiCoffeeTogo />
        </td>
        <td>Acceso de cafetería</td>
      </tr>

      <tr>
        <td  className="iconD">
          <FiWifi />
        </td>
        <td >Wifi</td>
      </tr>

      <tr>
        <td className="iconD">
        <MdElectricCar/>
        </td>
        <td>Acceso a parqueaderos de bicicleta</td>
      </tr>

      <tr>
        <td className="iconD">
        <MdTvOff/>
        </td>
        <td className="iconD">TV</td>
      </tr>
    </table>
  );
}

export default IconosDescripcion;
