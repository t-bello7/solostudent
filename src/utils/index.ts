import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import type {
  OverviewCardInt,
  IconInt,
  OverviewChartInt,
  HeadingInt,
} from './types';

const renderWithRouter = (ui: ReactElement<string>, { route = '/' } = {}) => {
  // if (window !== undefined) {
  window.history.pushState({}, 'Test page', route);
  // }

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export {
  renderWithRouter,
  OverviewCardInt,
  IconInt,
  OverviewChartInt,
  HeadingInt,
};
