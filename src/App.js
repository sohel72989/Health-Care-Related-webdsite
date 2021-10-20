import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home'
import Header from './Pages/Header/Header'
import Service from './Pages/Service/Service'
import Banner from './Pages/Banner/Banner'
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Pages/Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/privateRoute';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service">
              <Service></Service>
            </PrivateRoute>
            <PrivateRoute path="/banner">
              <Banner></Banner>
            </PrivateRoute>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
