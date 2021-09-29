import React from 'react'
import {Route} from "react-router-dom"
import RegisterForm from './forms/RegisterForm'
import CompanyList from './listas/CompanyList'
import Inicio from './Inicio'
import main from './main'

function Routes() {
    return (
        <div>
            <Route  exact path="/"  component={Inicio} />
            <Route  exact path="/main"  component={main} />

            <Route  path="/register" exact component={RegisterForm} />
            <Route  path="/companylist" exact component={CompanyList} />

        </div>
    )
}
export default Routes
