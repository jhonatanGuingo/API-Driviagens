export function convertDate(date) {
    const parts = date.split('-')
    if (parts.length === 3) {
      return parts[2] + '-' + parts[1] + '-' + parts[0]
    }
    return null
  }
