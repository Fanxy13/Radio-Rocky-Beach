// Icons: Google Material Symbols (Apache License 2.0)
const FONT = '"Material Symbols Rounded"'

// Zeichnet ein Material-Symbol auf ein Canvas und gibt es als PNG-Data-URL zurück.
export async function iconDataUrl(name = 'cell_tower', color = '#040D33', size = 64, background = null) {
  await document.fonts.load(`${size}px ${FONT}`, name)
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (background) {
    ctx.fillStyle = background
    ctx.fillRect(0, 0, size, size)
  }
  const iconSize = background ? size * 0.6 : size
  ctx.fillStyle = color
  ctx.font = `${iconSize}px ${FONT}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(name, size / 2, size / 2)
  return canvas.toDataURL('image/png')
}

// Setzt das Antennen-Icon als Favicon im Browser-Tab.
export async function setFavicon() {
  try {
    const link = document.getElementById('favicon')
    if (link) link.href = await iconDataUrl('cell_tower')
  } catch (error) {
    console.error(error)
  }
}
