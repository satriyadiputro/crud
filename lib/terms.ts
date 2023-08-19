import { PrismaClient } from "@prisma/client"
import slugify from "slugify"

const prisma = new PrismaClient()

type Term = {
    id: number,
    slug: string,
    taxonomy: string,
    name: string,
    description: string,
    parentId: number
}

// // // // // // // // // // // // //
//             GET METHOD           //
// // // // // // // // // // // // //
export const getTerms = async (param:any) => {
    const terms = await prisma.term.findMany({
        where: {
            AND: [
                param.search ? { name: { contains: param.search } } : {},
                param.orderby ? { taxonomy: { equals: param.orderby } } : {},
            ]
        },
        orderBy: { [param.order]: "asc" },
        select:{
            id: true,
            slug: true,
            taxonomy: true,
            name: true
        }
    })

    console.log(terms)
    return terms
}

export const getById = async (id: number) => {
    const term = await prisma.term.findFirst({ where: { id: id }})
    return term
}

export const getBySlug = async (slug: string) => {
    let term:any
    try{
        term = await prisma.term.findFirst(
            { where: { slug: slug }, include: {
                posts: {
                    include: {
                        author: true
                    }
                }
            } }
        )
        if(term === null){
            term = await getById(parseInt(slug,10))
        }
    } catch (err){
        console.log(err)
    }

    return term
}



// id
// slug
// taxonomy
//name
// description
// parentId

// // // // // // // // // // // // //
//          POST METHOD          //
// // // // // // // // // // // // //
export const addTerm = async (data: any) => {
    try{
        let slug = slugify(data.name, {lower: true})
        
        const verifSlug = await prisma.term.findMany({
            where: { slug: {contains:slug}},
            select: {  slug: true }
        })

        let newSlug = slug

        if(verifSlug.length > 0){
            let match = verifSlug.find(val => val.slug == slug)
            if (match) {
                let num = parseInt(match.slug.slice(-1)) || 0
                num++
                newSlug = slug + num
                
                let duplicate = verifSlug.some(val => val.slug == newSlug)
                while(duplicate){
                    num++
                    newSlug = slug + num
                    duplicate = verifSlug.some(val => val.slug == newSlug)
                }
            }
            slug = newSlug
        } 

        const term = await prisma.term.create({
            data: {
                name: data.name,
                slug: slug,
                description: data.description,
                taxonomy: data.taxonomy,
                parentId: data.parentId,
            },
            select:{
                id:true,
                taxonomy: true,
                name:true,
                slug:true
            }
        });

        return term
        

    } catch (e) {
        console.log(e)
    }
    return data
}