import Link from "next/link";
import { Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import * as React from "react";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer id="contact" className="w-full h-full bg-white dark:bg-gray-900 py-12 md:py-16 lg:py-20 transition-colors duration-500">
      <div className="container w-full max-w-full px-4 md:px-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-start transition-colors duration-500"></div>

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 text-left">
        <div className="flex flex-col space-y-6">
          <Link
            href="#"
            className="flex items-center justify-start"
            prefetch={false}
          >
            <div>
              <Image
                src="/images/logo.png"
                alt="Описание моей SVG-иконки"
                width={120}
                height={60}
                className="w-26 h-15 object-contain block dark:hidden"
                style={{ width: "auto", height: "auto" }}
              />
              <Image
                src="/images/logo_for_dark_mode.svg"
                alt="Dark Logo"
                width={120}
                height={60}
                className="w-26 h-15 object-contain bg-transparent hidden dark:block"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </Link>

          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              prefetch={false}
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">{t("footer.facebook")}</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              prefetch={false}
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">{t("footer.instagram")}</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              prefetch={false}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">X {t("footer.twitter")}</span>
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-end justify-center gap-8 space-x-2 mb-4">
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100 transition-colors duration-500">
              {t("footer.stacklvl")}
            </span>
          </div>
          <p className="text-gray-400 dark:text-gray-400 min-h-[48px] transition-colors duration-500">
            © 2025 {t("footer.stacklvl")} {t("footer.innovation")}
          </p>
        </div>
      </div>
    </footer>
  );
}

