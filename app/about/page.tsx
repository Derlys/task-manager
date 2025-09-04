import Image from "next/image";

export default function About(){
    return (
        <div className="overflow-hidden bg-grey-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="max-w-2xl text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance text-center">
                    Everything you need to save your notes.
                </p>
                <div className="relative mt-16 aspect-2432/1442 h-144 sm:h-auto sm:w-[calc(var(--container-7xl)-calc(var(--spacing)*16))]">
                    <div className={"flex justify-center"}>
                        <Image alt={'welcome' } width={500} height={500} src={"/logo.png" }

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}