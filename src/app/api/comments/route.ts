import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await getCurrentUser();

  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    const { postId, text } = await req.json(); 

    

    const newPost = await prisma.comment.create({
      data: {
        postId,
        text,
        authorId: user.email,
      },
    });

    return NextResponse.json({newPost},{status:200});

    
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
  }
}
