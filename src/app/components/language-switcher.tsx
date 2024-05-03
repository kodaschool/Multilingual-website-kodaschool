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
        className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
