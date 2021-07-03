import React from 'react';
import renderer from 'react-test-renderer';

import Header from 'Containers/Modal/Header';

describe('ModalHeader test', () => {
  it('Header renders', () => {
    const tree = renderer.create(<Header>Header</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
