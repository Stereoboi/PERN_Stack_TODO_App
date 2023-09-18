import { APP_KEYS } from '../common/consts';
import { HttpService } from './http';
import { IUser } from '../common/types/user.types';

export class UserService extends HttpService {
  async registerUser(registerData: IUser) {
    const { data } = await this.post({
      url: `${APP_KEYS.QUERY_KEYS.USER}/${APP_KEYS.ROUTER_KEYS.REGISTER}`,
      data: registerData
    });
    return data;
  }

  async loginUser(user: IUser) {
    const { data } = await this.post({
      url: `${APP_KEYS.QUERY_KEYS.USER}/${APP_KEYS.ROUTER_KEYS.LOGIN}`,
      data: user
    });
    return data;
  }

  async logOutUser() {
    const { data } = await this.delete({
      url: `${APP_KEYS.QUERY_KEYS.USER}/${APP_KEYS.ROUTER_KEYS.LOGOUT}`
    });
    return data;
  }

  async getStatus() {
    const { data } = await this.get({
      url: `${APP_KEYS.QUERY_KEYS.USER}/${APP_KEYS.ROUTER_KEYS.STATUS}`
    });
    return data;
  }

  async changePassword(user: IUser) {
    const { data } = await this.post({
      url: `${APP_KEYS.QUERY_KEYS.USER}/${APP_KEYS.ROUTER_KEYS.UPDATE}`,
      data: user
    });
    return data;
  }
}

export const apiUser = new UserService();
