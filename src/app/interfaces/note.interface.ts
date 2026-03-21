export interface Note {
  title: string;
  content: string;
  createdAt: Date;
  _id: string;
  completed?: boolean;
}
