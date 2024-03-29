import React from 'react';
import { StoreProvider} from '../../Context/Store';
import Layout from '../Layout/Layout';
import './App.css';

const App = ({children}) => {
    //get the state and dispatch from the store
     return(
        <StoreProvider>
         <Layout>
            {children}
         </Layout>
        </StoreProvider>
     )
}

export default App;

