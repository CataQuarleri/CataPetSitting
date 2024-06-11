import React from 'react'
import { useWizard } from 'react-use-wizard';

function Walks() {
    const { handleStep, previousStep, nextStep } = useWizard();

  return (
    <div>Walks</div>
  )
}

export default Walks