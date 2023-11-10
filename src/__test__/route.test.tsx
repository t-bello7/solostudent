import { describe, test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { renderWithRouter } from '../utils';

describe('Test for routes', () => {
  test('Check Home route', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Dashboard')).toBeDefined();
  });

  // /login
  test('test Login Page', () => {
    renderWithRouter(<Login />);
    expect(screen.getByText('Login')).toBeDefined();
  });

  // / - Dashboardpage

  // /admin

  // /users

  // /adverts

  // /community

  // /site-settings

  // /static-pages

  // /seo-settings
});
// import { describe, test, expect } from "vitest";
// import Button from "../components/atoms/Button";
// import { screen, render  } from "@testing-library/react";

// const PrimaryButton = <Button />
// const SecondaryButton = <Button extraStyle={'bg-white text-priamryColor'}/>
// const Icon = <Button variant='icon' />
// const IconButton = <Button variant="iconButton"/>
// const DisabledButton  = <Button disabled />
// const LoadingButton = <Button loading={true} />

// describe ('Test for Button Component', () => {
//     // test if button has loading state and is disable
// // test if button is primary Button
// // test if Button as secondary
// // test if button is icon button;
// // test if button is disabled button;
//     test("test if button has primary Color", () => {
//         render(<PrimaryButton />)
//         const renderedButton = screen.getByRole('button')
//         expect(renderedButton).toHaveClass('bg-primaryColor')
//     })
//     test("button has secondary color", () => {
//         render(<SecondaryButton />)
//         const renderedButton = screen.getByRole('button')
//         expect(renderedButton).toHaveClass('bg-secondaryColor')
//     })
//     test("button is an icon", () => {
//         render(<IconButton />)
//         const renderedButton = screen.getByRole('button')
//         // check if button has img has children and //also text
//         expect(renderedButton).toHaveClass('bg-secondaryColor')
//     })
//     test("button is in loading state", () => {
//         render(<LoadingButton />)
//         const renderedButton = screen.getByRole('button')
//         expect(renderedButton).toBeDisabled()
//         expect(renderedButton).to
//     })
// })
// //
