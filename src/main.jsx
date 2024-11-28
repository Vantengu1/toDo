import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { storeTodo } from './app/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={storeTodo}> 
      <App />
    </Provider>
  </StrictMode>,
)
