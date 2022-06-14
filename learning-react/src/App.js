import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Contacts from './components/Contacts'
import Counter from './components/Counter'
import FlipState from './components/FlipState'
import Pet from './components/Pet'
import Box from './components/BoxContainer'
import JokeContainer from './components/JokeContainer'
import Message from './components/Message'
import Form from './components/Form'
import SignUpForm from './components/SignUpForm'
import FetchApi from './components/FetchApi'
import WindowTrackerContainer from './components/WindowTrackerContainer'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Contacts />
      <Counter />
      <FlipState />
      <Pet />
      <Box />
      <JokeContainer />
      <Message />
      <Form />
      <SignUpForm />
      <FetchApi />
      <WindowTrackerContainer />
    </div>
  );
}
