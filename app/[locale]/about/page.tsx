"use client";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  return <div>{t("aboutText")}</div>;
}
