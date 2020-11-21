import {DbService} from './db.service';
import {GET_REPOSITORY_ERROR, SELECT_DB_CONNECT} from '../constants';
import {Connection, getConnection, Repository} from 'typeorm';
import {Type} from '@nestjs/common';

export interface ConnectionService {
  onRequest?(): void;
}

export abstract class ConnectionService extends DbService {
  protected repositoryMap = new Map<Type<any>, Repository<any>>();

  private connection!: Connection;

  /**
   * override 默认不传递参数就是动态获取连接
   * @protected
   */
  protected constructor();
  protected constructor();
  protected constructor(...args: unknown[]) {
    super(...args);
  }

  protected onInit(...args: unknown[]) {
    this.addListener(SELECT_DB_CONNECT, (connectionName: string) => {
      this.connection = getConnection(connectionName);

      if (this.onRequest) {
        this.onRequest();
      }
    });
  }

  protected getRepository<T extends new () => T>(entity: T) {
    if (this.repositoryMap.has(entity)) {
      return this.repositoryMap.get(entity);
    }
    throw new Error(GET_REPOSITORY_ERROR);
  }

  protected getConnection() {
    return this.connection;
  }
}
