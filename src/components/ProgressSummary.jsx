import { Target, Trophy } from 'lucide-react';
import './ProgressSummary.css';

export default function ProgressSummary({ goals }) {
  const total = goals.length;
  const completed = goals.filter(g => g.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-summary">
      <div className="progress-stats">
        <div className="stat-box">
          <div className="stat-icon-wrapper blue">
            <Target size={24} />
          </div>
          <div className="stat-text">
            <span className="stat-value">{total}</span>
            <span className="stat-label">Total Goals</span>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon-wrapper green">
            <Trophy size={24} />
          </div>
          <div className="stat-text">
            <span className="stat-value">{completed}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="progress-text">{percentage}% Achieved</div>
    </div>
  );
}
