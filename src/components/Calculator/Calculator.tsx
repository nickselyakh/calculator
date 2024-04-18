import { MouseEvent } from 'react'
import { Button } from '@mui/material'
import { observer } from 'mobx-react'

import { useStore } from '../../hooks'

import style from './style.module.css'

const PRIMARY_VALUES = ['AC', '%', '()', '+-']
const values = [
  ['AC', '%', '()', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['+-', '0', '.', '='],
]

const getClassName = (value: string, index: number): string => {
  if (PRIMARY_VALUES.includes(value.toString())) {
    return style.primary
  }

  if (value === '=') {
    return style.equal
  }

  if ((index + 1) % 4 === 0) {
    return style.secondary
  }

  return style.default
}

export const Calculator: React.FC = observer(() => {
  const {
    calculatorStore: { reset, invert, calculateResult, addSign, convertToDecimal, addNumber, addBracket },
  } = useStore()

  const handleClick =
    (value: string) =>
    (e: MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault()

      switch (value) {
        case 'AC':
          reset()
          break
        case '+-':
          invert()
          break
        case '=':
          calculateResult()
          break
        case 'X':
        case '÷':
        case '-':
        case '+':
        case '%':
          addSign(value)
          break
        case '.':
          convertToDecimal()
          break
        case '()':
          addBracket()
          break
        default:
          addNumber(value)
          break
      }
    }

  return (
    <section>
      <div className={style.wrapper}>
        <div className={style.grid}>
          {values.flat().map((value, index) => (
            <Button
              key={value}
              value={value}
              variant="contained"
              className={getClassName(value, index)}
              onClick={handleClick(String(value))}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
})
