import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LeadershipSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12">
        <div className="relative w-full\ aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/photo.jpeg"
            alt="Mark Zuckerberg speaking"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col items-centre justify-center space-y-6 lg:pl-12 text-left max-w-[525px]">
          <h2 className="text-4xl md:text-5xl text-left">
            Meet our leadership
          </h2>
          <p className="text-lg text-gray-600 text-left">
            Meta's leaders are guiding our company as mixed reality and AI
            evolve, helping to create the next evolution of digital connection.
          </p>
          <Link href="#" prefetch={false}>
            <Button className="cursor-pointer bg-[#007bff] hover:bg-[#0056b3] text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg w-fit">
              Get to know our leadership
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
