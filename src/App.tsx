import './App.css'
import { Box } from '@chakra-ui/react'
import KanbanBoard from './components/KanbanBoard'

function App() {
  return (
    <Box pt={5} paddingInline={20} pb={10}>
      <KanbanBoard />
    </Box>
  )
}

export default App
