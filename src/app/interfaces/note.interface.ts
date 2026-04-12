export interface Note {
  title: string;
  content: string;
  createdAt: Date;
  _id: string;
  completed?: boolean;
  backlog?: boolean;
  priority: Priority;
  dueDate?: Date;
}

type Priority = 'low' | 'medium' | 'high';
