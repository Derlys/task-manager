import { prisma } from "@/lib/prisma";

export async function createNote({
  title,
  content,
  authorId,
}: {
  title: string;
  content?: string;
  authorId: number;
}) {
  return prisma.note.create({
    data: {
      title,
      content,
      authorId,
    },
  });
}

export async function getNotes() {
  return prisma.note.findMany({
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });
}
