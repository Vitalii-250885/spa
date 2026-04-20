import { MONTHS_SHORT, WEEK_DAYS } from '../constants/date-format'
import { ClockIcon } from './icons/ClockIcon'

export const CurrentDate = () => {
  const now = new globalThis.Date()

  const currentWeekDay = WEEK_DAYS[now.getDay()]
  const currentDate = `${now.getDate()} ${MONTHS_SHORT[now.getMonth()]} ${now.getFullYear()}`
  const currentTime = now.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <div className='header__date--container'>
      <div className='header__date--text'>
        <span>{currentWeekDay}</span>
        <span>{currentDate}</span>
      </div>
      <div className='header__date--clock'>
        <ClockIcon className='header__clockIcon' />
        <span>{currentTime}</span>
      </div>
    </div>
  )
}
