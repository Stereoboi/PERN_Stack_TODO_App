import { TodoItem } from './get.all.type';

interface TodoFormProps {
  data?: TodoItem;
  handleClose: () => void;
  action: string;
}

export type { TodoFormProps };
