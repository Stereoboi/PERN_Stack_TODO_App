import { HttpService } from './http';
import { APP_KEYS } from '../common/consts';

export class TodoService extends HttpService {
  async getAllTodo({ key }: { key: string }) {
    const { data } = await this.get({
      url: key
    });
    return data;
  }

  async postTodo(newTodo: any) {
    const { data } = await this.post({
      url: APP_KEYS.QUERY_KEYS.TODO_CREATE,
      data: newTodo
    });
    return data;
  }

  async getTodoById(idTodo: number) {
    const { data } = await this.get({
      url: `${APP_KEYS.QUERY_KEYS.TODOS}/${idTodo}`
    });
    return data;
  }

  async updateTodoById(idTodo: number, todo: any) {
    const { data } = await this.put({
      url: `${APP_KEYS.QUERY_KEYS.TODO_UPDATE}/${idTodo}`,
      data: todo
    });
    return data;
  }

  async deleteTodoById(idTodo: number) {
    const { data } = await this.delete({
      url: `${APP_KEYS.QUERY_KEYS.TODO_DELETE}/${idTodo}`
    });
    return data;
  }
}

export const apiTodo = new TodoService();
