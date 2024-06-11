import React from 'react'
import { useWizard } from 'react-use-wizard';

function Behavior() {
    const { handleStep, previousStep, nextStep } = useWizard();

  return (
    <div>Behavior</div>
  )
}

export default Behavior