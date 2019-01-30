import React, { Component } from 'react';
import './App.css';

// Temp
import { NavItem } from '../../components'
import { HomeActivedIcon, HomeNoActivedIcon } from '../../assets/icons'
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavItem
          imageSrc={HomeActivedIcon}
          imageSrcActived={HomeActivedIcon}
          imageSrcNoActived={HomeNoActivedIcon}
        >
          Home
        </NavItem>
      </div>
    );
  }
}

export default App;
