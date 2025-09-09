"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateNotePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // 👈 inicializar hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);

    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        authorId: 1,
      }),
    });

    setTitle("");
    setContent("");
    setLoading(false);

    router.push("/notes-list");
  };

  return (
    <div className="flex flex-col items-center justify-center m-10 p-10 w-full max-w-lg">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Crea tu nota</CardTitle>
          <CardDescription>Aquí puedes guardar tus ideas.</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-3">
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título de la nota"
            />
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Contenido de la nota"
            />
          </CardContent>
          <CardFooter>
            <Button className="mt-5" type="submit" disabled={loading}>
              {loading ? "Guardando..." : "Guardar nota"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
