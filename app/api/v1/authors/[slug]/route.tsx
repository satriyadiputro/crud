import { getBySlug } from "@/lib/authors"
import { NextRequest, NextResponse } from "next/server"
import slugify from "slugify"


export const GET = async (request: Request, response: Response) => {
    try{
        const authorSlug = request.url.split("authors/")[1]
        const authors = await getBySlug(authorSlug)

        return NextResponse.json(
            {message:"OK", authors},
            {status: 200})
    } catch (err){
        
        return NextResponse.json(
            {message:"Error", err},
            {status: 500})
    }
}