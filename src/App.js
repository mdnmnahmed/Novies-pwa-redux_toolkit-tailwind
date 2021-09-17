import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import RouterComponent from './RouterComponent';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <RouterComponent />
                    <Footer />
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;