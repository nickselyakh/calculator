import { CalculatorStore } from './CalculatorStore'
import { HistoryStore } from './HistoryStore'

export class RootStore {
  calculatorStore: CalculatorStore
  historyStore: HistoryStore

  constructor() {
    this.historyStore = new HistoryStore()
    this.calculatorStore = new CalculatorStore(this.historyStore)
  }
}

export const store = new RootStore()
