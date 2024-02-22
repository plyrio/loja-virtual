import React from 'react'
import { Link } from 'react-router-dom';

const title = "Sobre o ShopCart";
const desc = "Tema Eduaid, universidade de classe mundial número um no mundo. Há alunos que estudam sempre nesta universidade, o tempo todo.";
const ItemTitle = "Categorias";
const quickTitle = "Links rápidos";
const tweetTitle = "Tweets recentes";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: ' Espirito Santo, BRA.',
    },
    {
        iconName: 'icofont-phone',
        text: ' +55 9 9999 9999',
    },
    {
        iconName: 'icofont-envelope',
        text: ' info@shopcart.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'Todos Produtos',
        link: '/shop',
    },
    {
        text: 'Comprar',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'Sobre',
        link: '/about',
    },
    {
        text: 'Política',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Sessões de Verão',
        link: '#',
    },
    {
        text: 'Eventos',
        link: '#',
    },
    {
        text: 'Galeria',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Política de Privacidade',
        link: '#',
    },
    {
        text: 'Termos de Uso',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>Aminur islam <a href="#">@ShopCart Greetings!  #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>Somrat islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'Faculdade',
        link: '#',
    },
    {
        text: 'Equipe',
        link: '#',
    },
    {
        text: 'Alunos',
        link: '#',
    },
    {
        text: 'Ex-alunos',
        link: '#',
    },

]
const Footer = () => {
    return (
        <footer className='style-2'>
            <div className="footer-top dark-view padding-tb">
                <div className="container">
                    <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{title}</h4>
                                        </div>
                                        <div className="content">
                                            <p>{desc}</p>
                                            <ul className="lab-ul office-address">
                                                {
                                                    addressList.map((val, i) => (
                                                        <li key={i}>
                                                            <i className={val.iconName}>{val.text}</i>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <ul className="lab-ul social-icons">
                                                {
                                                    socialList.map((val, i) => (
                                                        <li key={i}>
                                                            <a href="#" className={val.className}> <i className={val.iconName}>{val.text}</i></a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{ItemTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul office-address">
                                                {
                                                    ItemList.map((val, i) => (
                                                        <li key={i}>
                                                            <a href='#'>{val.text}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{quickTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul office-address">
                                                {
                                                    quickList.map((val, i) => (
                                                        <li key={i}>
                                                            <a href='#'>{val.text}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{tweetTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul office-address">
                                                {
                                                    tweetList.map((val, i) => (
                                                        <li key={i}>
                                                            <i className={val.iconName}>{val.desc}</i>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* footer bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <p>&copy; 2024 <Link to="/">ShopCart</Link> Designed by <a href="/" target='_blank'>Plyrio</a>
                        </p>
                        <div className='footer-bottom-list'>
                            {
                                footerbottomList.map((val, i) => (
                                 <a href='#' key={i}>{val.text}</a>   
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer