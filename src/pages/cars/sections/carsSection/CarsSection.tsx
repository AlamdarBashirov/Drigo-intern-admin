import styles from './CarsSection.module.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../../redux/store'
import { DeleteCarThunk, GetCarsThunk } from '../../../../redux/reducers/carsSlice'
import DataTable, { type Column } from '../../../../components/tables/dataTable/DataTable'
import type { CarData } from '../../../../types/carsTypes'
import Pagination from '../../../../components/pagination/Pagination'
import useQueryParams from '../../../../hooks/useQueryParams'
import SearchInput from '../../../../components/filterAndSearch/search/searchInput/SearchInput'
import useDebounce from '../../../../hooks/useDebounce'
import Empty from '../../../../components/empty/Empty'
import FilterSelect from '../../../../components/filterAndSearch/filterSelect/FilterSelect'

const CarsSection = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { cars } = useSelector((state: RootState) => state.cars)
    const { page, setPage, search, setSearch, sortBy, sortOrder, setSort } = useQueryParams()
    const debouncedSearch = useDebounce(search)

    const totalPages = cars ? Math.ceil(cars?.total / cars?.pageSize) : 0


    const handleDelete = async (id: number) => {
        await dispatch(DeleteCarThunk(id)).unwrap()
        dispatch(GetCarsThunk({
            page,
            search: debouncedSearch,
            sortBy,
            sortOrder,
        }))
    }

    useEffect(() => {
        dispatch(GetCarsThunk({
            page,
            search: debouncedSearch,
            sortBy,
            sortOrder
        }))
    }, [page, debouncedSearch, sortBy, sortOrder])

    const columns: Column<CarData>[] = [

        {
            header: "ID",
            key: "id",
            render: (car) => car.id ? `# ${car.id}` : "*"
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
        },
        {
            header: "Color",
            key: "colorName"
        },
        {
            header: "Fuel level",
            key: "fuelLevel",
            render: (car) => car.fuelLevel ? `${car.fuelLevel.toFixed(2)}` : "fuel level"
        },
        {
            header: "Active",
            key: "fuelLevel",
            render: (car) => car.isActive ? "Yes" : "No"
        },
    ]

    const filterOptions = [
        {
            label: "Newest",
            value: "createdAt"
        },
        {
            label: "Brand",
            value: "brandName"
        },
        {
            label: "Model",
            value: "modelName"
        },
        {
            label: "Year",
            value: "manufactureYear"
        },
        {
            label: "Fuel Level",
            value: "fuelLevel"
        }
    ]

    const sortOrderOptions = [
        {
            label: "Ascending",
            value: "asc"
        },
        {
            label: "Descending",
            value: "desc"
        },
    ]

    if (!cars) return null;
    return (
        <>
            <div className={styles.carsSection}>
                <div className={styles.carsContainer}>
                    <div className={styles.carFilters}>
                        <FilterSelect
                            value={sortBy}
                            options={filterOptions}
                            onChange={(newSortBy) => setSort(newSortBy, sortOrder)}
                            title='Sort by'
                        />

                        <FilterSelect
                            value={sortOrder}
                            options={sortOrderOptions}
                            title="Sort Order"
                            onChange={(newSortOrder) => setSort(sortBy, newSortOrder as "asc" | "desc")}
                        />
                        <SearchInput
                            search={search}
                            setSearch={setSearch}
                            placeholder='Search Cars'
                        />
                    </div>

                    {
                        cars.total !== 0 ? <><DataTable
                            data={cars.data}
                            columns={columns}
                            getRowKey={(car) => car.id}
                            detailPath={(car) => `/cars/${car.id}`}
                            onDelete={(car) => handleDelete(car.id)}
                        />
                            <Pagination
                                currentPage={page}
                                totalPages={totalPages}
                                onPageChange={setPage}
                            /></> : <Empty
                            emptyMessage='No cars Found'
                        />
                    }


                </div>
            </div>
        </>
    )
}

export default CarsSection