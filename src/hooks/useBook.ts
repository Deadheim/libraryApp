import {keepPreviousData, useQuery} from "@tanstack/react-query";
import BookService from "../services/book.service.ts";


export const useGetBooks = (searchQuery: string, enabled: boolean, limit: string, page: number = 1) => {
    return useQuery({
        queryKey: ['books', {page}],
        queryFn: () => BookService.getAll(searchQuery, limit, page),
        enabled: enabled,
        staleTime: 1000*60*5,
        placeholderData: keepPreviousData,
    })
}

export const useGetBook = (title: string, enabled: boolean) => {
    return useQuery({queryKey: ['book'], queryFn: () => BookService.getOne(title), enabled: enabled });
}