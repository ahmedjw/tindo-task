import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const defaultOptions: any = {}

const queryClient = new QueryClient({ defaultOptions })

root.render(
  <React.StrictMode>
    {
      // here we can put a a layout insted of that in case we have a lot of providers or diffrent libraries
    }
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
