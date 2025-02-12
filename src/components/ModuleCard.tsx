
import { Module } from "@/data/modules";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ModuleCardProps {
  module: Module;
}

// Компонент карточки отдельного модуля
export function ModuleCard({ module }: ModuleCardProps) {
  const navigate = useNavigate();

  return (
    // Анимация при наведении
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        // Стили карточки:
        // - Тень при наведении
        // - Анимация перехода
        // - Курсор-указатель
        // - Цвета границ и фона
        className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border-[#E2E2E2] hover:border-[#0EA5E9]"
        // При клике переходим на страницу модуля
        onClick={() => navigate(`/module/${module.id}`)}
      >
        <CardHeader>
          {/* Иконка модуля */}
          <div className="text-4xl mb-4 bg-[#F8F9FA] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            {module.icon}
          </div>
          {/* Заголовок модуля */}
          <CardTitle className="text-xl text-[#1A1F2C] mb-2">{module.title}</CardTitle>
          {/* Описание модуля */}
          <CardDescription className="text-[#403E43] leading-relaxed">
            {module.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
