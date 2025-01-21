import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card component renders correctly (Smoke Test)', () => {
  render(
    <Card 
      src="https://example.com/image.jpg" 
      caption="Test Image" 
      currNum={1} 
      totalNum={5} 
    />
  );
  expect(screen.getByRole('img')).toBeInTheDocument(); 
});

test('Card component matches snapshot', () => {
  const { container } = render(
    <Card 
      src="https://example.com/image.jpg" 
      caption="Test Image" 
      currNum={1} 
      totalNum={5} 
    />
  );
  expect(container).toMatchSnapshot(); 
});