import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {ScrollAreaHorizontalDemoProps} from "@/components/sections/typings";

const ScrollAreaHorizontalDemo = ({ items, className = "" }: ScrollAreaHorizontalDemoProps) => {
    return (
        <ScrollArea className={`w-full rounded-md ${className}`}>
            <div className="flex w-max space-x-4 p-4">
                {items.map((artwork) => (
                    <figure key={`${artwork.artist}-${artwork.art}`} className="shrink-0">
                        <div className="overflow-hidden rounded-md">
                            <Image
                                src={artwork.art}
                                alt={`Photo ${artwork.artist}`}
                                className="aspect-[3/4] h-fit w-fit object-cover"
                                width={300}
                                height={400}
                            />
                        </div>
                        <figcaption className="text-muted-foreground pt-2 text-xs">
                            Photo {" "}
                            <span className="text-foreground font-semibold">
                {artwork.artist}
              </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};

export default ScrollAreaHorizontalDemo;