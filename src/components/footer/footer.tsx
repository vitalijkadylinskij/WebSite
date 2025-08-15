"use client"
import Link from "next/link";
import { Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";


export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="w-full h-full bg-white py-12 md:py-16 lg:py-20">
      <div className="container w-full  max-w-full px-4 md:px-6 mt-12 pt-8 border-t border-gray-200 flex justify-start"></div>
      <div
        className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 text-left">
        <div className="flex flex-col space-y-6">
          <Link
            href="#"
            className="flex items-center justify-start"
            prefetch={false}
          >
            <div>
              <Image
                src="/images/Stack_lvl_logo.png"
                alt="Описание моей SVG-иконки"
                width={120}
                height={60}
                className="w-26 h-15 object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </Link>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900"
              prefetch={false}
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">{t("footer.facebook")}</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900"
              prefetch={false}
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">{t("footer.instagram")}</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900"
              prefetch={false}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">X {t("footer.twitter")}</span>
            </Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-end justify-center gap-8 space-x-2 mb-4">
            {/*<div className="flex items-center w-30 h-18">*/}
            {/*  <Image*/}
            {/*    src="/images/Stack_lvl_logo.png"*/}
            {/*    alt="СТЭКЛЭВЭЛГРУПП Logo"*/}
            {/*    width={120}*/}
            {/*    height={100}*/}
            {/*    className="object-cover"*/}
            {/*  />*/}
            {/*</div>*/}
            <span className="text-lg font-bold">{t("footer.stacklvl")}</span>
          </div>
          <p className="text-gray-400 min-h-[48px]">© 2025 {t("footer.stacklvl")} {t("footer.innovation")}</p>
        </div>
      </div>
    </footer>
  );
}
