import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Redux
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers/index';
import { StoreState } from './redux/types/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const middlewares = [thunk, createLogger];

const initialState = {
  modals: {
    NotificationsModal: {
      open: false
    }
  }
};

const store = createStore<StoreState>(reducers, initialState, applyMiddleware(...middlewares));

// Apollo 
import Routes from './routes/index';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const apiUri = 'https://lively-server.herokuapp.com/graphql';
const localUri = 'https://localhost:8081/graphql';
const cloud9 = 'https://projects-th3nathan.c9users.io:8081/graphql';
let uri;
if (process.env.NODE_ENV) {
  uri = apiUri;
} else if (process.env.ON_CLOUD_9) {
  uri = cloud9;
} else {
  uri = localUri;
}
// const uri = process.env.NODE_ENV === 'production' ? apiUri : localUri;

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      ['x-token']: localStorage.getItem('x-token') || null,
      ['x-refresh-token']: localStorage.getItem('x-refresh-token') || null,
    } 
  });

  return forward!(operation);
});

// InMemoryCache is recommended, the purpose of the cache is to store 
// the results of graphql calls so they can be used by different components
// not using the cache yet, may just use redux instead
const client = new ApolloClient({
  link: concat(authMiddleware, new HttpLink({ uri })),
  cache: new InMemoryCache() as any, // tslint:disable-line
});

const App =  (<ApolloProvider client={client as any}><Routes /></ApolloProvider>); // tslint:disable-line

ReactDOM.render(
  (<Provider store={store}>{App}</Provider>),
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
