import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Tracks from './Music/Tracks'
import About from './About'
import Shows from './Shows/Shows'
import WordGame from './Words/WordGame'
import Gallery from './Photos/Gallery'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/music' component={Tracks} />
            <Route path='/xword' component={WordGame} />
            <Route path='/shows' component={Shows} />
            <Route path='/about' component={About} />
            <Route path='/photos' component={Gallery} />
        </Switch>
    </main>
)

export default Main
