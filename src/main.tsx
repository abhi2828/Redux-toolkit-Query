import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { myApi } from './redux/api.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApiProvider api={myApi}>
    <App />
  </ApiProvider>,
)
