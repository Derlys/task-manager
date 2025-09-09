import { getNotes } from "@/lib/services/notes";

export default async function NotesListPage() {
  const notes = await getNotes();

  return (
    <div className="m-10 p-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notas guardadas</h1>

      {notes.length === 0 ? (
        <p className="text-gray-500">Todavía no hay notas guardadas.</p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note) => (
            <li key={note.id} className="p-4 rounded-xl bg-gray-100 shadow-sm">
              <h2 className="font-semibold">{note.title}</h2>
              {note.content && (
                <p className="text-sm text-gray-700 mt-1">{note.content}</p>
              )}
              <p className="text-xs text-gray-500 mt-2">
                Autor: {note.author?.name} ({note.author?.email})
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
