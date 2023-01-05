import { FooterContent } from "@features/home/definitions/entities/footer";
import { SupportedLang } from "@/common/types";
import footerContentEn from "../../../../../content/en/footer.json";
import footerContentEs from "../../../../../content/es/footer.json";

export function getFooterContent(lang: SupportedLang): Promise<FooterContent> {
  if (lang === SupportedLang.EN) {
    return Promise.resolve(footerContentEn);
  }

  if (lang === SupportedLang.ES) {
    return Promise.resolve(footerContentEs);
  }

  throw new Error("Unsupported language");
}
