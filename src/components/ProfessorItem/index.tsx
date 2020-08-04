import React from 'react';

import whatsappIcon from '../../assets/image/icons/whatsapp.svg';

import './styles.css';


function ProfessorItem(){
    return(
        <article className="professor-item">
                    <header>
                    <img src="https://avatars0.githubusercontent.com/u/51203417?s=460&u=9435f5a45d69076a42ccd3e46f6e105e83a6cc82&v=4" alt="Samuel MArques"/>
                    <div>
                        <strong>Eurico Magalhães</strong>
                        <span>NodeJs</span>
                    </div>
                    </header>

                    <p>
                    Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. <br/>
                    Per aumento de cachacis, eu reclamis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.<br/>
                    Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>

                </article>
    );
}

export default ProfessorItem;