# React-Printer

React-Printer is a simple react component for partial printing on the browser

## Installation

```
npm i -S @eyelly/react-printer
```

## Usage

The Printer component and the print method are provided for use, and either one can be selected.

##### Printer
```javascript
import React, { useRef } from 'react'
import Printer from '@eyelly/react-printer'

function App() {
  const printContent = useRef(null)

  return (
    <>
      <div ref={printContent}> this is content to print </div>
      <div> this is normal content </div>
      <Printer content={printContent}>
        <button>Printer</button>
      </Printer>
    </>
  )
}
```

##### print

```javascript
import React, { useRef } from 'react'
import { print } from '@eyelly/react-printer'

function App() {
  const printContent = useRef(null)

  return (
    <>
      <div ref={printContent}> this is content to print </div>
      <div> this is normal content </div>
      <button onClick={() => print({ content: printContent })}>print</button>
    </>
  )
}
```

## API

| Property  | Description                          | Type        | Default | Printer / print |
| :-------- | :----------------------------------- | :---------- | :------ | :-------------- |
| content   | content to be printed                | HTMLElement | -       | both            |
| shotcut   | enable browser printing shortcut     | boolean     | true    | Printer only    |
| newWindow | open a new window to print           | boolean     | false   | both            |
| title     | the title of the newly opened window | boolean     | -       | both            |

## License

[MIT]()
