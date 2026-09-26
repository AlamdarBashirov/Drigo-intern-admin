import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get("page")) || 1;
    const search = searchParams.get("search") || ""

    const setPage = (newPage: number) => {
        searchParams.set("page", String(newPage));
        setSearchParams(searchParams);
    };
    const setSearch = (search: string) => {
        searchParams.set("search", String(search))
        searchParams.set("page", String(1))
        setSearchParams(searchParams)
    }

    return { page, setPage, search, setSearch };
};

export default useQueryParams;