import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Modal from 'Containers/Modal';

describe('Modal test', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let originalCreatePortal: any;
  beforeAll(() => {
    originalCreatePortal = ReactDOM.createPortal;
    ReactDOM.createPortal = (node) => node as ReactPortal;
  });

  afterAll(() => {
    ReactDOM.createPortal = originalCreatePortal;
  });

  it('Modal open', () => {
    const tree = renderer.create(<Modal isOpen={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Modal close', () => {
    const tree = renderer.create(<Modal isOpen={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
