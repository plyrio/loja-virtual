import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"

const Navitens = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    //addevent listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    })
    return (
        <header className={'header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}'}>
            {/*header top start*/}
            <div className={'header-top d-md-none ${socialToggle ? "open" : ""}'}>
                <div className="container">
                    <div className="header-top-area">
                        <Link to="/signup" className='lab-btn me-3'><span>Criar Conta</span></Link>
                        <Link to="/login"><span>Entrar</span></Link>
                    </div>
                </div>
            </div>
            {/*header button*/}
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        {/*logo*/}
                        <div className="logo-search-acte">
                            <div className="logo">
                                <Link to={"/"} >
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>

                        {/*menu area*/}
                        <div className='menu-area'>
                            <div className="menu">
                                <ul className={'lab-ul ${menuToggle ? "active" : ""}'}>
                                    <li><Link to="/">Inicio</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/about">Sobre nós</Link></li>
                                    <li><Link to="/contact">Contato</Link></li>
                                </ul>
                            </div>

                            {/* sign in & log in*/}
                            <Link to='/signup' className='lab-btn me-3 d-none d-md-block'>Criar Conta</Link>
                                <Link to='/login' className='d-none d-md-block'>Entrar</Link>
                            
                            {/* menu toggle*/}
                            <div onClick={() => setMenuToggle(!menuToggle)} className={'header-bar d-lg-none ${menuToggle ? "active" : ""}'}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>


    )
}

export default Navitens