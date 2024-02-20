import React from 'react'

const title = "Sobre o ShopCart";
const desc = "Tema Eduaid, universidade de classe mundial número um no mundo. Há alunos que estudam sempre nesta universidade, o tempo todo.";
const ItemTitle = "Categorias";
const quickTitle = "Links rápidos";
const tweetTitle = "Tweets recentes";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'Espirito Santo, BRA.',
    },
    {
        iconName: 'icofont-phone',
        text: '+55 9 9999 9999',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@shopcart.com',
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
        texto: 'Faculdade',
        link: '#',
    },
    {
        texto: 'Equipe',
        link: '#',
    },
    {
        texto: 'Alunos',
        link: '#',
    },
    {
        texto: 'Ex-alunos',
        link: '#',
    },

]
const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer