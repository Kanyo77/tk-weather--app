import '../styles/components/Main.scss'
import CurrentWheather from './CurrentWheather'
import Focast from './Focast'
function Main({ measurementSystem }) {

  return (
    <div className="Main">
      <CurrentWheather />
      <Focast />
    </div>
  )
}

export default Main