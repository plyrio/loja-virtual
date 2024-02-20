import React from 'react';
import { Link } from 'react-router-dom';

const btnText = "Inscreva-se Gratuitamente";
const title = "Compre Qualquer Coisa, Em Qualquer Lugar";
const desc = "Faça compras em qualqueur dispositivo com seu app & aprenda o tempo todo o que que você quiser. Basta baixar & instalar & começar a aprender"

const AppSection = () => {
    return (
        <div className='app-section padding-tb'>
            <div className="container">
                <div className="section-header text-center">
                    <Link to="/signup" className='lab-btn mb-4'>{btnText}</Link>
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>
                </div>

                <div className="section-wrapper">
                    <ul className="lab-ul">
                        <li>
                            <a href="#"><img src="/src/assets/images/app/01.jpg" alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="/src/assets/images/app/02.jpg" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppSection