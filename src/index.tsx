import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Provider from './Context/Context'
import Main from './Components/Main'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
