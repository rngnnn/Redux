import React from 'react'
import Counter from './components/counter/Counter'
import { Provider } from "react-redux";
import "./App.css";
import { store } from './redux/store';
import todoReducer from './redux/reducers/todoReducer';

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <ToDo/>
      </Provider>
    </div>
  );
}

export default App