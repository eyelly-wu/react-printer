import print from '@eyelly/print'

export interface PrintProps {
  content: {
    current: HTMLElement
  }
  newWindow?: boolean
  title?: string
}

export default function _print(props: PrintProps) {
  const { content, ...res } = props
  print({
    content: content.current,
    ...res
  })
}
