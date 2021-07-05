import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from 'Containers/TextInput';

describe('Input test', () => {
  it('Input renders', () => {
    const tree = renderer.create(<TextInput onChange={() => void {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Input with error', () => {
    const tree = renderer.create(<TextInput onChange={() => void {}} error="error" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
