import { getBySlug } from "@/lib/pages"
import { NextRequest, NextResponse } from "next/server"
import slugify from "slugify"


export const GET = async (request: Request, response: Response) => {
    try{
        const pageSlug = request.url.split("pages/")[1]
        const pages = await getBySlug(pageSlug)

        return NextResponse.json(
            {message:"OK", pages},
            {status: 200})
    } catch (err){
        
        return NextResponse.json(
            {message:"Error", err},
            {status: 500})
    }
}