import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center p-10">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Crea tu noticia</CardTitle>
          <CardDescription>
            Aquí puedes guardar todas tus ideas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>
            <Link href="/create-note">Crea una nota</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
