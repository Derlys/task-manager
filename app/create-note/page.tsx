
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";



export default function CreateNotePage() {
    return (
        <div className={"flex flex-col items-center justify-center m-10 p-10"}>
            <Card >
                <CardHeader>
                    <CardTitle>Crea tu notica</CardTitle>
                    <CardDescription>Aquí puedes guardar todas tus ideas.</CardDescription>
                </CardHeader>
                <CardContent>

                        <Input type="text" name="text" placeholder="Tu notica"/>
                </CardContent>
                <CardFooter>
                    <Button>Guardar nota</Button>
                </CardFooter>
            </Card>
        </div>

    )

 }



