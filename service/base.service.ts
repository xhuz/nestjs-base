import {EventEmitter} from 'events';

export abstract class BaseService extends EventEmitter {
  protected constructor(...args: unknown[]) {
    super();
    this.onInit(...args);
  }

  protected abstract onInit(...args: unknown[]): void;
}
