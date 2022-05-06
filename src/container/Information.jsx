import React from 'react';
import '../styles/components/Information.css'

const Information = () => {
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto</h2>
                </div>
                <div className="Information-form">
                    <form action="">
                        <input type="text" placeholder='Nombre completo' name="nombre" id="" />
                        <input type="text" placeholder='Correo Electronico' name="mail" id="" />
                        <input type="text" placeholder='Dirección' name="address" id="" />
                        <input type="text" placeholder='Apto' name="apto" id="" />
                        <input type="text" placeholder='Ciudad' name="city" id="" />
                        <input type="text" placeholder='País' name="country" id="" />
                        <input type="text" placeholder='Estado' name="state" id="" />
                        <input type="text" placeholder='Código postal' name="cp" id="" />
                        <input type="text" placeholder='Teléfono' name="phone" id="" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        Regresar
                    </div>
                    <div className="Information-next">
                        Pagar
                    </div>
                </div>
                <div className="Information-sidebar">
                    <h3>Pedido:</h3>
                    <div className="Information-item">
                        <div className="Information-element">
                            <h4>ITEM Name</h4>
                            <span>$10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;