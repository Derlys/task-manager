import {Button} from "@/components/ui/button";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
      <div className={"flex flex-col items-center justify-center m-10 p-10"}>
          <Card >
              <CardHeader>
                  <CardTitle>Crea tu notica</CardTitle>
                  <CardDescription>Aquí puedes guardar todas tus ideas.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Button ><Link href="/create-note">crea una nota</Link></Button>
              </CardContent>
              <CardFooter>
                  <p>Autor: derlys</p>
              </CardFooter>
          </Card>
      </div>

  );
}
