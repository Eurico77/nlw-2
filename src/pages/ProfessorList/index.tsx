import React from 'react';
import PageHeader from '../../components/pageHeader';
import ProfessorItem from '../../components/ProfessorItem';


import './styles.css';


function ProfessorList() {
    return(
        <div id="page-professor-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-professores">
                    <div className="input-block">
                         <label htmlFor="subject">Matéria</label>
                         <input type="text" id="subject"/>
                     </div>

                     <div className="input-block">
                         <label htmlFor="week_day">Dia da semana</label>
                         <input type="text" id="week_day"/>
                     </div>

                     <div className="input-block">
                         <label htmlFor="time">Hora</label>
                         <input type="text" id="time"/>
                     </div>
                </form>
                
            </PageHeader>

            <main>
                <ProfessorItem/>
                <ProfessorItem/>
                <ProfessorItem/>
                <ProfessorItem/>
                <ProfessorItem/>
                <ProfessorItem/>
                <ProfessorItem/>
                <ProfessorItem/>
                <ProfessorItem/>
            </main>
        </div>

    ) 
}

export default ProfessorList;