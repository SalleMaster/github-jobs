import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Bootstrap
import { Container } from 'react-bootstrap';

// Components
import Header from './components/Header';
import Jobs from './components/Jobs';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Jobs />
      </Container>
    </Provider>
  );
}

export default App;
