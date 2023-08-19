import { addTerm, getTerms } from "@/lib/terms"
import { NextRequest, NextResponse } from "next/server"

// GET
//  /terms
//  order default desc
//  /terms?order=desc


//  /terms?order=desc       @default id      [id,name] 
//  /terms?orderby={query}  @default null    [tag, category]                    
//  /terms?search={query}


function getParam(request:any, name:any, defaultValue:any) {
  let value = request.nextUrl.searchParams.get(name)
  if (value === null) { value = defaultValue }
  return value
}

export const GET = async (request: Request, response: Response) => {
  try{
    let orderParam = getParam(request,"order", "id")
    let orderbyParam = getParam(request,"orderby", null)
    let searchParam = getParam(request,"search", null)

    const param = {                       
      order: orderParam,
      orderby: orderbyParam,
      search: searchParam,
    }

    const terms = await getTerms(param)
    return NextResponse.json(
      {message:"OK", data: terms},
      {status: 200})
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