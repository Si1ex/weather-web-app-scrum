import renderer from 'react-test-renderer';
import SearchBar from '../components/SearchBar';
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
jest.mock('next/router', () => require('next-router-mock'));

describe('Search function test with Uppercase inpu', () => {
  // describes function describes what the module is when test are run.
  it('Open Search suggestions when clicked', () => {
    render(<SearchBar />);
    // check if all components are rendered
    expect(screen.getByTestId('default-search')).toBeInTheDocument();
    expect(screen.getByTestId('search-button')).toBeInTheDocument();

    const userInput = screen.getByTestId('default-search');
    const searchButton = screen.getByTestId('search-button');

    fireEvent.change(userInput, { target: { value: 'Kuopio' } }); //City search with proper input
    searchButton.click();
    // expect(mockRouter.push).toHaveBeenCalledWith(/hello/world/`${userInput}`)
    expect(mockRouter).toMatchObject({
      pathname: '/kaupunki/Kuopio',
    });
  });
});

describe('Search function test with lowercase input', () => {
  // describes function describes what the module is when test are run.
  it('Open Search suggestions when clicked', () => {
    render(<SearchBar />);
    // check if all components are rendered
    expect(screen.getByTestId('default-search')).toBeInTheDocument();
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
    const userInput = screen.getByTestId('default-search');
    const searchButton = screen.getByTestId('search-button');
    fireEvent.change(userInput, { target: { value: 'kuopio' } }); //City search with proper input
    searchButton.click();
    // expect(mockRouter.push).toHaveBeenCalledWith(/hello/world/`${userInput}`)
    expect(mockRouter).toMatchObject({
      pathname: '/kaupunki/Kuopio',
    });
  });
});
