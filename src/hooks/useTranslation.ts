import { useTranslation as useI18NextTranslation } from "react-i18next";

const useTranslation = () => {
  const { t, i18n } = useI18NextTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return { t, changeLanguage };
};

export default useTranslation;
