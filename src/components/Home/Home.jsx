import React from 'react';
import {useHistory} from 'react-router-dom';

// now we will make a button a navigation button
// WE NEED A HOOD THAT REACT-ROUTER-DOM HAS TO HOOK INTO THE CREATED URL 
// ITS CALLED {useHistory}
// THIS HOOK IS SIMPLE
// declare state called history. this hooks into the url of the animals
function Home() {

  const history = useHistory();

  const handleClick = () => {
    alert('Going to animal page now...');
    //???????
    history.push('/animals');
    // "push the user to the animals view"
    // this puts /animals at the end or most recent history of your url bar.
    // url bar basically has an array of history. the last one is the current ("most recent")
    // so in doing so, /animals will be the current page

    // this is like the login page on a solo project pusing the user to the home page after
    // registering or loggin in.

    // This is seen in Wikepedia when you click a link and it skips down the page
  }

  return (
    <div>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500}/>
      <button onClick={handleClick}>GO TO ANIMALS</button>
    </div>
  );
}

export default Home;
