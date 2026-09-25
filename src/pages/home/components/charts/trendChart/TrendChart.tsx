import styles from './TrendChart.module.scss'
import type { RevenueTrendItem, TrendCountItem } from "../../../../../types/dashboardTypes";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

type TrendChartProps = {
    title: string;
    data: TrendCountItem[] | RevenueTrendItem[];
    dataKey: "count" | "revenue"
};

const TrendChart = ({ title, data, dataKey }: TrendChartProps) => {
    return (
        <div className={styles.trendChart}>
            <h3>{title}</h3>

            <ResponsiveContainer width="100%" height={200}>
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="date"
                        tick={{ fontSize: 11 }}
                    />
                    <YAxis
                        tick={{ fontSize: 11 }}
                    />
                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey={dataKey}
                        stroke="#4D21FF"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TrendChart;