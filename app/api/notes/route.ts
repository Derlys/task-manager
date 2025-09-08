import { NextResponse } from "next/server";
import { createNote, getNotes } from "@/lib/services/notes";

export async function POST(req: Request) {
  try {
    const { title, content, authorId } = await req.json();

    if (!title || !authorId) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 },
      );
    }

    const note = await createNote({ title, content, authorId });
    return NextResponse.json(note, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al crear la nota" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const notes = await getNotes();
    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al obtener notas" },
      { status: 500 },
    );
  }
}
