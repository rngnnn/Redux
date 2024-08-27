import React from 'react'
import Counter from './components/counter/Counter'

import { Provider } from "react-redux";
import { store } from './redux/store';


import "./App.css";

const App = () => {
  return (
    <div className='app'>


<Provider store={store}>

<Counter/>
</Provider>

    </div>
  )
}

export default App