import { Typography } from '@mui/material'

import style from './style.module.css'

type RecordProps = {
  operation: string
  result?: string
}

export const Record: React.FC<RecordProps> = ({ operation, result }) => {
  return (
    <div className={style.row}>
      <Typography noWrap color="white">
        {operation}
        {result ? '=' : ''}
      </Typography>

      {result && (
        <Typography variant="h6" color="aqua">
          {result}
        </Typography>
      )}
    </div>
  )
}
