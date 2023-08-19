import { addPage, getPages } from "@/lib/pages"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: Request, response: Response) => {
  try{
    const authors = await getPages()
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
  try{
    const data = await request.json()
    const page = await addPage(data)
    return NextResponse.json(page,{status: page.status})
  } catch (err){
    return NextResponse.json( {status: 500, message:"Internal Server Error", data:err}, {status: 500} )
  }
}