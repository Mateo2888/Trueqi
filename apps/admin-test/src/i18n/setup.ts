import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { defaultI18nOptions } from "../../../../packages/admin/src/i18n/config";
import adminTranslations from "../../../../packages/admin/src/i18n/translations";
import customResources from "./index";

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...target };

  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === "object" &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(
        target[key] as Record<string, unknown>,
        source[key] as Record<string, unknown>,
      );
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

if (!i18n.isInitialized) {
  const mergedResources = deepMerge(
    adminTranslations as unknown as Record<string, unknown>,
    customResources as unknown as Record<string, unknown>,
  );

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ...defaultI18nOptions,
      // Default language from mercur.config.ts (i18n.defaultLanguage: 'es').
      // LanguageDetector will override this on subsequent loads if the user
      // has stored a different language preference in cookie/localStorage.
      lng: "es",
      resources: mergedResources,
    });
}
