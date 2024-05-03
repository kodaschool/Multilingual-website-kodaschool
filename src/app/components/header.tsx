import { useTranslations } from "next-intl";
import React from "react";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import LanguageSwitcher from "./language-switcher";
const Header = () => {
  const t = useTranslations("Navigation");
  return (
    <nav className="flex h-16 items-center justify-between">
      <Link href="/">
        <img src={"../[locale]/images/logo.png"} alt="Logo" />
      </Link>
      <ul className="flex gap-8">
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
