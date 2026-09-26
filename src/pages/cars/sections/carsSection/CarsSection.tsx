import styles from './CarsSection.module.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../../redux/store'
import { GetCarsThunk } from '../../../../redux/reducers/carsSlice'
import DataTable, { type Column } from '../../../../components/tables/dataTable/DataTable'
import type { CarData } from '../../../../types/carsTypes'
import Pagination from '../../../../components/pagination/Pagination'
import useQueryParams from '../../../../hooks/useQueryParams'
import SearchInput from '../../../../components/search/searchInput/SearchInput'
import useDebounce from '../../../../hooks/useDebounce'

const CarsSection = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { cars } = useSelector((state: RootState) => state.cars)
    const { page, setPage, search, setSearch } = useQueryParams()
    const debouncedSearch = useDebounce(search)

    const totalPages = cars ? Math.ceil(cars?.total / cars?.pageSize) : 0
    useEffect(() => {
        dispatch(GetCarsThunk({
            page,
            search: debouncedSearch
        }))
    }, [page, debouncedSearch])

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

    if (!cars) return null;
    return (
        <>
            <div className={styles.carsSection}>
                <div className={styles.carsContainer}>
                    <SearchInput
                        search={search}
                        setSearch={setSearch}
                        placeholder='Search Cars'
                    />
                    <DataTable
                        data={cars.data}
                        columns={columns}
                        getRowKey={(car) => car.id}
                    />
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={setPage}
                    />
                </div>
            </div>
        </>
    )
}

export default CarsSection