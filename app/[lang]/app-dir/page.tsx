import useTranslation from "next-translate/useTranslation";

export default function Page() {
  const { t } = useTranslation("home");
  const description = t("description");

  return <p>{description}</p>;
}
