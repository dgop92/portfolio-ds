import { FooterContent } from "@features/home/definitions/entities/footer";
import { SupportedLang } from "@/common/types";

export async function getFooterContent(lang: SupportedLang): Promise<FooterContent> {
  const content = await import(`../../../../../content/${lang}/footer.json`);
  return content.default;
}
