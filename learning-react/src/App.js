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
import ShowHideComponents from './components/ShowHideComponents'
import Accordion from './components/Accordion'
import UnpreservedStateCounter from './components/UnpreservedStateCounter'
import PreservedStateCounter from './components/PreservedStateCounter'
import ResetStateCounterDifferentPosition from './components/ResetStateCounterDifferentPosition'
import ResetStateCounterSamePosition from './components/ResetStateCounterSamePosition'
import FormReducer from './components/FormReducer'
import CheckAuthentication from './components/CheckAuthentication'
import UseRefCounter from './components/UseRefCounter'
import RefDOM from './components/RefDOM'
import ButtonModal from './components/ButtonModal'
import ModalContainer from './components/ModalContainer'

// Context
import AuthContextProvider from './context/AuthContextProvider'
import ModalContextProvider from './context/ModalContextProvider'
import EffectsNotes from './components/EffectsNotes'

export default function App() {
  return (
    <ModalContextProvider>
      <AuthContextProvider>
        <div className="App">
          <Navbar />
          <MainContent />

          {/* Array in State */}
          <Contacts />

          {/* States as props */}
          <Counter />

          {/* Toggle a state */}
          <FlipState />

          {/* Object in State, Setting state from child component */}
          <Pet />

          {/* Mapping a component, Updating state to a child component using event */}
          <Box />

          {/* Conditional rendering and its cases */}
          <JokeContainer />
          <Message />

          {/* Form State Object and displaying component after submiting */}
          <Form />
          <SignUpForm />

          {/* using useEffect and fetching an API */}
          <FetchApi />

          {/* Changing local states using useEffect, clean function */}
          <WindowTrackerContainer />

          {/* Show Hide Components */}
          <ShowHideComponents />

          {/* --- START OF LEARNING DEEPLY FROM DOCS 📘 https://beta.reactjs.org/learn --- */}

          {/* >> UNDER: Managing State */}
          {/* Sharing State Between Components */}
          <Accordion />

          {/* Preserving and Resetting State */}
          <UnpreservedStateCounter />
          <PreservedStateCounter />
          <ResetStateCounterDifferentPosition />
          <ResetStateCounterSamePosition />

          {/* Extracting State Logic into a Reducer */}
          <FormReducer />

          {/* Passing Data Deeply with Context */}
          <CheckAuthentication />
          {/* ^ with <AuthContextProvider> component */}

          {/* Scaling Up with Reducer and Context */}
          <ButtonModal />
          <ModalContainer />

          {/* ---------------------------------------------------------------------------- */}
          {/* >> UNDER: Escape Hatches (Advanced) */}
          {/* - step outside React and connect to external systems
             - most of your application logic and data flow should not rely on these features */}

          {/* Referencing Values with Refs */}
          <UseRefCounter />

          {/* Manipulating the DOM with Refs &  */}
          <RefDOM />

          {/* Synchronizing with Effects & You Might Not Need an Effect*/}
          <EffectsNotes />

          {/* Lifecycle of Reactive Effects */}
          {/* - Unlike event handlers, which only run once per interaction, Effects run whenever synchronization is necessary. */}
          {/* - You can’t “choose” your dependencies. Your dependencies must include every reactive value you read in the Effect. */}
          {/* - Read more details in docs */}

          {/* Separating Events from Effects */}
          {/* - Event handlers run in response to specific interactions */}
          {/* - Effects run whenever synchronization is needed */}
          {/* - Event handlers are always triggered “manually”, for example by clicking a button. Effects, on the other hand, are “automatic”: they run and re-run as often as it’s needed to stay synchronized. */}
          {/* - Props, state, and variables declared inside your component’s body are called reactive values */}
          

        </div>
      </AuthContextProvider>
    </ModalContextProvider>
  );
}
