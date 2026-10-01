import { useFormik } from 'formik';

import styles from './CarForm.module.scss'

import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '../../../../redux/store';

import { useEffect } from 'react';

import { GetBrandColorsThunk, GetBrandsThunk, GetCarFeaturesThunk, GetCitiesThunk, GetFuelTypesThunk, GetModelsThunk } from '../../../../redux/reducers/carsSlice';

import type { CarFormData } from '../../../../types/carsTypes';


type CarFormProps = {
    initialValues: CarFormData
    onSubmit: (values: CarFormData) => void | Promise<void>
    buttonText: string
    mode: "add" | "edit"
}


const CarForm = ({ initialValues, onSubmit, buttonText, mode }: CarFormProps) => {

    const dispatch = useDispatch<AppDispatch>()

    const { brands, colors, cities, fuelTypes, carFeatures, models } = useSelector((state: RootState) => state.cars)


    useEffect(() => {
        dispatch(GetBrandsThunk())
        dispatch(GetFuelTypesThunk())

        if (mode === "add") {
            dispatch(GetCitiesThunk())
            dispatch(GetCarFeaturesThunk())
        }
    }, [dispatch, mode])


    const formik = useFormik<CarFormData>({
        initialValues,
        enableReinitialize: true,
        onSubmit
    })


    useEffect(() => {
        if (formik.values.brandId) {
            dispatch(GetModelsThunk(formik.values.brandId))
            dispatch(GetBrandColorsThunk(formik.values.brandId))
        }
    }, [formik.values.brandId, dispatch])


    return (
        <div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className={styles.carFormGroup}>
                        <label htmlFor="brandId">Brand</label>
                        <select
                            id="brandId"
                            name="brandId"
                            onChange={formik.handleChange}
                            value={formik.values.brandId}
                        >
                            <option value="">Select Brand</option>
                            {brands?.data.map((brand) => (
                                <option key={brand.id} value={brand.id}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.carFormGroup}>
                        <label htmlFor="modelId">Model</label>
                        <select
                            id="modelId"
                            name="modelId"
                            onChange={formik.handleChange}
                            value={formik.values.modelId}
                        >
                            <option value="">Select Model</option>
                            {models.map((model) => (
                                <option key={model.id} value={model.id}>
                                    {model.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.carFormGroup}>
                        <label htmlFor="colorId">Color</label>
                        <select
                            id="colorId"
                            name="colorId"
                            onChange={formik.handleChange}
                            value={formik.values.colorId}
                        >
                            <option value="">Select Color</option>
                            {colors.map((color) => (
                                <option key={color.id} value={color.id}>
                                    {color.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.carFormGroup}>
                        <label htmlFor="fuelTypeId">Fuel Type</label>
                        <select
                            id="fuelTypeId"
                            name="fuelTypeId"
                            onChange={formik.handleChange}
                            value={formik.values.fuelTypeId}
                        >
                            <option value="">Select Fuel Type</option>
                            {fuelTypes.map((fuel) => (
                                <option key={fuel.id} value={fuel.id}>
                                    {fuel.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.carFormGroup}>
                        <label htmlFor="transmission">Transmission</label>
                        <select
                            id="transmission"
                            name="transmission"
                            onChange={formik.handleChange}
                            value={formik.values.transmission}
                        >
                            <option value={0}>Automatic</option>
                            <option value={1}>Manual</option>
                        </select>
                    </div>

                    {mode === "add" && (
                        <div className={styles.carFormGroup}>
                            <label htmlFor="city">City</label>
                            <select
                                id="city"
                                name="city"
                                onChange={formik.handleChange}
                                value={formik.values.city}
                            >
                                <option value="">Select City</option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div className={styles.carFormGroup}>
                        <label htmlFor="manufactureYear">Manufacture Year</label>
                        <input
                            id="manufactureYear"
                            name="manufactureYear"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.manufactureYear}
                        />
                    </div>

                    <div className={styles.carFormGroup}>
                        <label htmlFor="engineCapacity">Engine Capacity</label>
                        <input
                            id="engineCapacity"
                            name="engineCapacity"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.engineCapacity}
                        />
                    </div>

                    <div className={styles.carFormGroup}>
                        <label htmlFor="engineUnit">Engine Unit</label>
                        <input
                            id="engineUnit"
                            name="engineUnit"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.engineUnit}
                        />
                    </div>

                    <div className={styles.carFormGroup}>
                        <label htmlFor="maxSpeed">Max Speed</label>
                        <input
                            id="maxSpeed"
                            name="maxSpeed"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.maxSpeed}
                        />
                    </div>

                    <div className={styles.carFormGroup}>
                        <label htmlFor="distance">Distance</label>
                        <input
                            id="distance"
                            name="distance"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.distance}
                        />
                    </div>

                    <div className={styles.carFormGroup}>
                        <label htmlFor="plateNumber">Plate Number</label>
                        <input
                            id="plateNumber"
                            name="plateNumber"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.plateNumber}
                        />
                    </div>

                    <div className={styles.carFormGroup}>
                        <label htmlFor="chassisNumber">Chassis Number</label>
                        <input
                            id="chassisNumber"
                            name="chassisNumber"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.chassisNumber}
                        />
                    </div>

                    {mode === "add" && (
                        <>
                            <div className={styles.carFormGroup}>
                                <label htmlFor="imei">IMEI</label>
                                <input
                                    id="imei"
                                    name="imei"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.imei}
                                />
                            </div>

                            <div className={styles.carFormGroup}>
                                <label htmlFor="latitude">Latitude</label>
                                <input
                                    id="latitude"
                                    name="latitude"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.latitude}
                                />
                            </div>

                            <div className={styles.carFormGroup}>
                                <label htmlFor="longitude">Longitude</label>
                                <input
                                    id="longitude"
                                    name="longitude"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.longitude}
                                />
                            </div>

                            <div className={styles.carFormGroup}>
                                <label htmlFor="address">Address</label>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                />
                            </div>

                            <div className={styles.carFormGroup}>
                                <label>Car Features</label>
                                {carFeatures.map((feature) => (
                                    <div key={feature.id}>
                                        <input
                                            id={`feature-${feature.id}`}
                                            type="checkbox"
                                            checked={formik.values.carFeatureIds?.includes(feature.id)}
                                            onChange={(e) => {
                                                const current = formik.values.carFeatureIds || []

                                                formik.setFieldValue(
                                                    "carFeatureIds",
                                                    e.target.checked
                                                        ? [...current, feature.id]
                                                        : current.filter((id) => id !== feature.id)
                                                )
                                            }}
                                        />
                                        <label htmlFor={`feature-${feature.id}`}>
                                            {feature.name}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.carFormGroup}>
                                <label htmlFor="count">Count</label>
                                <input
                                    id="count"
                                    name="count"
                                    type="number"
                                    min={1}
                                    max={20}
                                    onChange={formik.handleChange}
                                    value={formik.values.count}
                                />
                            </div>
                        </>
                    )}

                    {mode === "edit" && (
                        <>
                            <div className={styles.carFormGroup}>
                                <label htmlFor="fuelTankCapacity">Fuel Tank Capacity</label>
                                <input
                                    id="fuelTankCapacity"
                                    name="fuelTankCapacity"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.fuelTankCapacity}
                                />
                            </div>

                            <div className={styles.carFormGroup}>
                                <label htmlFor="freeInsurance">Free Insurance</label>
                                <input
                                    id="freeInsurance"
                                    name="freeInsurance"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    checked={formik.values.freeInsurance}
                                />
                            </div>
                        </>
                    )}

                    <button type="submit">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}


export default CarForm