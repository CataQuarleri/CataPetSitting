import {Wizard} from 'react-use-wizard'
import { AnimatePresence } from 'framer-motion'
import Header from './Header'
import MainInfo from './MainInfo'
import Food from './Food'
import Behavior from './Behavior'
import Health from './Health'
import Walks from './Walks'
import MoreInfo from './MoreInfo'

function WrapperForm() {
  return (
  <Wizard
  startIndex={0}
  header={<Header />}
  wrapper={<AnimatePresence mode="wait" />}>
    <MainInfo />
    <Food />
    <Behavior />
    <Health />
    <Walks />
    <MoreInfo />
  </Wizard>
  )
}

export default WrapperForm