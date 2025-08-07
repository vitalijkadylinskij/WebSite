import Image from "next/image";
import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import newsItems from "./data-news";

export default function NewsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 w-full max-w-full">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-5">
            <div className="w-full max-w-175">
              <h2 className="text-4xl tracking-tighter sm:text-5xl">
                Catch up on the latest news
              </h2>
            </div>
            <Button className="bg-[#ffffff] cursor-pointer border border-gray-300 hover:border hover:transition hover:border-gray-400 hover:bg-[#ffffff] text-black px-8 py-3 rounded-full text-lg font-medium shadow-lg mt-4">
              View All News
            </Button>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3 min-h-full">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              passHref
              className="group"
              prefetch={false}
            >
              <Card
                key={item.id}
                className="flex flex-col border-none overflow-hidden cursor-pointer h-full"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  width={300}
                  height={200}
                  alt={item.title}
                  className="aspect-[3/2] object-cover rounded-xl w-full h-full"
                />
                <CardHeader>
                  <CardTitle className="text-lg text-left font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <div className="flex justify-start pt-0">
                  <Button variant="link" className="cursor-pointer px-0">
                    <ArrowRight className="ml-1 h-4 w-4 border border-gray-400 rounded-full" />
                    Read More
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
