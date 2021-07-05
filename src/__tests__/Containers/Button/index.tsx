import React from 'react';
import renderer from 'react-test-renderer';

import Button from 'Containers/Button';

describe('Button test', () => {
  it('Button success', () => {
    const tree = renderer
      .create(
        <Button type="success" onClick={() => void {}}>
          success
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Button danger close', () => {
    const tree = renderer
      .create(
        <Button type="danger" onClick={() => void {}}>
          danger
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
