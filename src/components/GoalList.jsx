import GoalItem from './GoalItem';
import './GoalList.css';

function GoalList({ goals, onToggle, onDelete }) {
    if (goals.length === 0) {
        return (
            <div className="empty-state">
                <p>No goals yet. Add one above to get started!</p>
            </div>
        );
    }

    return (
        <ul className="goal-list">
            {goals.map(goal => (
                <GoalItem
                    key={goal.id}
                    goal={goal}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default GoalList;
