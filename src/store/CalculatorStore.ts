import { makeAutoObservable } from 'mobx'

import { HistoryStore } from './HistoryStore'

const SIGNS = ['%', '-', 'X', '÷', '+', '(', ')']

export class CalculatorStore {
  historyStore: HistoryStore
  operation: string = ''
  error: string | null = null

  private bracketSwitch = false
  private lastNumber = ''

  constructor(historyStore: HistoryStore) {
    makeAutoObservable(this)
    this.historyStore = historyStore
  }

  addNumber = (value: string): void => {
    if (this.operation.split(/[%()X÷+]/g).some((item) => item.length > 16)) {
      this.error = 'Value is too long'
    } else {
      this.operation += value
      this.lastNumber += value
    }
  }

  convertToDecimal = (): void => {
    const chunks = this.operation.split(/[%-X÷+()]/g)

    if (!chunks[chunks.length - 1].includes('.')) {
      this.operation += '.'
      this.lastNumber += '.'
    }
  }

  addSign = (value: string): void => {
    if (this.operation && !SIGNS.includes(this.operation.charAt(this.operation.length - 1))) {
      this.operation += value

      this.lastNumber = value === '-' ? '-' : ''
    }
  }

  calculateResult = (): void => {
    if (this.operation) {
      try {
        this.historyStore.push(`${this.operation}=${eval(this.operation.replace(/X/g, '*').replace(/÷/g, '/'))}`)
        this.reset()
      } catch {
        this.error = 'Bad input'
      }
    }
  }

  invert = (): void => {
    if (this.lastNumber) {
      this.operation = [
        this.operation.slice(0, -this.lastNumber.length),
        `${this.lastNumber.startsWith('-') ? '' : '-'}${this.lastNumber}`,
      ].join('')

      if (!this.lastNumber.startsWith('-')) {
        this.lastNumber = '-' + this.lastNumber
      }
    }
  }

  deleteLast = (): void => {
    if (['(', ')'].includes(this.operation.charAt(this.operation.length - 1))) {
      this.bracketSwitch = !this.bracketSwitch
    }
    this.operation = this.operation.slice(0, -1)
    this.lastNumber = this.lastNumber.slice(0, -1)
    this.error = null
  }

  addBracket = (): void => {
    if (!this.error) {
      this.operation += this.bracketSwitch ? ')' : '('
      this.bracketSwitch = !this.bracketSwitch
      this.lastNumber = ''
    }
  }

  reset = (): void => {
    this.operation = ''
    this.error = null
    this.lastNumber = ''
  }
}
