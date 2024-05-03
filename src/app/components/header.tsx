import { useTranslations } from "next-intl";
import React from "react";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import LanguageSwitcher from "./language-switcher";
const Header = () => {
  const t = useTranslations("Navigation");
  return (
    <nav className="flex container h-16 items-center justify-between">
      <Link href="/">
        <h2 className="text-white">KaraPay</h2>
      </Link>
      <ul className="flex gap-8 text-white">
        <li>{t("about")}</li>
        <li>{t("pricing")}</li>
        <li>{t("features")}</li>
        <li>{t("contact")}</li>
      </ul>
      <div className="flex gap-4 h-auto items-center">
        <button className="rounded-3xl bg-primary px-4 py-2 text-white ">
          {t("btn")}
        </button>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Header;
