import { Divider } from '@mui/material'
import { observer } from 'mobx-react'

import { useStore } from '../../hooks'

import style from './style.module.css'
import { Record } from './Record'

export const OperationsPanel: React.FC = observer(() => {
  const {
    calculatorStore: { operation, error },
    historyStore: { history },
  } = useStore()

  return (
    <section className={style.wrapper}>
      {history.map((record, index) => {
        const [operationRecord, result] = record.split('=')

        return <Record key={index} operation={operationRecord} result={result} />
      })}

      {!!history.length && <Divider />}

      {operation && <Record operation={operation} />}

      {error}
    </section>
  )
})
