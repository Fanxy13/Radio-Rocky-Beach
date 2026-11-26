import { stationInfo } from './data.js'

const STATUS_URL = 'https://audio.gtaradio.net/status-json.xsl'
const IMAGE_BASE = 'https://cdn.jsdelivr.net/gh/fanxy13/gta-radio-images@main/images/'

export async function getStations() {
  const response = await fetch(STATUS_URL)
  if (!response.ok) {
    throw new Error(`Sender konnten nicht geladen werden (${response.status})`)
  }
  const data = await response.json()
  const source = data.icestats?.source ?? []
  return Array.isArray(source) ? source : [source]
}

export function getStationId(url) {
  return new URL(url).pathname.slice(1)
}

export function nameById(id) {
  return stationInfo[id]?.name ?? id
}

export function getName(station) {
  return nameById(getStationId(station.listenurl))
}

export function getLabel(station) {
  const id = getStationId(station.listenurl)
  return `${nameById(id)} (${stationInfo[id]?.game ?? '?'})`
}

export function imageUrl(id) {
  return `${IMAGE_BASE}${id}.png`
}

// Wandelt z. B. &#8217; in ’ um. Das Ergebnis wird nur mit textContent angezeigt.
export function decode(text) {
  const area = document.createElement('textarea')
  area.innerHTML = text
  return area.value
}
