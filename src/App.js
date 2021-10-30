import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import Profile from './pages/Profile/Profile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Booking from './pages/Booking/Booking';
import Order from './pages/Order/Order';
import MyOrder from './pages/MyOrder/MyOrder';
import AllOrders from './pages/AllOrders/AllOrders';
import AddNewService from './pages/AddNewService/AddNewService';
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/Home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/profile'>
              <Profile></Profile>
            </PrivateRoute>
            <PrivateRoute exact path='/my-order'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path='/Manage-all-orders'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute exact path='/add-new-service'>
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute exact path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path='/place-order/:id'>
              <Order></Order>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
