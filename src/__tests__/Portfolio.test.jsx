import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Portfolio from '../components/portfolio/Portfolio';

// Mock the featuredPortfolio data
vi.mock('../../data', () => ({
  featuredPortfolio: [
    {
      id: 1,
      title: 'Test Project 1',
      img: 'test1.jpg',
      githublink: 'https://github.com/test1',
      linktoproject: 'https://test1.com'
    },
    {
      id: 2,
      title: 'Test Project 2',
      img: 'test2.jpg',
      githublink: 'https://github.com/test2',
      linktoproject: 'https://test2.com'
    }
  ]
}));

// Mock the MUI icons
vi.mock('@mui/icons-material', () => ({
  Link: () => <div data-testid="link-icon" />,
  GitHub: () => <div data-testid="github-icon" />
}));

// Mock the PortfolioList component
vi.mock('../components/portfolioList/PortfolioList', () => ({
  default: ({ title, active, setSelected, id }) => (
    <li
      data-testid="portfolio-list-item"
      data-active={active}
      data-id={id}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}));

describe('Portfolio Component', () => {
  it('renders portfolio heading', () => {
    render(<Portfolio />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('renders portfolio list items', () => {
    render(<Portfolio />);
    const listItems = screen.getAllByTestId('portfolio-list-item');
    expect(listItems.length).toBeGreaterThan(0);

    // Check for the featured item
    const featuredItem = screen.getByText('Featured');
    expect(featuredItem).toBeInTheDocument();
  });

  it('renders portfolio items with correct data', () => {
    render(<Portfolio />);
    
    // Check for project titles
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
    
    // Check for images
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(2);
    
    // Check for GitHub buttons
    const githubIcons = screen.getAllByTestId('github-icon');
    expect(githubIcons.length).toBe(2);
    
    // Check for link buttons
    const linkIcons = screen.getAllByTestId('link-icon');
    expect(linkIcons.length).toBe(2);
  });

  it('has correct links for GitHub and project links', () => {
    render(<Portfolio />);
    
    // Get all GitHub buttons and check their hrefs
    const githubButtons = screen.getAllByTestId('github-button');
    expect(githubButtons[0]).toHaveAttribute('href', 'https://github.com/test1');
    expect(githubButtons[1]).toHaveAttribute('href', 'https://github.com/test2');
    
    // Get all project link buttons and check their hrefs
    const linkButtons = screen.getAllByTestId('project-link-button');
    expect(linkButtons[0]).toHaveAttribute('href', 'https://test1.com');
    expect(linkButtons[1]).toHaveAttribute('href', 'https://test2.com');
  });
});

