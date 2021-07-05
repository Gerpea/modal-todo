import React from 'react';
import renderer from 'react-test-renderer';

import PencilIcon from 'Icons/PencilIcon';

describe('PencilIcon test', () => {
  it('PencilIcon renders', () => {
    const tree = renderer.create(<PencilIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
