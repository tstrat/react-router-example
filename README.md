## Steps for Router

1. Set up HashRouter or BrowserRouter as the parent component

```js
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);
```

2. Set up Route with path + component (or render)

```js
import { Route } from 'react-router-dom';

<Route path='/somepath' component={SomeComponent} />;
```

3. Link to routes so that you can navigate the different paths

```js
import { Link } from 'react-router-dom';

<Link to='/somepath'>Here is the text for the link</Link>;
```
