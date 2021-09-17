import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import RouterComponent from './RouterComponent';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <Header />
                <RouterComponent />
                <Footer />
            </Provider>
        </>
    );
}

export default App;