
import { modules } from "@/data/modules";
import { ModuleCard } from "./ModuleCard";

// Компонент для отображения сетки модулей на главной странице
export function ModuleGrid() {
  return (
    // Адаптивная сетка:
    // - 1 колонка на мобильных устройствах
    // - 2 колонки на планшетах
    // - 3 колонки на десктопах
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {/* Отображаем карточку для каждого модуля */}
      {modules.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
}
