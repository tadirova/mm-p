import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {works} from "@/constants/constants";

const artWorks = works.map((artwork) => (
    <figure key={`${artwork.artist} + ${artwork.art}`} className="shrink-0">
      <div className="overflow-hidden rounded-md">
        <Image
            src={artwork.art}
            alt={`Photo by ${artwork.artist}`}
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
        />
      </div>
      <figcaption className="text-muted-foreground pt-2 text-xs">
        Photo by{" "}
        <span className="text-foreground font-semibold">
                {artwork.artist}
              </span>
      </figcaption>
    </figure>
));


export default function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-full rounded-md">
      <div className="flex w-max space-x-4 p-4">
        {artWorks}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
