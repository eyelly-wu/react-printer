import React, { ReactNode, useEffect } from 'react'
import print, { PrintProps } from '../../utils'

export interface PrinterProps extends PrintProps {
  children: ReactNode
  shotcut?: boolean
}

export default function Printer(props: PrinterProps) {
  const { children, shotcut = true, content, newWindow = false, title } = props

  const onClick = () => {
    print({
      content: content,
      newWindow,
      title
    })
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const { keyCode, ctrlKey, metaKey } = e
    if ((keyCode === 80 && ctrlKey) || (keyCode === 80 && metaKey)) {
      e.preventDefault()
      onClick()
    }
  }

  useEffect(() => {
    shotcut && document.addEventListener('keydown', onKeyDown)
    return () => {
      shotcut && document.removeEventListener('keydown', onkeydown)
    }
  }, [shotcut])

  return <div onClick={onClick}>{children}</div>
}
