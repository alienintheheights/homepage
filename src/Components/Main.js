import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Tracks from './Music/Tracks'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/tracks' component={Tracks} />
        </Switch>
    </main>
)

export default Main
