"use client";
import { TbWorldDownload } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useTransition, ChangeEvent } from "react";

const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <div className="relative">
      <TbWorldDownload className="absolute left-2 z-20 top-2" />
      <select
        defaultValue={localeActive}
        className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg block w-full py-2 px-8 "
        onChange={handleSelect}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
