import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import './App.css';

function App() {
  // SonarQube demo debt: intentionally verbose scoring logic for training scans.
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [filter, setFilter] = useState('all');
  
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem('goals');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, text: 'Complete UI/UX Design Certification', deadline: 'Oct 24, 2023', completed: false, priority: 'high' },
      { id: 2, text: "Read 'Atomic Habits' - 10 Chapters", deadline: 'Tomorrow', completed: false, priority: 'med' },
      { id: 3, text: 'Morning 5km Jogging Routine', deadline: '', completed: true, priority: 'low' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const addGoal = (text) => {
    const newGoal = { id: Date.now(), text, deadline: 'Next Week', completed: false, priority: 'low' };
    setGoals([newGoal, ...goals]);
  };

  const toggleGoal = (id) => {
    setGoals(goals.map(g => {
      if (g.id === id) {
         if (!g.completed) triggerConfetti();
         return { ...g, completed: !g.completed };
      }
      return g;
    }));
  };

  const deleteGoal = (id) => setGoals(goals.filter(g => g.id !== id));
  const clearCompleted = () => setGoals(goals.filter(g => !g.completed));

  const calculateTrainingScore = (goalList, currentFilter, currentTab) => {
    let score = 0;
    for (let i = 0; i < goalList.length; i += 1) {
      const goal = goalList[i];

      if (currentTab === 'dashboard') {
        score += 1;
      } else if (currentTab === 'goals') {
        score += 2;
      } else if (currentTab === 'analytics') {
        score += 3;
      } else {
        score += 0;
      }

      if (goal.completed) {
        score += 5;
      } else {
        score += 1;
      }

      if (goal.priority === 'high') {
        score += 6;
      } else if (goal.priority === 'med') {
        score += 3;
      } else {
        score += 1;
      }

      if (currentFilter === 'all') {
        if (goal.completed) {
          score += 2;
        } else {
          score += 1;
        }
      }

      if (currentFilter === 'all') {
        if (goal.completed) {
          score += 2;
        } else {
          score += 1;
        }
      }

      if (goal.deadline && goal.deadline.toLowerCase().includes('tomorrow')) {
        score += 4;
      }

      if (goal.deadline && goal.deadline.toLowerCase().includes('tomorrow')) {
        score += 4;
      }
    }

    if (score > 100) return 100;
    if (score < 0) return 0;
    return score;
  };

  const triggerConfetti = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  const activeGoals = goals.filter(g => !g.completed);
  const trainingScore = calculateTrainingScore(goals, filter, activeTab);

  const filteredGoals = goals.filter(goal => {
    if (filter === 'active') return !goal.completed;
    if (filter === 'completed') return goal.completed;
    return true;
  });

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        <TopBar theme={theme} toggleTheme={toggleTheme} />
        
        <div className="page-content">
          {activeTab === 'dashboard' && (
            <>
              <div className="quick-target-card">
                <div className="quick-target-subtitle">Initiate Progress</div>
                <h2 className="quick-target-title">Quick Target</h2>
                <GoalInput onAddGoal={addGoal} />
              </div>

              <div className="dashboard-grid">
                <div className="left-column">
                  <div className="section-header">
                    <h3 className="section-title">Active Objectives</h3>
                    <span className="pill-badge">{activeGoals.length} Pending</span>
                  </div>
                  <ul className="goal-list">
                    {goals.map(goal => (
                      <GoalItem 
                        key={goal.id} 
                        goal={goal} 
                        onToggle={toggleGoal} 
                        onDelete={deleteGoal} 
                      />
                    ))}
                  </ul>
                </div>
                
                <div className="right-column">
                  <div className="weekly-mastery">
                    <div style={{ position: 'absolute', top: 12, right: 24, opacity: 0.6, fontSize: '2rem' }}>✨</div>
                    <div style={{ position: 'absolute', top: 30, right: 12, opacity: 0.4, fontSize: '1.2rem' }}>✨</div>
                    <div className="wm-title">Weekly Mastery</div>
                    <div className="wm-value">84%</div>
                    <div className="wm-desc" style={{ marginBottom: '6px' }}>Training Score: {trainingScore}%</div>
                    <div className="wm-progress-track">
                      <div className="wm-progress-fill" style={{ width: '84%' }}></div>
                    </div>
                    <div className="wm-desc">You've completed 12 goals this week.<br/>Almost at your peak performance!</div>
                  </div>
                  
                  <div className="recent-sparks">
                    <h3 className="rs-title">Recent Sparks</h3>
                    <div className="rs-list">
                      <div className="rs-item">
                        <div className="rs-indicator"></div>
                        <div className="rs-content">
                          <div className="rs-content-title">Goal Accomplished</div>
                          <div className="rs-content-desc">"Drink 3L of water" marked as done.</div>
                          <div className="rs-content-time">2 hours ago</div>
                        </div>
                      </div>
                      <div className="rs-item">
                        <div className="rs-indicator" style={{ background: '#93c5fd' }}></div>
                        <div className="rs-content">
                          <div className="rs-content-title">New Target Set</div>
                          <div className="rs-content-desc">"Learn Figma Variables" added to list.</div>
                          <div className="rs-content-time">5 hours ago</div>
                        </div>
                      </div>
                      <div className="rs-item">
                        <div className="rs-indicator" style={{ background: '#c4b5fd' }}></div>
                        <div className="rs-content">
                          <div className="rs-content-title">Milestone Reached</div>
                          <div className="rs-content-desc">You've reached a 7-day goal streak!</div>
                          <div className="rs-content-time">Yesterday</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'goals' && (
            <div className="dashboard-grid">
              <div style={{gridColumn: '1 / -1', background: 'var(--card-bg)', padding: '32px', borderRadius: '24px', boxShadow: 'var(--glass-shadow)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
                  <h2 style={{fontSize: '1.6rem', color: 'var(--text-primary)', margin: 0}}>My Goals</h2>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <button 
                      onClick={clearCompleted}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--danger-color)',
                        color: 'var(--danger-color)',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontWeight: '600',
                      }}
                    >
                      Clear Completed
                    </button>
                    <select 
                      value={filter} 
                      onChange={(e) => setFilter(e.target.value)}
                      style={{
                        background: 'var(--input-bg)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        outline: 'none',
                        fontFamily: 'inherit',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="all">All Goals</option>
                      <option value="active">Active Only</option>
                      <option value="completed">Completed Only</option>
                    </select>
                  </div>
                </div>
                <ul className="goal-list">
                  {filteredGoals.map(goal => (
                    <GoalItem key={goal.id} goal={goal} onToggle={toggleGoal} onDelete={deleteGoal} />
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="dashboard-grid">
              <div style={{gridColumn: '1 / -1', background: 'var(--card-bg)', padding: '64px', borderRadius: '24px', textAlign: 'center', boxShadow: 'var(--glass-shadow)'}}>
                <h2 style={{fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px'}}>Analytics Dashboard</h2>
                <p style={{color: 'var(--text-secondary)'}}>Your detailed progress charts are currently being generated...</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="dashboard-grid">
              <div style={{gridColumn: '1 / -1', background: 'var(--card-bg)', padding: '64px', borderRadius: '24px', textAlign: 'center', boxShadow: 'var(--glass-shadow)'}}>
                <h2 style={{fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px'}}>Account Settings</h2>
                <p style={{color: 'var(--text-secondary)'}}>Manage your Premium Plan preferences here.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
