import { useTranslations } from "next-intl";
import { highlightWords } from "../utilis";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  const t = useTranslations("HomePage");
  const titleOne = t("titleOne");
  const titleTwo = t("titleTwo");
  const wordOne = titleOne.split(" ");
  const wordTwo = titleTwo.split(" ");

  return (
    <main className="my-24">
      <div className="text-center w-full m-auto">
        <p className="text-6xl leading-10 font-bold">
          {highlightWords(wordOne)}
        </p>
        <p className="text-6xl leading-10 font-bold my-4">
          {highlightWords(wordTwo)}
        </p>
        <p className="w-[70%] m-auto my-2">{t("desc")}</p>
        <button className="rounded-3xl bg-primary p-3 text-white justify-center m-auto my-4 gap-2 flex h-auto items-center">
          {t("btn")}
          <FaArrowRightLong />
        </button>
      </div>
    </main>
  );
}
