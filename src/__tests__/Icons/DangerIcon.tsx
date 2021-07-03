import React from 'react';
import renderer from 'react-test-renderer';

import DangerIcon from 'Icons/DangerIcon';

describe('DangerIcon test', () => {
  it('DangerIcon renders', () => {
    const tree = renderer.create(<DangerIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
