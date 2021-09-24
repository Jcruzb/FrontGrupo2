import React from 'react'
import {Route} from "react-router-dom"
import RegisterForm from './forms/RegisterForm'
import CompanyList from './listas/CompanyList'

function Routes() {
    return (
        <div>
            <Route  exact path="/"  component={RegisterForm} />
            <Route  path="/register" exact component={RegisterForm} />
            <Route  path="/companylist" exact component={CompanyList} />

        </div>
    )
}
export default Routes
