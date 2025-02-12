import { Module } from "../types";
import { introSection } from "./intro";
import { specificationsSection } from "./specifications";
import { codeExamplesSection } from "./code-examples";
import { functionsSection } from "./functions";

export const basicsModule: Module = {
  id: "basics",
  title: "Основы Arduino",
  description: "Изучите основные принципы работы с Arduino, включая установку среды разработки и базовые команды.",
  icon: "⚡",
  sections: [
    introSection,
    specificationsSection,
    codeExamplesSection,
    functionsSection
  ]
};