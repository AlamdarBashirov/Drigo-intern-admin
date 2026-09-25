import FleetSection from "./sections/fleetSection/FleetSection"
import KpiSection from "./sections/kpiSection/KpiSection"
import TrendsSection from "./sections/trendsSection/TrendsSection"

const Home = () => {
    return (
        <>
            <KpiSection />
            <TrendsSection/>
            <FleetSection/>
        </>
    )
}

export default Home