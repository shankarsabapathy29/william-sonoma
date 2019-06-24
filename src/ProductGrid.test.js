import React from 'react';
import {render } from '@testing-library/react';
import Config from './Config';
import ProductGrid from './ProductGrid';
import ProductMock from '../mocks/productsMock.json';
import { shallow, mount } from 'enzyme';
import "regenerator-runtime/runtime";


it('product grid endpoint empty', () => {
  const { getByText } = render(<ProductGrid productEndPoint = '' />,);
  expect(getByText(Config.noProductMessage.message)).toBeTruthy();
});

it('product grid wrong endpoints', () => {
  const { getByText } = render(<ProductGrid productEndPoint = {Config.productEndPoint + "asdf"} />,);
  expect(getByText(Config.noProductMessage.message)).toBeTruthy();
});
it('product grid valid products displayed', async () => {
  beforeEach(() => {
      fetch.resetMocks()
    });
  fetch.mockResponseOnce(ProductMock);

  const spyMount = jest.spyOn(ProductGrid.prototype, 'componentDidMount');

  const wrapper =  mount(<ProductGrid productEndPoint = {Config.productEndPoint} />);
  await wrapper.instance().componentDidMount();
  expect(spyMount).toHaveBeenCalled();

  expect(wrapper.contains(Config.noProductMessage.message)).toBeFalsy();
});