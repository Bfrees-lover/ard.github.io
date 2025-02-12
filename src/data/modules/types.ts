export interface ModuleSection {
  title: string;
  content: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  content?: string;  // Для обратной совместимости
  sections?: ModuleSection[];  // Для новой структуры
}