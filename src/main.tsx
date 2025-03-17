import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { StoreProvider } from './StoreProvider/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </StoreProvider>
  </StrictMode>,
)
