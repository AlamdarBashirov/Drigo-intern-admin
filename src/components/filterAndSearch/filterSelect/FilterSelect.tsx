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
        <div>
            <div>
                <select name={value} id={title} value={value} onChange={(e) => onChange(e.target.value)}>
                    {options.map((option) => (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default FilterSelect