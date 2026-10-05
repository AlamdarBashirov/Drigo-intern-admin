import styles from './FilterSelect.module.scss'
type FilterSelectProps = {
    value: string,
    title: string,
    options: FilterOption[]
    onChange: (value: string) => void
}
type FilterOption = {
    value: string,
    label: string
}
const FilterSelect = ({ value, title, options, onChange }: FilterSelectProps) => {
    return (
        <div className={styles.filters}>
            <div className={styles.filtersContainer}>
                <select className={`${styles.select} ${value ? styles.activeSelect : ""}`} name={value} id={title} value={value} onChange={(e) => onChange(e.target.value)}>
                    <option value="" defaultChecked>{title}</option>
                    {options.map((option) => (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default FilterSelect