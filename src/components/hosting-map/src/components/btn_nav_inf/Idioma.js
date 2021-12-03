

const hStyle = { fontSize: '1.5em', color: '#fff' };
const mStyle = { fontSize: '2em', color: '#fff' };

export const Idioma = () => {
    return (
        <div>
            <button className="idioma" style= {hStyle}>Epañol</button>
            <span id="separador" style= {mStyle}>|</span>
            <button className="idioma" style= {hStyle}>Moneda</button>
            <span id="separador" style= {mStyle}>|</span>
            <button className="idioma" style= {hStyle}>Login</button>
        </div>
    )
}
