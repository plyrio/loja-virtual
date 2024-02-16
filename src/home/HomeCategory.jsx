import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "Escolha Qualqer Produto";
const title = "Compre Tudo Conosco";
const btnText = "Comece Agora";

const categoryList = [
    {
        imgUrl: 'src/assets/images/category/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: 'src/assets/images/category/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: 'src/assets/images/category/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: 'src/assets/images/category/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: 'src/assets/images/category/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: 'src/assets/images/category/06.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]


const HomeCategory = () => {
    return (
        <div className='category-section style-4 padding-tb'>
            <div className="container">
                {/* section header */}
                <div className="section-header text-center">
                    <span className='subtitle'>{subTitle}</span>
                    <h2 className='title'>{title}</h2>
                </div>

                {/* section card */}
                <div className="section-wrapper">
                    <div>
                        {
                            categoryList.map((val, i) => (
                                <div key={i} className='col'>
                                    <Link to="/shop" className='category-item'>
                                        <div className='category-inner'>
                                            <div className='category-thumb'>
                                                <img src={val.imgUrl} alt="" />
                                            </div>
                                        </div>
                                    </Link>
                                    PARADO 1h28min
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCategory