import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import devices from "./data-shop-device";

export default function ShopDevicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 border-0">
          <div className="w-full max-w-175">
            <h2 className="w-full text-4xl tracking-tighter sm:text-5xl">
              Shop the latest devices and expand your world
            </h2>
          </div>
        </div>
        <div className="min-w-full grid max-w-6xl items-start gap-8 lg:grid-cols-2">
          {devices.map((device) => (
            <div
              key={device.id}
              className="flex flex-col items-center text-center bg-white overflow-hidden group"
            >
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src={device.mainImage || "/placeholder.svg"}
                  alt={device.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full"
                />
              </div>
              <div className="relative -mt-8 z-10 w-1/2">
                <Image
                  src={device.productImage || "/placeholder.svg"}
                  alt={`${device.name} product`}
                  width={200}
                  height={100}
                  className="object-contain drop-shadow-lg opacity-0.3 w-full"
                />
              </div>
              <div className="p-6 flex flex-col items-center mt-6 space-y-4">
                <h3 className="text-2xl font-bold">{device.name}</h3>
                <p className="text-gray-600 max-w-xs">{device.description}</p>
                <Link href={device.href} passHref prefetch={false}>
                  <Button className="bg-[#007bff] cursor-pointer hover:bg-[#0056b3] text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg">
                    Shop now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
