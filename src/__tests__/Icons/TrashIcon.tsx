import React from 'react';
import renderer from 'react-test-renderer';

import TrashIcon from 'Icons/TrashIcon';

describe('TrashIcon test', () => {
  it('TrashIcon renders', () => {
    const tree = renderer.create(<TrashIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
