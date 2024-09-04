import { useState} from 'react';
import Form from './components/Form'
import Sidebar from './components/Sidebar';
import { AppContext } from './components/context/AppContext';
import "./App.css"

function App() {

  const [currentStep, setCurrentStep] = useState(0);
  const [invalid, setInvalid] = useState(true);

  return (
    <div className="relative min-h-screen grid place-items-center z-40">
      <div className='md:grid md:grid-cols-3 h-2/3 md:h-[80vh] md:min-h-[80vh] max-w-[80%] md:min-w-[70vw] md:p-4 shadow-xl rounded-xl bg-white'>
        {/* 
          Elements of the same form are rendered conditionally, depending on what step we are in
          Wrap all elements within a form, and each element within a separate div
          Animate the presentation of the form's elements on submit
        */}
        <AppContext.Provider value={{currentStep, setCurrentStep, invalid, setInvalid}}>
          <Sidebar />
          <Form />
        </AppContext.Provider>
      </div>
    </div>
  )
}

export default App
