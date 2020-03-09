import React from 'react';
import './config/ReactotronConfig';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import store from './store/index';

import Routes from './routes';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
