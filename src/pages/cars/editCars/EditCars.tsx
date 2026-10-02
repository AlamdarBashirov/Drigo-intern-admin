import { useNavigate, useParams } from 'react-router-dom'
import CarForm from '../components/carForm/CarForm'
import styles from './EditCars.module.scss'
import type { AppDispatch, RootState } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetCarByIdThunk, UpdateCarThunk } from '../../../redux/reducers/carsSlice'
import Loading from '../../../components/loading/Loading'
import Error from '../../../components/error/Error'
import type { CarFormData, UpdateCarData } from '../../../types/carsTypes'

const EditCars = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()

    const { car, loading, error } = useSelector((state: RootState) => state.cars)

    useEffect(() => {
        if (id) {
            dispatch(GetCarByIdThunk(Number(id)))
        }
    }, [id, dispatch])


    if (loading) return <Loading />
    if (error) return <Error errorMessage='Get car information error' />
    if (!car) return null


    const initialValues: CarFormData = {
        brandId: car.brandId,
        modelId: car.modelId,
        colorId: car.colorId,
        fuelTypeId: car.fuelTypeId,
        manufactureYear: car.manufactureYear,
        engineCapacity: car.engineCapacity,
        engineUnit: car.engineUnit,
        distance: car.distance,
        maxSpeed: car.maxSpeed,
        transmission: car.transmission,
        plateNumber: car.plateNumber,
        chassisNumber: car.chassisNumber,
        freeInsurance: car.freeInsurance,
        fuelTankCapacity: car.fuelTankCapacity,
        imei: car.imei,
        latitude: car.location.latitude,
        longitude: car.location.longitude,
        address: car.location.address,
        city: car.location.city,
        carFeatureIds: car.carFeatures.map(feature => feature.id),
        count: 1
    }

    return (
        <div>
            <div>
                <CarForm
                    initialValues={initialValues}
                    buttonText="Update Car"
                    mode="edit"
                    onSubmit={async (values) => {
                        if (!id) return

                        const updateData: UpdateCarData = {
                            brandId: values.brandId,
                            modelId: values.modelId,
                            colorId: values.colorId,
                            fuelTypeId: values.fuelTypeId,
                            manufactureYear: values.manufactureYear,
                            engineCapacity: values.engineCapacity,
                            engineUnit: values.engineUnit,
                            distance: values.distance,
                            maxSpeed: values.maxSpeed,
                            transmission: values.transmission,
                            plateNumber: values.plateNumber,
                            chassisNumber: values.chassisNumber,
                            freeInsurance: values.freeInsurance,
                            fuelTankCapacity: values.fuelTankCapacity
                        }

                        await dispatch(UpdateCarThunk({id: Number(id), data: updateData})).unwrap()
                        navigate(`/cars/${id}`)
                    }}
                />
            </div>
        </div>
    )
}

export default EditCars