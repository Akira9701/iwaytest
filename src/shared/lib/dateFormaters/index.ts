export const formatDate = (dateString: string): string => {
  const date = new Date(dateString.split('.').reverse().join('-'))
  return `${date.getDate()} ${date.toLocaleString('ru', { month: 'long' })}`
}
