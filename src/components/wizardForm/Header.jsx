import React from 'react'
import { useWizard } from 'react-use-wizard';

function Header() {
    const { handleStep, previousStep, nextStep } = useWizard();

  return (
    <>
    <button onClick={()=>previousStep()}>Back</button>
    <button onClick={()=>nextStep()}>Next</button>
    </>
  )
}

export default Header