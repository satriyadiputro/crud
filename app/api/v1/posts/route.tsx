import { addPost, getPosts, getPostsCount } from "@/lib/posts"
import { NextRequest, NextResponse } from "next/server"


// GET
//  /posts
//  page default 1, per_page default 10, order default desc, orderby default date, status default publish
//  /posts?page=1&per_page=10&order=desc&orderby=date&status=publish

//  /posts?page=1           @default 1
//  /posts?per_page=10      @default 10
//  /posts?order=desc       @default desc    [asc,desc] 
//  /posts?orderby=date     @default date      [date,author,relevance,title,slug,id]
//  /posts?status=publish   @default publish    [publish, draft]                        
//  /posts?search={query}
//  /posts?author={query}
//  /posts?categories={query}
//  /posts?tags={query}

function getParam(request:any, name:any, defaultValue:any) {
  let value = request.nextUrl.searchParams.get(name)
  if (value === null) { value = defaultValue }
  return value
}

export const GET = async (request: Request, response: Response) => {
  try{
    let pageParam = parseInt(getParam(request,"page", 1),10)
    let per_pageParam = parseInt(getParam(request,"per_page", 10),10)
    let orderParam = getParam(request,"order", "desc")
    let orderbyParam = getParam(request,"orderby", "date")
    let statusParam = getParam(request,"status", "publish")
    let searchParam = getParam(request,"search", null)
    let authorParam = getParam(request,"author", null)
    let categoryParam = getParam(request,"category", null)
    let tagParam = getParam(request,"tag", null)

    const param = {                       
      page: pageParam,
      per_page: per_pageParam,
      order: orderParam,
      orderby: orderbyParam,
      status: statusParam,
      search: searchParam,
      author: authorParam,
      category: categoryParam,
      tag: tagParam
    }

    const posts = await getPosts(param)
    const count = await getPostsCount(param)

    const page = {
      per_page: per_pageParam,
      total: count,
      totalPages: Math.ceil(count / per_pageParam),
      current: pageParam
    }

    return NextResponse.json(
      {message:"OK",data:posts, page: page },
      {status: 200},
      )
  } catch (err){
    return NextResponse.json(
      {message:"Error", err},
      {status: 500})
  }
}



// POST
export const POST = async (request: Request, response: Response) => {
  try{
    const data = await request.json()
    const post = await addPost(data)
    return NextResponse.json(
      {message:"OK", data:post},
      {status: 201})
  } catch (err){
    return NextResponse.json(
      {message:"Error", err},
      {status: 500})
  }
}

