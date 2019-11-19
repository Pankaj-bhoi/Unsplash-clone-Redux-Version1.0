import React, { Component } from 'react'
import './App.css';
import NavigationBar from './Components/Navbar';
import navStyle from '../src/style/NavStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagesContainer from './Containers/ImagesContainer';
import Cover from './Components/Cover';
// import JumboCover from './Components/JumboCover';

class App extends Component {
  render() {
    return (
        <div>
          <NavigationBar />
          <Cover />
          <ImagesContainer />
        </div>
    )
  }
}

// function App() {
//   return (
// <Provider>
//   <div>
//     <NavigationBar />
//     <Cover />
//     <Images />
//   </div>
// </Provider>
//   )
// }

export default App;
