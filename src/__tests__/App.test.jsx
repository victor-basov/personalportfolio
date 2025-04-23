import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from '../App';
import theme from '../theme';

// Create a mock implementation for Topbar that handles menuOpen prop
vi.mock('../components/topbar/Topbar', () => ({
  default: ({ menuOpen, setMenuOpen }) => (
    <div data-testid="topbar" data-menuopen={menuOpen}>
      Topbar Component
      <button 
        data-testid="toggle-menu-btn" 
        onClick={() => setMenuOpen(!menuOpen)}>
        Toggle Menu
      </button>
    </div>
  )
}));

// Mock Menu component with menuOpen prop
vi.mock('../components/menu/Menu', () => ({
  default: ({ menuOpen }) => (
    <div data-testid="menu" data-menuopen={menuOpen}>
      Menu Component
    </div>
  )
}));

// Mock the other components to simplify testing
vi.mock('../components/intro/Intro', () => ({
  default: () => <div data-testid="intro">Intro Component</div>
}));

vi.mock('../components/portfolio/Portfolio', () => ({
  default: () => <div data-testid="portfolio">Portfolio Component</div>
}));

vi.mock('../components/works/Works', () => ({
  default: () => <div data-testid="works">Works Component</div>
}));

// Mock ThemeProvider to test theme passing
vi.mock('@mui/material', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    ThemeProvider: ({ theme, children }) => (
      <div data-testid="theme-provider" data-theme={JSON.stringify(theme)}>
        {children}
      </div>
    ),
    CssBaseline: () => <div data-testid="css-baseline">CssBaseline</div>
  };
});

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all main components', () => {
    render(<App />);
    
    expect(screen.getByTestId('topbar')).toBeInTheDocument();
    expect(screen.getByTestId('menu')).toBeInTheDocument();
    expect(screen.getByTestId('intro')).toBeInTheDocument();
    expect(screen.getByTestId('portfolio')).toBeInTheDocument();
    expect(screen.getByTestId('works')).toBeInTheDocument();
  });

  it('contains ThemeProvider with correct theme', () => {
    render(<App />);
    
    const themeProvider = screen.getByTestId('theme-provider');
    expect(themeProvider).toBeInTheDocument();
    
    // Check that our custom theme is passed
    const providedTheme = JSON.parse(themeProvider.dataset.theme);
    expect(providedTheme).toBeTruthy();
    expect(providedTheme.palette).toBeTruthy();
  });
  
  it('includes CssBaseline for global style normalization', () => {
    render(<App />);
    expect(screen.getByTestId('css-baseline')).toBeInTheDocument();
  });
  
  it('maintains app structure with proper classes', () => {
    const { container } = render(<App />);
    
    // Check for the app's main structure
    expect(container.querySelector('.app')).toBeInTheDocument();
    expect(container.querySelector('.sections')).toBeInTheDocument();
  });
  
  it('toggles menu state when topbar button is clicked', () => {
    render(<App />);
    
    // Initially menu should be closed
    expect(screen.getByTestId('topbar').dataset.menuopen).toBe('false');
    expect(screen.getByTestId('menu').dataset.menuopen).toBe('false');
    
    // Click the toggle button in topbar
    fireEvent.click(screen.getByTestId('toggle-menu-btn'));
    
    // Menu should now be open
    expect(screen.getByTestId('topbar').dataset.menuopen).toBe('true');
    expect(screen.getByTestId('menu').dataset.menuopen).toBe('true');
    
    // Click again to close
    fireEvent.click(screen.getByTestId('toggle-menu-btn'));
    
    // Menu should be closed again
    expect(screen.getByTestId('topbar').dataset.menuopen).toBe('false');
    expect(screen.getByTestId('menu').dataset.menuopen).toBe('false');
  });
});

