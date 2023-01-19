import { Route, Switch } from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage';
import SliderPage from '../../pages/SliderPage/SliderPage';

function App() {
  return (
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='/cards/:id'>
          <SliderPage />
        </Route>
      </Switch>
  );
}

export default App;
