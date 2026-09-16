import { signal, WritableSignal } from '@angular/core';

export abstract class StoreService<T> {
  public abstract initalValue(): T;
  private _store: WritableSignal<T> = signal(this.initalValue());

  get store(): WritableSignal<T> {
    return this._store;
  }

  set store(value: WritableSignal<T>) {
    this._store = value;
  }
}
