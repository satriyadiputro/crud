import { addAuthor, getAuthors } from "@/lib/authors"
import { NextRequest, NextResponse } from "next/server"
import slugify from "slugify"

export const GET = async (request: Request, response: Response) => {
  try{
    const authors = await getAuthors()
    return NextResponse.json(
      {message:"OK", authors},
      {status: 200})
  } catch (err){
    return NextResponse.json(
      {message:"Error", err},
      {status: 500})
  }
}

export const POST = async (request: Request, response: Response) => {
  const {name} = await request.json()
  const slug = slugify(name, {lower: true})
  try {
    const author = { id: 0,name: name, slug: slug }
    addAuthor(author)

    return NextResponse.json(
      {message:"OK", author},
      {status: 201})
  } catch (err){
    return NextResponse.json(
      {message:"Error", err},
      {status: 500})
  }
}
