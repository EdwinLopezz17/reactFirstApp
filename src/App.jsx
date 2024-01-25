
import './App.css'
import Card from './components/Card/Card'
import ShowHide from './components/ShowHide/ShowHide'
import vehicles from './datas/vehicles'


function App() {

  const vehivlesList = vehicles.map(
    vehicle =>{
      return <Card 
      title={vehicle.name} 
      description={vehicle.description} />    
    }
  )


  return (
    <div className='App'>
      <h1>Hello REACT</h1>
      <div className="container">
        {vehivlesList}
      </div>


    </div>
  )

}

export default App
