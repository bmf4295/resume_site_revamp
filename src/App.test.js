import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    window.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  test('renders navbar', () => {
    render(<App />);
    const navElement = screen.getByTestId('navbar');
    expect(navElement).toBeInTheDocument();
  });

  test('renders home section', () => {
    render(<App />);
    const welcomeText = screen.getByTestId('home');
    expect(welcomeText).toBeInTheDocument();
  });

  test('renders about section', () => {
    render(<App />);
    const aboutHeading = screen.getByTestId('aboutMe');
    expect(aboutHeading).toBeInTheDocument();
  });

  test('renders experience section', () => {
    render(<App />);
    const experienceHeading = screen.getByTestId('workExperience');
    expect(experienceHeading).toBeInTheDocument();
  });

  test('renders skills section', () => {
    render(<App />);
    const skillsHeading = screen.getByTestId('skills');
    expect(skillsHeading).toBeInTheDocument();
  });

  test('renders contact section', () => {
    render(<App />);
    const contactHeading = screen.getByTestId('contact');
    expect(contactHeading).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(<App />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

   test('renders job card', () => {
    render(<App />);
    const jobCard = screen.getAllByTestId('jobCard');
    expect(jobCard[0]).toBeInTheDocument();
  });
   test('renders skill bar', () => {
    render(<App />);
    const skillBar = screen.getAllByTestId('skillBar');
    expect(skillBar[0]).toBeInTheDocument();
  });
});
