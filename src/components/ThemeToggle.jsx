import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Theme" aria-label="Toggle Theme">
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
