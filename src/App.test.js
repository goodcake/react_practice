import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Math } from './Math';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('simple addition', () => {
    //Arrange/Act
    const rtnValue = Math.parseEquation('1 + 1');

    //Assert
    expect(rtnValue).toEqual(2);
});