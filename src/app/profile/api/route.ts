import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest){
    const requestHeader = new Headers(request.headers);
    console.log(requestHeader.get("Authorization"));
    const headerList = headers();
    console.log(headerList.get("Authorization"));
    return new Response("<h1>Profile API Data</h1>",{
        headers:{
            "Content-Type":"text/html"
        }
    });
}