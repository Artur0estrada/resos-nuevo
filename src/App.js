import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/home/Footer"
import Header from "./components/home/header/Header"
import HomePages from "./components/pages/HomePages"
import Pages from "./components/pageContent/Pages"
import Citas from "./components/pageContent/Citas";
import Sesion from "./components/pageContent/Sesion";
import Register from "./components/pageContent/Register";
import Appointments from "./components/pageContent/Appointments";
import Orders from "./components/pageContent/Orders";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePages} />
          <Route path='/pages' exact component={Pages} />
          <Route path='/citas' exact component={Citas} />
          <Route path='/sesion' exact component={Sesion} />
          <Route path='/register' exact component={Register} />
          <Route path='/appointments' exact component={Appointments} />
          <Route path='/orders' exact component={Orders} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
