import { useNavigate } from 'react-router-dom';
import styles from './DataTable.module.scss'


// T for generic data type (Car, Rental, Customer)
// render for custom rendering for cells (StatusBadge, buttons)
// getRowKey for returns unique id/key for each table row


export type Column<T> = {
    header: string;
    key: keyof T;
    render?: (item: T) => React.ReactNode;
};

type DataTableProps<T> = {
    data: T[];
    columns: Column<T>[];
    getRowKey: (item: T) => string | number;
    detailPath?: (item: T) => string,
    onDelete?: (item: T) => void;
};

const DataTable = <T,>({ data, columns, detailPath, getRowKey, onDelete }: DataTableProps<T>) => {
    const navigate = useNavigate()
    return (
        <table className={styles.dataTable}>
            <thead>
                <tr>
                    {
                        columns.map(item => (
                            <>
                                <th key={String(item.key)}>{item.header}</th>
                            </>
                        ))
                    }
                    {(detailPath || onDelete) && <th>Actions</th>}
                </tr>
            </thead>

            <tbody>

                {
                    data.map((item) => (
                        <tr key={getRowKey(item)}>
                            {columns.map((c) => (
                                c.render
                                    ? <td key={String(c.key)}>{c.render(item)}</td>
                                    : <td key={String(c.key)}>{String(item[c.key])}</td>
                            ))}
                            {(detailPath || onDelete) && (
                                <td>
                                    <div className={styles.actions}>
                                        {detailPath && (
                                            <button
                                                className={styles.detailBtn}
                                                onClick={() => navigate(detailPath(item))}
                                            >
                                                Details
                                            </button>
                                        )}

                                        {onDelete && (
                                            <button
                                                className={styles.deleteBtn}
                                                onClick={() => onDelete(item)}
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default DataTable