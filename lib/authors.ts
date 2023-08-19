import { PrismaClient } from "@prisma/client"

type Author = {
    id: number,
    name: string,
    slug: string
}

let authors: Author[] = []

const prisma = new PrismaClient()


//          GET METHOD          //
// // // // // // // // // // // // //
export const getAuthors = async () => {
    const authors = await prisma.author.findMany()
    return authors
}

export const getById = async (id: number) => {
    const author = await prisma.author.findFirst({ where: { id: id } })
    return author
}

export const getBySlug = async (slug: string) => {
    let author:any
    try{
        author = await prisma.author.findFirst({ where: { slug: slug } })
        if(author === null){
            author = await getById(parseInt(slug,10))
        }
    } catch (err){
        console.log(err)
    }

    return author
}







export const addAuthor = (author: Author) => {
    authors.push(author)
}

export const deleteAuthor = (id: number) => {
    authors = authors.filter((author) => author.id !== id)
}

export const updateAuthor = (id: number, name: string, slug: string) => {
    const author = authors.find((author) => author.id === id)

    if(author) {
        author.name = name
        author.slug = slug
    } else {
        throw new Error('Not found')
    }
}

