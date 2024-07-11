import { NextRequest } from "next/server";
import { headers,cookies } from "next/headers";

export async function GET(request: NextRequest){
    const requestHeader = new Headers(request.headers);
    console.log(requestHeader.get("Authorization"));
    const headerList = headers();
    console.log(headerList.get("Authorization"));

    //Cookie Approach 2
    cookies().set("resultsPerPage","20");
    console.log(cookies().get("resultsPerPage"));

    //Cookie Approach 1
    const theme = request.cookies.get("theme");
    console.log(theme);
    return new Response("<h1>Profile API Data</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark",
        }
    });
}