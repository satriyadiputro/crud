import { PrismaClient } from "@prisma/client"
import slugify from "slugify"

const prisma = new PrismaClient()

type Post = {
    id: number,
    published: boolean,
    slug: string,
    title: string,
    excerpt: string,
    description: string,
    content: string,
    thumbnail: string,
    authorId: number,
    term: [],
    postDate: Date,
    createdAt: Date,
    updatedAt: Date
}

// // // // // // // // // // // // //
//            GET METHOD            //
// // // // // // // // // // // // //
export const getPosts = async (param:any) => {
    const status = param.status === "publish" ? true : false;

    let orderby = param.orderby
    if(orderby === "date"){ orderby = "postDate" }

    const posts = await prisma.post.findMany({
        where: {
            OR: [
                {
                    AND: [
                        { published: { equals: status } },
                        param.search ? { title: { contains: param.search } } : {},
                        param.search ? { content: { contains: param.search } } : {},
                        param.author ? { author: { name: { contains: param.author } } } : {},
                        param.tag ? { term: {
                            some: {
                                AND: [
                                    { taxonomy: "tag"},
                                    { name: { contains: param.tag } }
                                ]
                            }
                        }} : {},
                        param.category ? { term: {
                            some: {
                                AND: [
                                    { taxonomy: "category" },
                                    { name: { contains: param.category } }
                                ]
                            }
                        }} : {}
                    ]
                }
            ]
        },
        orderBy: { [orderby]: param.order },
        skip: (param.page - 1) * param.per_page,
        take: param.per_page,
        select: {
            slug: true,
            title: true,
            excerpt: true,
            description: true,
            content: true,
            thumbnail: true,
            postDate: true,
            term: {
                select: {
                    taxonomy: true,
                    name: true,
                    slug: true
                }
            },
            author: {
                select: {
                    name: true,
                    slug: true
                }
            }
        }
    })
    return posts
}


export const getPostsCount = async (param:any) => {
    const status = param.status === "publish" ? true : false;

    let orderby = param.orderby
    if(orderby === "date"){ orderby = "postDate" }

    const count = await prisma.post.count({
        where: {
            OR: [
                {
                    AND: [
                        { published: { equals: status } },
                        param.search ? { title: { contains: param.search } } : {},
                        param.search ? { content: { contains: param.search } } : {},
                        param.author ? { author: { name: { contains: param.author } } } : {},
                        param.tag ? { term: {
                            some: {
                                AND: [
                                    { taxonomy: "tag"},
                                    { name: { contains: param.tag } }
                                ]
                            }
                        }} : {},
                        param.category ? { term: {
                            some: {
                                AND: [
                                    { taxonomy: "category" },
                                    { name: { contains: param.category } }
                                ]
                            }
                        }} : {}
                    ]
                }
            ]
        },
    })
    return count
}

export const getById = async (id: number) => {
    const post = await prisma.post.findFirst({
        where: { id: id },
        select: {
            slug: true,
            title: true,
            excerpt: true,
            description: true,
            content: true,
            thumbnail: true,
            postDate: true,
            term: {
                select: {
                    taxonomy: true,
                    name: true,
                    slug: true
                }
            },
            author: {
                select: {
                    name: true,
                    slug: true
                }
            }
        }
    })
    return post
}

export const getBySlug = async (slug: string) => {
    let post:any
    try{
        post = await prisma.post.findFirst({
            where: { slug: slug },
            select: {
                slug: true,
                title: true,
                excerpt: true,
                description: true,
                content: true,
                thumbnail: true,
                postDate: true,
                term: {
                    select: {
                        taxonomy: true,
                        name: true,
                        slug: true
                    }
                },
                author: {
                    select: {
                        name: true,
                        slug: true
                    }
                }
            }
        }
        )
        if(post === null){
            post = await getById(parseInt(slug,10))
        }
    } catch (err){
        console.log(err)
    }

    return post
}


// // // // // // // // // // // // //
//          POST METHOD          //
// // // // // // // // // // // // //
export const addPost = async (data: any) => {
    try{
        const title = data.title
        let slug = slugify(title, {lower: true})
        const excerpt = data.excerpt
        const description = data.description
        const content = data.content
        const thumbnail = data.thumbnail
        const postDate = data.postdate
        const term = data.term
        const author = data.author

        const verifSlug = await prisma.post.findMany({
            where: { slug: {contains:slug}},
            select: { slug: true }
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

        const post = await prisma.post.create({
            data: {
                title: title,
                slug: slug,
                excerpt: excerpt,
                content: content,
                description: description,
                thumbnail: thumbnail,
                postDate: postDate,
                author: {
                    connect: {
                        id: author
                    }
                },
                term: {
                    connect: term.map(id => ({ id }))
                }
            },
            select:{
                id:true,
                title:true,
                slug:true
            }
        });

        return post
        

    } catch (e) {
        console.log(e)
    }
    return data
}