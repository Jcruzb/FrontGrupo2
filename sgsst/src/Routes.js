import React from 'react'
import {Route} from "react-router-dom"
import RegisterFormView from './formsViews/RegisterFormView'
import CompanyListView from './listasViews/CompanyListView'
import CreateWorker from './formsViews/WorkerFormView'
import WorkerListview from './listasViews/WorkerListView'
import ReportIncident from './formsViews/ReportIncidentView'
import IncidentsListView from './listasViews/IncidentsListView'
import EditarTrabajador from './formsViews/EditWorkerView'



import Inicio from './Inicio'
import main from './main'

function Routes() {
    return (
        <div>
            {/* login */}
            <Route  exact path="/"  component={Inicio} />
            {/* Main */}
            <Route  exact path="/main"  component={main} />
            {/* Register */}
            <Route  path="/register" exact component={RegisterFormView} />
            {/* Companys List */}
            <Route  path="/companylist" exact component={CompanyListView} />

            {/* Worker */}
            <Route  path="/createworker" exact component={CreateWorker} />
            <Route  path="/workerslist" exact component={WorkerListview} />
            <Route  path="/editWorker/:id" component={EditarTrabajador} />

            {/* <Route  path="/editWorker/:id" component={EditarTrabajador} /> */}

            {/* Incidents */}
            <Route  path="/reportincident" exact component={ReportIncident} />
            <Route  path="/Incidentslist" exact component={IncidentsListView} />




        </div>
    )
}
export default Routes
