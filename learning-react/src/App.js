
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Contacts from './components/Contacts'
import Counter from './components/Counter'
import FlipState from './components/FlipState'
import Pet from './components/Pet'

export default function App() {

  // let heartIcon = petDetails.isHeartIconPressed ? "yes icon" : "no icon"

  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Contacts />
      <Counter />
      <FlipState />
      <Pet />
    </div>
  );
}
