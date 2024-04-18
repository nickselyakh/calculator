import { makeAutoObservable } from 'mobx'

export class HistoryStore {
  history: string[] = []

  constructor() {
    makeAutoObservable(this)
  }

  push = (value: string): void => {
    this.history.push(value)
  }

  clear = (): void => {
    this.history = []
  }
}
