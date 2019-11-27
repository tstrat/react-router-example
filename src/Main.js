import React from 'react';
import './main.scss';
import { Route, Link } from 'react-router-dom';

export default function Main(props) {
  return (
    <div className='Main'>
      <h1>Hope everyone has an awesome Turkey Day!</h1>
      <h2>Foods To Have for Thanksgiving</h2>
      <nav>
        {/* Links go Here */}
        <ul>
          <li>
            <Link to='/potato'>Potato</Link>
          </li>
          <li>
            <Link to='/yams'>Yams</Link>
          </li>
          <li>
            <Link to='/turkey'>Turkey</Link>
          </li>
        </ul>
      </nav>
      {/* Here is where I display routes */}

      {/* Route with RouteProps and Custom Props */}
      <Route
        path='/potato'
        render={routeProps => (
          <Food
            message='Potato is awesome!'
            thanksgiving='Awesome Holiday!'
            {...routeProps}
          />
        )}
      />

      {/* Normal Routes */}
      <Route path='/yams' component={Yams} />
      <Route path='/turkey' component={Turkey} />
      {/* Exact required or it will match all other routes (take it out and try it yourself) */}
      <Route exact path='/' component={Landing} />
    </div>
  );
}

const Yams = props => {
  console.log(props); // see what props go to this one
  return <h1>Yams are teh Best</h1>;
};
const Turkey = props => {
  return <h1>Bird is the word, Turkey is great!</h1>;
};

const Landing = props => {
  return <h1>I am the landing page</h1>;
};

// Generic food component
const Food = props => {
  console.log(props); // see what props go to this one
  return <h1>{props.message}</h1>;
};
