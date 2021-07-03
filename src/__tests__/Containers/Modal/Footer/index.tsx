import React from 'react';
import renderer from 'react-test-renderer';

import Footer from 'Containers/Modal/Footer';

describe('ModalFooter test', () => {
  it('Footer renders', () => {
    const tree = renderer.create(<Footer>footer</Footer>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
