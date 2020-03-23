import React from 'react';
import './config/ReactotronConfig';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
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
                <ToastContainer autoClose={3000} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
