import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(_request: Request, {params}:{params:{id:string}}){
    if(parseInt(params.id)>comments.length) {
        redirect("/comments");
    }
    const comment = comments.find((comment)=>comment.id === parseInt(params.id));
    return Response.json( comment );
}

export async function PATCH(request:Request, {params}:{params:{id:string}}) {
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex((comment)=> comment.id === parseInt(params.id) )
    comments[index].text = text;
    return Response.json(comments[index]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
    if (index !== -1) {
        const deleteComment = comments.splice(index, 1)[0]; // Use splice to remove 1 element starting from index
        console.log("After deletion:", comments);
        return Response.json(deleteComment);
    } else {
        return new Response("Comment not found", { status: 404 });
    }
}