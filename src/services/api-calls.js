const baseUrl = 'https://api.themotivate365.com/stoic-quote'

export function getQuote() {
  return fetch(`${baseUrl}`)
  .then(res => res.json())
}