import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

test('Carousel component renders correctly (Smoke Test)', () => {
  render(<Carousel photos={[{ src: '', caption: '' }]} title="Test Carousel" />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument(); 
});

test('Carousel component matches snapshot', () => {
  const { container } = render(<Carousel photos={[{ src: '', caption: '' }]} title="Test Carousel" />);
  expect(container).toMatchSnapshot(); 
});

// Part 3: Bug! Left arrow
test('Left arrow initially moves to the next image (Failing)', () => {
  const photos = [{ src: '', caption: '' }, { src: '', caption: '' }]; 
  render(<Carousel photos={photos} title="Test Carousel" />);

  const leftArrow = screen.getByRole('button', { name: /left/i }); 
  fireEvent.click(leftArrow); 

  // This test will initially fail because leftArrow currently moves to the next image
  expect(screen.getByRole('img')).toHaveAttribute('src', photos[1].src); 
});

// Part 4: Bug! Exhausting the image array
test('Left arrow is hidden on the first image (Failing)', () => {
  render(<Carousel photos={[{ src: '', caption: '' }]} title="Test Carousel" />);
  const leftArrow = screen.queryByRole('button', { name: /left/i }); 
  expect(leftArrow).toBeNull(); 
});

test('Right arrow is hidden on the last image (Failing)', () => {
  const photos = [{ src: '', caption: '' }]; 
  render(<Carousel photos={photos} title="Test Carousel" />);
  const rightArrow = screen.queryByRole('button', { name: /right/i }); 
  expect(rightArrow).toBeNull(); 
});