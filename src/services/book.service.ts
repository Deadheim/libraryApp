import axios from "axios";

class BookService  {
    async getAll(searchQuery: string, limit: string, page: number) {
        const url = `https://openlibrary.org/search.json?q=${searchQuery}&page=${page}&limit=${limit}`
        const {data} = await axios.get<BookType>(url)
        const {docs} = data
        return docs.filter(item => item.cover_i !== undefined)

    }

    async getOne(title: string) {
        const url = `https://openlibrary.org/search.json?q=${title}`
        const {data} = await axios.get<BookType>(url)
        const {docs} = data
        return docs.filter(item => item.cover_i !== undefined)
    }

    
}

export default new BookService()