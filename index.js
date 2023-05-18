import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import MyForm from './KendoForm/MyForm.jsx';
import '@progress/kendo-theme-material/dist/all.css';

const App = () => {
  return (
    <div>
        <MyForm />
    </div>
  );
};

render(<App />, document.getElementById('root'));
