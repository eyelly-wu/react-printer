interface IframePrintProps {
  content: {
    current: HTMLElement
  }
}

interface WindowPrintProps extends IframePrintProps {
  title?: string
}

export interface PrintProps extends WindowPrintProps {
  newWindow?: boolean
  title?: string
}

function iframePrint(props: IframePrintProps) {
  const { content } = props
  const iframe = document.createElement('iframe')
  iframe.setAttribute('style', 'position:absolute;top:-100%;left:-100%;')
  document.body.appendChild(iframe)
  const contentWin = iframe.contentWindow
  const contentDoc = contentWin.document
  contentDoc.body.appendChild(content.current.cloneNode(true))
  contentDoc.onreadystatechange = () => {
    if (contentDoc.readyState === 'complete') {
      contentWin.print()
      iframe.parentNode.removeChild(iframe)
    }
  }
}

function windowPrint(props: WindowPrintProps) {
  const { content, title } = props
  const win: Window = window.open('', '_blank')
  const doc = win.document
  doc.title = title
  doc.body.appendChild(content.current.cloneNode(true))
  doc.onreadystatechange = () => {
    if (doc.readyState === 'complete') {
      win.print()
      win.close()
    }
  }
}

export default function print(props: PrintProps) {
  const { newWindow = false, ...res } = props
  const printImpl = newWindow ? windowPrint : iframePrint
  printImpl(res)
}
