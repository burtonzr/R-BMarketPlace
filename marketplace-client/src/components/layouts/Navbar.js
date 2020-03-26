import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
      return (
        <div>     
          <div id="header">
            <div className="container d-flex">
              <div className="logo mr-auto">
                <Link to="/"><img src="../img/logo.jpg" alt="Logo" className="img-fluid"/></Link>
              </div>
              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li className="active"><Link to="/">Home</Link></li>
                  <AddProduct />
                  <li className="drop-down"><a href="/">Postings</a>
                    <ul>
                      <li><Link to={{
                                pathname: '/Category/Community',
                                state: {
                                    categoryExtra: ''
                                }
                          }}>Community</Link></li>
                      <li><Link to={{
                                pathname: '/Category/Discussion',
                                state: {
                                    categoryExtra: ''
                                }
                          }}>Discussion Board</Link></li>
                      <li className="drop-down"><a href="/">For Sale</a>
                        <ul>
                          <li><Link to={{
                                pathname: '/Category/ForSale',
                                state: {
                                    categoryExtra: 'Apartments'
                                }
                          }}>Apartments</Link></li>
                          <li><Link to={{
                                pathname: '/Category/ForSale',
                                state: {
                                    categoryExtra: 'Housing'
                                }
                          }}>Housing</Link></li>
                          <li><Link to={{
                                pathname: '/Category/ForSale',
                                state: {
                                    categoryExtra: 'Office / Commercial Space'
                                }
                          }}>Office / Commercial Space</Link></li>
                          <li><Link to={{
                                pathname: '/Category/ForSale',
                                state: {
                                    categoryExtra: 'Cooking'
                                }
                          }}>Cooking</Link></li>
                          <li><Link to={{
                                pathname: '/Category/ForSale',
                                state: {
                                    categoryExtra: 'Transportation'
                                }
                          }}>Transportation</Link></li>
                          <li><Link to={{
                                pathname: '/Category/ForSale',
                                state: {
                                    categoryExtra: 'Furniture'
                                }
                          }}>Furniture</Link></li>
                        </ul>
                      </li>
                      <li className="drop-down"><a href="/">For Rent</a>
                        <ul>
                          <li><Link to={{
                                pathname: '/Category/ForRent',
                                state: {
                                    categoryExtra: 'Apartments'
                                }
                          }}>Apartments</Link></li>
                          <li><Link to={{
                                pathname: '/Category/ForRent',
                                state: {
                                    categoryExtra: 'Housing'
                                }
                          }}>Housing</Link></li>
                          <li><Link to={{
                                pathname: '/Category/ForRent',
                                state: {
                                    categoryExtra: 'Office / Commercial Space'
                                }
                          }}>Office / Commerical Space</Link></li>
                          <li><Link to={{
                                pathname: '/Category/ForRent',
                                state: {
                                    categoryExtra: 'Cooking'
                                }
                          }}>Cooking</Link></li>
                          <li><Link to={{
                                pathname: '/Category/ForRent',
                                state: {
                                    categoryExtra: 'Transportation'
                                }
                          }}>Transportation</Link></li>
                          <li><Link to={{
                                pathname: '/Category/ForRent',
                                state: {
                                    categoryExtra: 'Furniture'
                                }
                          }}>Furniture</Link></li>
                        </ul>
                      </li>
                      <li><Link to={{
                                pathname: '/Category/Services',
                                state: {
                                    categoryExtra: ''
                                }
                          }}>Services</Link></li>
                    </ul>
                  </li>
                  <WelcomeUser />
                  <SignoutUser />
                </ul>
              </nav>
            </div>
        </div>
      </div>
    )
  }
}

function AddProduct(props) {
  if(localStorage.getItem('token') !== null) {
    return (
      <li><Link to="/AddProduct">Add Product</Link></li>
    )
  } else {
    return <React.Fragment></React.Fragment>
  }
}

function WelcomeUser(props) {
  if (localStorage.getItem('fullName') !== null) {
  return <React.Fragment><li><div id="welcome">Welcome {localStorage.getItem('fullName')}</div></li></React.Fragment>;
  } else{
  return <li><Link to="/signup">Create Account / Login</Link></li>; 
  }
}

function SignoutUser(props) {
  if(localStorage.getItem('token') !== null) {
    return <li><Link to="/" id="signout">Sign Out</Link></li>
  } else {
    return <React.Fragment></React.Fragment>
  }
}