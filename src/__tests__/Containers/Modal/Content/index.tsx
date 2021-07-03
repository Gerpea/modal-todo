import React from 'react';
import renderer from 'react-test-renderer';

import Content from 'Containers/Modal/Content';

describe('ModalContent test', () => {
  it('Content renders', () => {
    const tree = renderer.create(<Content>content</Content>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
