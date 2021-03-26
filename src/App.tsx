import { Switch, Route } from 'react-router-dom';
import CardList from './Components/CardsList';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
import Basket from './Components/Basket';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <CardList />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
        {/* <Route path="/login"> */}
        {/* <LoginView /> */}
        {/* </Route> */}
        {/* <Route path="/contacts"> */}
        {/* <ContactsView /> */}
        {/* </Route> */}
      </Switch>
    </Container>
  );
}
