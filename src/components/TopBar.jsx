import { useState } from 'react';
import { Bell, Search, Moon, Sun } from 'lucide-react';
import './TopBar.css';

export default function TopBar({ theme, toggleTheme }) {
  const [showNotifs, setShowNotifs] = useState(false);
  
  const notifications = [
    { id: 1, text: `Shabash! Tumne naye goals complete kiye hain.`, time: 'Just now' },
    { id: 2, text: 'Aag laga di! Aise hi machate raho. 🔥', time: 'Today' },
  ];

  return (
    <header className="top-bar">
      <h1 className="topbar-title">Dashboard</h1>
      
      <div className="topbar-right">
        <div className="search-box">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search tasks..." />
        </div>
        
        <div className="topbar-icons">
          <div style={{ position: 'relative' }}>
            <button className="icon-btn" onClick={() => setShowNotifs(!showNotifs)}>
              <Bell size={20} />
            </button>
            {showNotifs && (
              <div style={{
                position: 'absolute', top: '100%', right: 0, width: '280px',
                background: 'var(--card-bg)', border: '1px solid var(--border-color)',
                borderRadius: '12px', padding: '16px', boxShadow: 'var(--glass-shadow)', zIndex: 100
              }}>
                <h4 style={{marginBottom: '12px'}}>Notifications</h4>
                {notifications.map(n => (
                  <div key={n.id} style={{marginBottom: '8px', fontSize: '0.9rem'}}>
                    {n.text} <br/><small style={{color: 'var(--text-secondary)'}}>{n.time}</small>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="icon-btn" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        <button className="new-goal-btn">
          New Goal
        </button>
      </div>
    </header>
  );
}
