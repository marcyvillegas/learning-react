import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Contacts from './components/Contacts'
import Counter from './components/Counter'
import FlipState from './components/FlipState'
import Pet from './components/Pet'
import Box from './components/BoxContainer'

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Contacts />
      <Counter />
      <FlipState />
      <Pet />
      <Box isDarkMode={true} />
    </div>
  );
}
