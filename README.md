# T. A. S. K Master: Task Assignment and Scheduling Kit

T.A.S.K Master is a web-based task management application designed to help university students manage their tasks and assignments effectively. By utilizing a combination of Greedy-Heuristic algorithms and the Weighted Sum Model (WSM), this application prioritizes tasks based on deadlines, complexities, and required efforts to enhance productivity and reduce stress.

## Getting Started
1. Insert necessary details to the respective fields such as Task Name (string), Deadline (date), Complexity Level (int) and Effort Level (int).
2. Press 'Add Task' button to add the information to the list of tasks below.
3. To sort the list of tasks, press the 'Prioritize' button. The sorted list of tasks will appear in the right panel of the web app, from high priority to low.

## Features
**Priority Scoring**: Assigns scores to tasks based on deadlines and other criteria to determine their urgency and importance.

**Task Sorting**: Uses a Greedy Algorithm to sort tasks by their priority scores, ensuring that the most critical tasks are addressed first.

**Web-Based Interface**: Accessible through any web browser, providing a user-friendly and convenient way to manage tasks.

## Usage
**Add Tasks**: Enter the details of your tasks, including the deadline, complexity, and effort required.

![image](https://github.com/Aerrind/task-manager/assets/117252398/575369b2-e183-4828-9835-5aa5f3efd355)

**Priority List**: The application will display a sorted list of tasks based on their priority scores.

```
 function calculatePriority(task) {
        const today = new Date();
        const timeDiff = task.deadline - today;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert time difference to days
        const deadlineScore = getDeadlineScore(daysLeft);
        return ((0.30 * deadlineScore) + (0.50 * task.complexity) + (0.20 * task.effort)) / 3;
    }
```

**Update Tasks**: Modify task details as needed and the application will re-prioritize the list accordingly.

**Delete**: Remove tasks from the list.

## Algorithm Details
**Heuristic**
- Deadline Score Calculation: Assigns scores to tasks based on the number of days remaining until the deadline.
- Display Priority: Determines how tasks are shown, with the highest priority tasks shown first.

**Greedy Algorithm**
- Sorting by Priority Score: Prioritizes tasks due today and tomorrow, and then sorts the remaining tasks based on their priority scores.

**Weighted Sum Model**
- Task Scoring: Assigns weights to tasks based on criteria like deadline, task complexity, and effort required. The Greedy Algorithm then selects the task with the highest score.

## Authors
- Bukas Manuelle Alexie - *manuelle.alexieb@gmail.com*
- Vince Gabrielle Lita - *vincegabriellelita@gmail.com*
- Marcos Carl Ernard - *marcoscarlernard@gmail.com*
