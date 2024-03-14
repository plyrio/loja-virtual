import React from 'react'
import { Link } from 'react-router-dom';

const title = "Mais de 60.000 Clientes";

const desc = "Compre produtos em qualquer dispositivo com nosso aplicativo e aproveite seu tempo como quiser. Basta baixar e instalar e começar a comprar";

const clientsList = [
    {
        imgUrl: './src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Junte-se a nós',
    },
    {
        imgUrl: './src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Junte-se a nós',
    },
    {
        imgUrl: './src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Junte-se a nós',
    },
    {
        imgUrl: './src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Junte-se a nós',
    },
    {
        imgUrl: './src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Junte-se a nós',
    },
    {
        imgUrl: './src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Junte-se a nós',
    },
    {
        imgUrl: './src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Junte-se a nós',
    },
]

const LocationSprade = () => {
    return (
        <div className='clients-section style-2 padding-tb'>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>
                </div>

                {/* main content */}
                <div className="section-wrapper">
                    <div className="clients">
                        {
                            clientsList.map((val, i) => (
                                <div key={i} className="client-list">
                                    <Link to="/signup" className='client-content'>
                                        <span>{val.text}</span>
                                    </Link>
                                    <div className="client-thumb">
                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSprade