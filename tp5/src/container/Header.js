import React, { Component } from 'react';
import logo from '../img/logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div class="wrapper row">
          <div class="container logo-search col-2">
            <img class="pull-left" src={logo} alt="logo" />
          </div>

          <form class="col-7 row d-none d-md-block justify-content-between" method="POST" action="index.html">
            <input type="search" required class="col search" />
            <input
              type="submit"
              name="submit"
              value="Rechercher"
              class="col submit"
            />
          </form>
          <div class="user col-3 dropdown">
            <a href="#" class=" btn dropdown-toggle">Luke Chesser</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
