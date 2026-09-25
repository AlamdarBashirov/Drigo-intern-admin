import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get("page")) || 1;

    const setPage = (newPage: number) => {
        searchParams.set("page", String(newPage));
        setSearchParams(searchParams);
    };

    return { page, setPage };
};

export default useQueryParams;