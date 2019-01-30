import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FiguresContainer from './containers/FiguresContainer';
import AmiiboDetails from './components/AmiiboDetails';
import Header from './components/Header';
import AmiiboListContainer from './containers/AmiiboListContainer';
import BoxContainer from './containers/BoxContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={FiguresContainer}
          />

          <Route
            path="/figure/:slug"
            render={props => <AmiiboDetails {...props} />}
          />

          <Route
            path="/my-box"
            exact
            component={BoxContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default App;




// import React, { Component } from 'react';
// import './App.css';
// import { Route, Switch } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Amiibo from './components/Amiibo';
// import FiguresContainer from './containers/FiguresContainer';
// import IntoTheBox from './components/IntoTheBox';

// import ProductListContainer from './containers/ProductListContainer';
// import CartContainer from './containers/CartContainer';

// import ProductDetails from './components/Products/ProductDetails';
// import Menu from './components/Menu';
// import SignupPage from './components/Connection/SignupPage';
// import SigninPage from './components/Connection/SigninPage';
// import BoxContainer from './containers/BoxContainer';

// class App extends Component {


//   // addNewFigureIntoTheDatabase(figureData) {
//   //   this.setState(prevState => {
//   //     const { figures, otherId } = prevState;
//   //     const figure = { ...figureData, id: otherId };
//   //     return {
//   //       figures: [...figures, figure],
//   //       newId: otherId + 1
//   //     }
//   //   });
//   // }

//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Switch>
//           <Route
//             path="/"
//             exact
//             component={FiguresContainer}
//           />

//           {/* <Route
//             path="/new"
//             exact
//             render={props =>
//               <AddNewAmiibo
//                 {...props}
//                 addNewFigureIntoTheDatabase={this.addNewFigureIntoTheDatabase}
//               />
//             }
//           /> */}

//           <Route
//             path="/my-box"
//             exact
//             component={BoxContainer}
//           />

//           <Route
//             path="/figure/:slug"
//             exact
//             component={Amiibo}
//           />
//         </Switch>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;
