'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
  ReactDOM.preload('https://css.gg/css', { as: 'style' })
  ReactDOM.preload('https://unpkg.com/css.gg/icons/icons.css', { as: 'style' })
  ReactDOM.preload('https://cdn.jsdelivr.net/npm/css.gg/icons/icons.css', { as: 'style' })

  return null
}