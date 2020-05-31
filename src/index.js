import React from 'react';
import ReactDOM from 'react-dom';
//Data Base
import store from './redux/redux-store'
//css
import './index.css';
//
import * as serviceWorker from './serviceWorker';
//components
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//mongodb+srv://rezkiy37:<password>@cinema-yo2f6.mongodb.net/test?retryWrites=true&w=majority


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:3007/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

//callSubscriber
ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

