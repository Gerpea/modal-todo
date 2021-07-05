import React from 'react';
import renderer from 'react-test-renderer';

import InfoIcon from 'Icons/InfoIcon';

describe('InfoIcon test', () => {
  it('InfoIcon renders', () => {
    const tree = renderer.create(<InfoIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
