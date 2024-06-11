import React from 'react'
import { useWizard } from 'react-use-wizard';

function MoreInfo() {
    const { handleStep, previousStep, nextStep } = useWizard();
  return (
    <div>MoreInfo</div>
  )
}

export default MoreInfo