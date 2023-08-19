import { getBySlug } from "@/lib/posts"
import { NextRequest, NextResponse } from "next/server"
import slugify from "slugify"


export const GET = async (request: Request, response: Response) => {
    try{
        const postSlug = request.url.split("posts/")[1]
        const posts = await getBySlug(postSlug)

        return NextResponse.json(
            {message:"OK", data:posts},
            {status: 200})
    } catch (err){
        
        return NextResponse.json(
            {message:"Error", err},
            {status: 500})
    }
}