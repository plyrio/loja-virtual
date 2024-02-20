import React from 'react'


const subTitle = "Salve o Dia"
const title = (
    <h2 className='title'>Participe um Dia Inteiro Gratuito de um Workshop Para <strong>Masterização <span>Avançada</span></strong>  em vendas</h2>
)
const desc = "Oferta Limitada! Se Apresse"


const Register = () => {
    return (
        <section className='register-section padding-tb pb-0'>
            <div className="container">
                <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
                    <div className="col">
                        <div className="section-header">
                            <span className='subtitle'>{subTitle}</span>
                            <p>{title}</p>
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="section-wrapper">
                            <h4>Registre-se Agora</h4>
                            <form action="" className='register-form'>
                                <input type="text" name='name' placeholder='Nome de Usuário' className='reg-input' />
                                <input type="email" name='email' placeholder='E-mail' className='reg-input' />
                                <input type="number" name='numner' placeholder='Telefone' className='reg-input' />
                                <button type="submit" className="lab-btn">
                                    Registre-se Agora
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register