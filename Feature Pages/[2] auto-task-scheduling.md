# Feature: Smart Task Scheduling & Auto-Prioritization

## Motivation

Users often struggle to decide which tasks to focus on, especially when they have multiple pending or overdue tasks. A smart scheduling system helps reduce decision fatigue by automatically suggesting the most important tasks for the day.

## Description

The Smart Task Scheduling feature intelligently selects and prioritizes tasks for the user based on due dates, priority levels, and task status. It ensures that overdue and high-priority tasks are not missed while keeping the daily workload manageable.

## Design

### Smart Scheduling System

| **Task**      | **Due Date** | **Priority** | **Status** | **Suggested For Today** |
| ------------- | ------------ | ------------ | ---------- | ----------------------- |
| Learn Node    | Today        | High         | Pending    | ✅ Yes                  |
| Gym           | Tomorrow     | Medium       | Pending    | ❌ No                   |
| Project Work  | Overdue      | High         | Pending    | ✅ Yes (Auto-picked)    |
| Buy Groceries | No Date      | Low          | Pending    | ❌ No                   |

## Requirements

- Automatically categorize tasks into:
  - Today
  - Upcoming
  - Backlog (Overdue)

- Add a feature to suggest tasks for the day:
  - Limit suggestions to top 3–5 tasks

- Priority logic:
  - Overdue tasks → Highest priority
  - Tasks due today → Medium priority
  - Future tasks → Lower priority

- Allow users to:
  - Accept suggested tasks
  - Manually override suggestions

- Visual indicators:
  - 🔴 Overdue
  - 🟡 Today
  - 🟢 Upcoming

## Implementation Logic

```ts
function getSuggestedTasks(tasks) {
  return tasks
    .filter((task) => !task.completed)
    .sort((a, b) => {
      // Overdue first
      if (a.isOverdue && !b.isOverdue) return -1;
      if (!a.isOverdue && b.isOverdue) return 1;

      // Then by priority
      const priorityMap = { high: 3, medium: 2, low: 1 };
      return priorityMap[b.priority] - priorityMap[a.priority];
    })
    .slice(0, 5);
}
```
