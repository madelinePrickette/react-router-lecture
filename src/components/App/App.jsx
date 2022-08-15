import React from 'react';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetail from '../AnimalDetail/AnimalDetail.jsx';
// PUT THIS IMPORT HERE FOR FOX SPECIFIC PAGE

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Router and Route are two components given to us 
// we can use them as if we made them

// Wrap App in Router. This changes the url and shows/hides components
// once doing so, check url for a #
// everything before the # is server side route and everything after is client side route

// Wrap Home in a route
// "This component Home may or may not be shown on the dom based on what the user is looking at."

// So home has the path of / because in this case, we want home to be everywhere there is a hash..
// but thats annoying so we type 'exact' to aviod the house ending up everywhere at every other
// client route.
// Now type plants as plants and animals as animals

// you can make navs in specific components like plants for spant specific nav,
// or have nav in app, outside of components, so it will be everywhere

// a tag is a anchor tag, or a hyperlink, or a url
// make sure to add a to='/whatever-client-route-you-want' so the link is 
// connected to the routes we made for each component. 
function App() {
  return (
    <Router>
      <div className="App">
        <h1>SPAs!</h1>
          <nav>
            <ul>
              <li>
                <Link to='/'>HOME</Link>
              </li>
              <li>
                <Link to='/plants'>PLANTS</Link>
              </li>
              <li>
                <Link to='/animals'>ANIMALS</Link>
              </li>
            </ul>
          </nav>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/plants">
          <Plants />
        </Route>

        {/* put exact on this one so it doesnt get messed with /animals/id */}
        <Route path="/animals" exact>
          <Animals />
        </Route>

        {/* This is how the url knows what animal you are wanting to go to */}
        Type in an id 
        <Route path='/animals/:id'>
          <AnimalDetail />
        </Route>
      </div>
    </Router>
  );
}

export default App;
