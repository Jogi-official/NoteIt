# Feature Progress Side Bar

## Motivation

Feature progress is a crucial aspect of any project. It helps users track their progress for the current day, showing how many tasks are completed and remaining.

## Description

Our feature progress system enables users to track the status of various features across different projects, including their progress, upcoming milestones, and completed tasks.

## Design

```markdown
### Feature Progress Component

| **Feature**                  | **Progress**  |
| ---------------------------- | ------------- |
| UI                           | 100% Complete |
| Hook to Backend              | 100% Complete |
| Make progress Bar Functional | 0% Complete   |
```

## Requirements

- The progress bar should display today's task completion percentage relative to the total number of tasks assigned for the day.
- We can also add a backlog section to show tasks that are not assigned for today but are still pending.
- Can we give users the ability to shift the task date or time from any other date to today, updating the due date and time accordingly?

## Questions

- **Cron Job**: Can we add a cron job to automatically remove old tasks after a certain period? If yes, what would be an ideal schedule for running this cron job?
