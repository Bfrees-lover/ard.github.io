
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { ModuleDetail } from "./components/ModuleDetail";
import CodeEditor from "./pages/CodeEditor";

// Создаем клиент для работы с React Query
const queryClient = new QueryClient();

// Основной компонент приложения
const App = () => (
  // QueryClientProvider нужен для работы с данными и кэшированием
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider для всплывающих подсказок */}
    <TooltipProvider>
      {/* Компоненты для уведомлений */}
      <Toaster />
      <Sonner />
      {/* Роутер для навигации между страницами */}
      <BrowserRouter>
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Index />} />
          {/* Страница с детальной информацией о модуле */}
          <Route path="/module/:id" element={<ModuleDetail />} />
          {/* Страница редактора кода */}
          <Route path="/code-editor" element={<CodeEditor />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
