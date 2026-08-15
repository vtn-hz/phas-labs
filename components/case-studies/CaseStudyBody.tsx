import Image from "next/image";
import type { CaseStudyBlock } from "@/content/types";

export function CaseStudyBody({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <div className="mt-10 space-y-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-muted-foreground">
                {block.text}
              </p>
            );
          case "stat":
            return (
              <div key={index} className="border-l-2 border-accent pl-4">
                <p className="text-3xl font-semibold">{block.value}</p>
                <p className="text-sm text-muted-foreground">{block.label}</p>
              </div>
            );
          case "image":
            return (
              <Image
                key={index}
                src={block.src}
                alt={block.alt}
                width={960}
                height={540}
                className="rounded-2xl border border-border"
              />
            );
        }
      })}
    </div>
  );
}
