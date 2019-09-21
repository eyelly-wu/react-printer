# React-Printer

React-Printer is a simple react component for partial printing on the browser

## Installation

**NPM**
```
npm i -S @eyelly/react-printer
```
**CDN**
```HTML
<script src="https://unpkg.com/@eyelly/react-printer/dist"></script>
```
## Usage & Example

**In Module**
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
**In HTML**
```
<!DOCTYPE html>
<html lang="en">

  <head>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
    <script src="https://unpkg.com/@eyelly/react-printer/dist"></script>
  </head>

  <body>
    <div id="app"></div>
    <script type="text/babel">

      function App(){
        const printContent = React.useRef(null)
        return (
          <React.Fragment>
            <div ref={printContent}> this is content to print </div>
            <div> this is normal content </div>
            <Printer content={printContent}>
              <button>printer</button>
            </Printer>
          </React.Fragment>
        )
      }

      ReactDOM.render( <App/> , document.getElementById('app') )
    </script>
  </body>

</html>

```
## API

| Property  | Description                          | Type                  | Default |
| :-------- | :----------------------------------- | :-------------------- | :------ |
| content   | content to be printed                | {current:HTMLElement} | -       |
| shotcut   | enable browser printing shortcut     | boolean               | true    |
| newWindow | open a new window to print           | boolean               | false   |
| title     | the title of the newly opened window | boolean               | -       |

## License

[MIT](https://github.com/eyelly-wu/react-printer/blob/master/LICENSE)
