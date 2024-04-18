import { useState } from 'react'
import { IconButton } from '@mui/material'
import HistoryIcon from '@mui/icons-material/History'
import BackspaceIcon from '@mui/icons-material/Backspace'
import CalculateIcon from '@mui/icons-material/Calculate'
import DeleteIcon from '@mui/icons-material/Delete'

import { Calculator } from '../Calculator'
import { OperationsPanel } from '../OperationsPanel'
import { useStore } from '../../hooks'

import style from './style.module.css'

export const NotePad: React.FC = () => {
  const {
    historyStore: { clear },
    calculatorStore: { deleteLast },
  } = useStore()
  const [isCalculating, setIsCalculating] = useState(true)

  const toggleCalculating = (): void => {
    setIsCalculating((prev) => !prev)
  }

  return (
    <section className={style.wrapper}>
      <div className={isCalculating ? style.container : style.fullHeight}>
        <OperationsPanel />
      </div>

      {isCalculating ? (
        <div>
          <div className={style.controls}>
            <IconButton onClick={toggleCalculating}>
              <HistoryIcon className={style.icon} />
            </IconButton>

            <IconButton onClick={deleteLast}>
              <BackspaceIcon className={style.icon} fontSize="small" />
            </IconButton>
          </div>
          <Calculator />
        </div>
      ) : (
        <div className={style.controls}>
          <IconButton onClick={toggleCalculating}>
            <CalculateIcon className={style.icon} />
          </IconButton>

          <IconButton onClick={clear}>
            <DeleteIcon className={style.icon} fontSize="small" />
          </IconButton>
        </div>
      )}
    </section>
  )
}
