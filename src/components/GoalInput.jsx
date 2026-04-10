import { useState } from 'react';
import { Plus } from 'lucide-react';
import './GoalInput.css';

export default function GoalInput({ onAddGoal }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddGoal(text);
    setText('');
  };

  return (
    <form className="quick-add-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="What's your next goal?" 
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit" className="qa-btn">
        <Plus size={18} />
        Add Goal
      </button>
    </form>
  );
}
