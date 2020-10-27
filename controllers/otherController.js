const getDateForm = (date) => {
  const Year = (date.getYear() % 100)
  const Month = (date.getMonth() + 1)
  const Date = date.getDate()
  const Hour = date.getHours()
  const Minute = date.getMinutes()

  return `${Year}-${Month}-${Date} ${Hour}:${Minute}`
}

export const others = {
  getDateForm
}
