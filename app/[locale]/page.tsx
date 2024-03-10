"use client";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Index");

  return <div>{t("helloWorld")}</div>;
}
