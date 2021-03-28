import { Switch, Route } from 'react-router-dom';
import CardList from './Components/CardsList';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
import Basket from './Components/Basket';
import Selected from './Components/Selected';
import Comparison from './Components/Comparison';
import Filter from './Components/Filter';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Filter />
      <Switch>
        <Route exact path="/">
          <CardList />
        </Route>
        <Route exact path="/basket">
          <Basket />
        </Route>
        <Route exact path="/selected">
          <Selected />
        </Route>
        <Route path="/comparison">
          <Comparison />
        </Route>
      </Switch>
    </Container>
  );
}
