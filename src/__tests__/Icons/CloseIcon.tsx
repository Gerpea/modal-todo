import React from 'react';
import renderer from 'react-test-renderer';

import CloseIcon from 'Icons/CloseIcon';

describe('CloseIcon test', () => {
  it('CloseIcon renders', () => {
    const tree = renderer.create(<CloseIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
