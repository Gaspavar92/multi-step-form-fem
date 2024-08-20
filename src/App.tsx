import { useState} from 'react';
import './App.css'
import Form from './components/Form'
import Sidebar from './components/Sidebar';
import { Context } from './components/context/Context';

function App() {

  const [stepCount, setStepCount] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});


  return (
    <>
      {/* 
        Elements of the same form are rendered conditionally, depending on what step we are in
        Wrap all elements within a form, and each element within a separate div
        Animate the presentation of the form's elements on submit
      */}
      <Context.Provider value={{stepCount, setStepCount, currentStep, setCurrentStep, formData, setFormData}}>
        <Sidebar />
        <Form />
      </Context.Provider>
    </>
  )
}

export default App
