import { TrendingUp, Book, CheckCircle, Trash2 } from 'lucide-react';
import './GoalItem.css';

export default function GoalItem({ goal, onToggle, onDelete }) {
  const isDesign = goal.text.toLowerCase().includes('design');
  const isBook = goal.text.toLowerCase().includes('read') || goal.text.toLowerCase().includes('book');

  let Icon = CheckCircle;
  let iconClass = "icon-green";
  
  if (isDesign) {
    Icon = TrendingUp;
    iconClass = "icon-blue";
  } else if (isBook) {
    Icon = Book;
    iconClass = "icon-purple";
  }

  if (goal.completed) {
    Icon = CheckCircle;
    iconClass = "icon-green";
  }

  return (
    <li className={`goal-card ${goal.completed ? 'completed' : ''}`}>
      <div className={`goal-icon-box ${iconClass}`} onClick={() => onToggle(goal.id)}>
        <Icon size={20} />
      </div>
      
      <div className="goal-card-content">
        <h4 className="goal-card-title">{goal.text}</h4>
        <p className="goal-card-deadline">
          {goal.completed ? 'COMPLETED' : `Deadline: ${goal.deadline || 'Someday'}`}
        </p>
      </div>
      
      {goal.completed && (
        <button className="goal-delete-btn" onClick={() => onDelete(goal.id)}>
          <Trash2 size={18} />
        </button>
      )}
    </li>
  );
}
