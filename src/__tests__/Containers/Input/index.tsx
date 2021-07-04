import React from 'react';
import renderer from 'react-test-renderer';

import Input from 'Containers/Input';

describe('Input test', () => {
  it('Input renders', () => {
    const tree = renderer.create(<Input onChange={() => void {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
