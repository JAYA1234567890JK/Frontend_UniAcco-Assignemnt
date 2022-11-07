import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

import Info from './components/Info'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/info" component={Info} />
    </Switch>
  </BrowserRouter>
)

export default App
