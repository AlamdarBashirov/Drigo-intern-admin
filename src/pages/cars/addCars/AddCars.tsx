import { GetBrandColors, GetBrands, GetCarFeatures, GetCities, GetFuelTypes, GetModels } from '../../../api/carsApi'
import CarForm from '../components/carForm/CarForm'
import styles from './AddCars.module.scss'
const AddCars = () => {

  GetCarFeatures()
  return (
    <>
      <div>
        <div>
          <CarForm />
        </div>
      </div>
    </>
  )
}

export default AddCars