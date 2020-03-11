import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import News from './pages/News'
import Header from './components/Header'


const Routes = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/news" component={News} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes