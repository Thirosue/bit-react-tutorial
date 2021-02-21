import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Submit from './index';

let container;
let mockFunc = jest.fn();

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render', () => {
  act(() => {
    ReactDOM.render(<Submit />, container);
  });
  const label = container.querySelector('button');
  expect(label.textContent).toBe('Confirm');
});

it('can render with Text', () => {
  act(() => {
    ReactDOM.render(<Submit>Test</Submit>, container);
  });
  const button = container.querySelector('button');
  expect(button.textContent).toBe('Test');
});

it('can be clicked when not in proccessing', () => {
  act(() => {
    ReactDOM.render(<Submit onClick={mockFunc} />, container);
  });
  const button = container.querySelector('button');

  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(mockFunc.mock.calls.length).toBe(2)
});

// it('cannot be clicked during proccessing', () => {
//   act(() => {
//     ReactDOM.render(<Submit processing={true} onClick={mockFunc} />, container);
//   });
//   const button = container.querySelector('button');

//   act(() => {
//     button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//     button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//   });
//   expect(mockFunc.mock.calls.length).toBe(0)
// });
