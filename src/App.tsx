import { useState} from 'react';
import './App.css'
import Form from './components/Form'
import Sidebar from './components/Sidebar';
import { Context } from './components/context/Context';

function App() {

  // const [stepCount, setStepCount] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});


  return (
    <div className='grid grid-cols-3 min-h-[80vh] min-w-[70vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-xl rounded-xl bg-white'>
      {/* 
        Elements of the same form are rendered conditionally, depending on what step we are in
        Wrap all elements within a form, and each element within a separate div
        Animate the presentation of the form's elements on submit
      */}
      <Context.Provider value={{currentStep, setCurrentStep, formData, setFormData}}>
        <Sidebar />
        <Form />
      </Context.Provider>
    </div>
  )
}

export default App
