import { LayoutDashboard, CheckCircle2, BarChart2, Settings, HelpCircle } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { id: 'goals', icon: <CheckCircle2 size={20} />, label: 'My Goals' },
    { id: 'analytics', icon: <BarChart2 size={20} />, label: 'Analytics' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">
          <div className="inner-circle"></div>
        </div>
        <h2>Mera Lakshya</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button 
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-bottom">
        <div className="user-profile">
          <img src="https://ui-avatars.com/api/?name=Desi+Achiever&background=4f46e5&color=fff" alt="User" className="avatar" />
          <div className="user-info">
            <span className="user-name">Desi Achiever</span>
            <span className="user-plan">Premium Plan</span>
          </div>
        </div>
        
        <button className="help-btn">
          <HelpCircle size={20} />
          <span>Help Center</span>
        </button>
      </div>
    </aside>
  );
}
