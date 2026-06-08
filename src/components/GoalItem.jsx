import { useState } from 'react';
import { TrendingUp, Book, CheckCircle, Trash2, Edit3, X, Check } from 'lucide-react';
import './GoalItem.css';

export default function GoalItem({ goal, onToggle, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(goal.text);

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

  const saveEdit = () => {
    const trimmed = editText.trim();
    if (!trimmed) return setEditText(goal.text);
    if (onUpdate) onUpdate(goal.id, { text: trimmed });
    setEditing(false);
  };

  const cancelEdit = () => {
    setEditText(goal.text);
    setEditing(false);
  };

  return (
    <li className={`goal-card ${goal.completed ? 'completed' : ''}`}>
      <div className={`goal-icon-box ${iconClass}`} onClick={() => onToggle(goal.id)}>
        <Icon size={20} />
      </div>

      <div className="goal-card-content">
        {editing ? (
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              className="goal-edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button className="icon-btn" onClick={saveEdit} title="Save">
              <Check size={16} />
            </button>
            <button className="icon-btn" onClick={cancelEdit} title="Cancel">
              <X size={16} />
            </button>
          </div>
        ) : (
          <>
            <h4 className="goal-card-title">{goal.text}</h4>
            <p className="goal-card-deadline">
              {goal.completed ? 'COMPLETED' : `Deadline: ${goal.deadline || 'Someday'}`}
            </p>
          </>
        )}
      </div>

      <div className="goal-actions">
        {!editing && (
          <button className="icon-btn" onClick={() => setEditing(true)} title="Edit">
            <Edit3 size={16} />
          </button>
        )}

        {!goal.completed && (
          <button className="mark-complete-btn" onClick={() => onToggle(goal.id)} title="Mark as complete">
            <Check size={14} />
            <span className="mc-label">Complete</span>
          </button>
        )}

        <button className="goal-delete-btn" onClick={() => onDelete(goal.id)} title="Delete">
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
}
