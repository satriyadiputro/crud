import { addTerm, getBySlug, getTerms } from "@/lib/terms"
import { NextRequest, NextResponse } from "next/server"
import slugify from "slugify"


function getParam(request:any, name:any, defaultValue:any) {
    let value = request.nextUrl.searchParams.get(name)
    if (value === null) { value = defaultValue }
    return value
  }

export const GET = async (request: Request, response: Response) => {
    try{
        let terms = null
        let orderParam = getParam(request,"order", "id")
        let searchParam = getParam(request,"search", null)

        const termSlugx = request.url.split("terms/")[1]
        const termSlug = termSlugx.split("?")[0]

        if (termSlug === "tags" ||termSlug === "categories" ){
            let orderby = null
            if (termSlug === "tags"){  orderby = "tag" }
            else{ orderby = "category" }

            const param = {
                order: orderParam,
                orderby: orderby,
                search: searchParam
            }
            terms = await getTerms(param)
        } else {
            terms = await getBySlug(termSlug)
        }

        return NextResponse.json(
            {message:"OK", data:terms},
            {status: 200})
    } catch (err){
        
        return NextResponse.json(
            {message:"Error", err},
            {status: 500})
    }
}

export const POST = async (request: Request, response: Response) => {
    try{
        let taxonomy = null
        const termSlugx = request.url.split("terms/")[1]
        const termSlug = termSlugx.split("?")[0]
        if (termSlug === "tags" ||termSlug === "categories" ){
            if (termSlug === "tags"){  taxonomy = "tag" }
            else{ taxonomy = "category" }
        }
        const data = await request.json()
        data.taxonomy = taxonomy

        const term = await addTerm(data)
        return NextResponse.json(
            {message:"OK", data:term},
            {status: 201})
        } catch (err){
            return NextResponse.json(
                {message:"Error", err},
                {status: 500})
            }
        }