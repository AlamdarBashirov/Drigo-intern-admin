import { useDispatch } from 'react-redux'
import type { CarFormData } from '../../../types/carsTypes'
import CarForm from '../components/carForm/CarForm'
import styles from './AddCars.module.scss'
import type { AppDispatch } from '../../../redux/store'
import { AddCarThunk } from '../../../redux/reducers/carsSlice'
import { useNavigate } from 'react-router-dom'

const AddCars = () => {

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const initialValues: CarFormData = {
    brandId: 0,
    modelId: undefined,
    colorId: undefined,
    fuelTypeId: undefined,
    manufactureYear: undefined,
    engineCapacity: undefined,
    engineUnit: "",
    transmission: 0,
    maxSpeed: undefined,
    distance: undefined,
    plateNumber: "",
    chassisNumber: "",
    imei: "",
    latitude: undefined,
    longitude: undefined,
    address: "",
    city: "",
    carFeatureIds: [],
    count: 1,
    freeInsurance: false,
    fuelTankCapacity: undefined
  }

  return (

    <>
      <div>
        <div>
          <CarForm
            initialValues={initialValues}
            buttonText="Add Car"
            mode="add"
            onSubmit={async (values) => {
              await dispatch(AddCarThunk(values)).unwrap()
              navigate("/cars")
            }}
          />
        </div>
      </div>
    </>
  )
}

export default AddCars