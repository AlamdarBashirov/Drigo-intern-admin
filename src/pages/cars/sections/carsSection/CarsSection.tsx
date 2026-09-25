import styles from './CarsSection.module.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../../redux/store'
import { GetCarsThunk } from '../../../../redux/reducers/carsSlice'
import DataTable, { type Column } from '../../../../components/tables/dataTable/DataTable'
import type { CarData } from '../../../../types/carsTypes'

const CarsSection = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { cars } = useSelector((state: RootState) => state.cars)

    useEffect(() => {
        // dispatch(GetCarsThunk())
        dispatch(GetCarsThunk({
            page: 1,
            pageSize: 20,
            // search: "Toyota"
        }))
    }, [])
    
    const columns: Column<CarData>[] = [
        
        {
            header: "ID",
            key: "id"
        },
        {
            header: "Brand",
            key: "brandName"
        },
        {
            header: "Model",
            key: "modelName"
        },
        {
            header: "Plate Number",
            key: "plateNumber"
        },
        {
            header: "Year",
            key: "manufactureYear"
        }
    ]

    if(!cars) return null;
    return (
        <>
            <div className={styles.carsSection}>
                <div className={styles.carsContainer}>
                    <DataTable
                        data={cars.data}
                        columns={columns}
                        getRowKey={(car) => car.id}
                    />
                </div>
            </div>
        </>
    )
}

export default CarsSection