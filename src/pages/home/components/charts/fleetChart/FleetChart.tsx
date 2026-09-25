import styles from './FleetChart.module.scss'
import type { FleetCityItem } from '../../../../../types/dashboardTypes'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

type FleetChartProps = {
    title: string,
    data: FleetCityItem[]
}
const FleetChart = ({ title, data }: FleetChartProps) => {
    return (
        <div className={styles.fleetChart}>
                <h3>{title}</h3>
            <div className={styles.fleetChartContainer}>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="city" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="count"
                            fill="#4D21FF"
                            strokeWidth="40px"
                            markerWidth="40px"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default FleetChart