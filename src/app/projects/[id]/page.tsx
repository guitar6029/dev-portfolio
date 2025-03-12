import { connectToDatabase } from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import Link from "next/link";

export default async function Project({params: {id}} : {params: {id: string}}) {
    
const { db } = await connectToDatabase();

const project = await db
.collection("github-projects")
.findOne({ _id: new ObjectId(id) });
    
    return (
        <div className="min-h-screen p-4 flex flex-col">
            <div className="flex flex-col p-4">

            </div>
            <h1 className="text-4xl font-bold text-amber-400 underline">Project</h1>
            <h1 className="text-2xl font-bold">{project?.title}</h1>
            
        </div>
    )
}