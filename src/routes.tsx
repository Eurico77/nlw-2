import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import ProfessorList from './pages/ProfessorList';
import ProfessorForm from './pages/ProfessorForm';


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={ProfessorList} />
            <Route path="/give-classes" component={ProfessorForm} />
        </BrowserRouter>
    )
}


export default Routes; 