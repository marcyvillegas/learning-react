
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Contacts from './components/Contacts'
import Counter from './components/Counter'
import FlipState from './components/FlipState'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Contacts />
      <Counter />
      <FlipState />
    </div>
  );
}
