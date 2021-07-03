import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Modal from 'Containers/Modal';

describe('Modal test', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let originalCreatePortal: any;

  const modalProps = {
    isOpen: true,
    onClose: () => void {},
    title: 'Modal',
    children: <div></div>,
    footer: <div></div>,
  };

  beforeAll(() => {
    originalCreatePortal = ReactDOM.createPortal;
    ReactDOM.createPortal = (node) => node as ReactPortal;
  });

  afterAll(() => {
    ReactDOM.createPortal = originalCreatePortal;
  });

  it('Modal opened', () => {
    const tree = renderer.create(<Modal {...modalProps} isOpen={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Modal closed', () => {
    const tree = renderer.create(<Modal {...modalProps} isOpen={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Modal without footer', () => {
    const tree = renderer.create(<Modal {...modalProps} footer={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Modal with footer', () => {
    const tree = renderer.create(<Modal {...modalProps} footer={<div></div>} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
