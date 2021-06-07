import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import Resultados from './pages/Resultados'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/resultados' component={Resultados} />
      </Layout>
    </BrowserRouter>
  )
}

export default App
