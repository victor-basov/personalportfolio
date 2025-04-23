import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Topbar from '../components/topbar/Topbar';

// Mock the MUI icons
vi.mock('@mui/icons-material', () => ({
  Mail: () => <div data-testid="mail-icon" />,
  LinkedIn: () => <div data-testid="linkedin-icon" />,
  GitHub: () => <div data-testid="github-icon" />,
  PictureAsPdf: () => <div data-testid="pdf-icon" />
}));

// Mock MUI Button to better test its properties
vi.mock('@mui/material', () => ({
  Button: ({ children, startIcon, href, target, 'data-testid': dataTestId, className, size }) => (
    <a 
      href={href} 
      target={target} 
      data-testid={dataTestId} 
      data-size={size}
      className={className}
    >
      {startIcon}
      <span>{children}</span>
    </a>
  )
}));

describe('Topbar Component', () => {
  const mockSetMenuOpen = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  it('renders the logo and all buttons with icons', () => {
    render(<Topbar menuOpen={false} setMenuOpen={mockSetMenuOpen} />);
    
    // Check for logo
    expect(screen.getByText('victor.')).toBeInTheDocument();
    
    // Check for all icons
    expect(screen.getByTestId('pdf-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
  });
  
  it('toggles the menu when hamburger is clicked', () => {
    render(<Topbar menuOpen={false} setMenuOpen={mockSetMenuOpen} />);
    
    // Find and click the hamburger menu using the correct role and testid
    const hamburgerMenu = screen.getByTestId('hamburger');
    expect(hamburgerMenu).toHaveAttribute('role', 'hamburger');
    
    fireEvent.click(hamburgerMenu);
    
    // Check if the setMenuOpen was called with the opposite value
    expect(mockSetMenuOpen).toHaveBeenCalledWith(true);
  });
  
  it('applies "active" class when menu is open', () => {
    const { container } = render(<Topbar menuOpen={true} setMenuOpen={mockSetMenuOpen} />);
    
    // Check if the topbar has the active class
    const topbar = container.querySelector('.topbar');
    expect(topbar).toHaveClass('active');
  });
  
  it('contains buttons with correct hrefs and attributes', () => {
    render(<Topbar menuOpen={false} setMenuOpen={mockSetMenuOpen} />);
    
    // Check hrefs and attributes on buttons
    const resumeButton = screen.getByTestId('button1');
    expect(resumeButton).toHaveAttribute('href', 'https://pdfhost.io/v/Eje3axuz6_Victor_Basov_Winter_Resumedocx');
    expect(resumeButton).toHaveAttribute('target', '_blank');
    expect(resumeButton).toHaveAttribute('data-size', 'medium');
    
    const mailButton = screen.getByTestId('mail-button');
    expect(mailButton).toHaveAttribute('href', 'mailto: vbasov10@gmail.com');
    expect(mailButton).toHaveAttribute('target', '_blank');
    expect(mailButton).toHaveAttribute('data-size', 'medium');
    
    const linkedinButton = screen.getByTestId('linkedin-button');
    expect(linkedinButton).toHaveAttribute('href', 'https://www.linkedin.com/in/victorbasov/');
    expect(linkedinButton).toHaveAttribute('target', '_blank');
    expect(linkedinButton).toHaveAttribute('data-size', 'medium');
    
    const githubButton = screen.getByTestId('button4');
    expect(githubButton).toHaveAttribute('href', 'https://github.com/victor-basov');
    expect(githubButton).toHaveAttribute('target', '_blank');
    expect(githubButton).toHaveAttribute('data-size', 'medium');
  });
  
  it('renders all buttons with correct icon associations', () => {
    render(<Topbar menuOpen={false} setMenuOpen={mockSetMenuOpen} />);
    
    // Resume button should have PDF icon
    const resumeButton = screen.getByTestId('button1');
    expect(resumeButton).toContainElement(screen.getByTestId('pdf-icon'));
    
    // Mail button should have Mail icon
    const mailButton = screen.getByTestId('mail-button');
    expect(mailButton).toContainElement(screen.getByTestId('mail-icon'));
    
    // LinkedIn button should have LinkedIn icon
    const linkedinButton = screen.getByTestId('linkedin-button');
    expect(linkedinButton).toContainElement(screen.getByTestId('linkedin-icon'));
    
    // GitHub button should have GitHub icon
    const githubButton = screen.getByTestId('button4');
    expect(githubButton).toContainElement(screen.getByTestId('github-icon'));
  });
  
  it('has correct component structure with wrappers', () => {
    const { container } = render(<Topbar menuOpen={false} setMenuOpen={mockSetMenuOpen} />);
    
    // Check component structure
    expect(container.querySelector('.topbar')).toBeInTheDocument();
    expect(container.querySelector('.wrapper')).toBeInTheDocument();
    expect(container.querySelector('.left')).toBeInTheDocument();
    expect(container.querySelector('.right')).toBeInTheDocument();
    expect(container.querySelectorAll('.itemContainer').length).toBe(4);
  });
});

