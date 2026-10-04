import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get("page")) || 1;
    const search = searchParams.get("search") || ""
    const status = searchParams.get("status") || ""

    const sortBy = searchParams.get("sortBy") || ""
    const sortOrder = (searchParams.get("sortOrder") || "") as "asc" | "desc"    
    const carId = (searchParams.get("carId") || "") as "asc" | "desc"    
    const userId = (searchParams.get("userId") || "") as "asc" | "desc"    
    
    
    const setPage = (newPage: number) => {
        if(newPage === 1) {
            searchParams.delete("page")
        }
        if(newPage !== 1){
            searchParams.set("page", String(newPage));
        }
        setSearchParams(searchParams);
    };
    const setSearch = (search: string) => {
        if(!search){
            searchParams.delete("search")
        }
        if(search){
            searchParams.set("search", String(search))
        }
        searchParams.set("page", String(1))
        if (page == 1) {
            searchParams.delete("page")
        }
        setSearchParams(searchParams)
    }

    const setStatus = (status: string) => {
        if (!status) {
            searchParams.delete("status")
        }
        if (status) {
            searchParams.set("status", String(status))
        }
        searchParams.set("page", String(1))
        if (page == 1) {
            searchParams.delete("page")
        }

        setSearchParams(searchParams)
    }

    const setSort = (sortBy: string, sortOrder: "asc" | "desc") => {
        searchParams.set("sortBy", sortBy)
        searchParams.set("sortOrder", sortOrder)
        
        if (sortBy === "") {
            searchParams.delete("sortBy")
        }
        if (!sortOrder) {
            searchParams.delete("sortOrder")
        }
        setSearchParams(searchParams)
    }

    return { page, setPage, search, setSearch, sortBy, sortOrder, setSort,
        status, setStatus
     };
};

export default useQueryParams;