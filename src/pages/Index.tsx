
import { ModuleGrid } from "@/components/ModuleGrid";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F6F7] to-[#E6E9F0]">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold text-[#1A1F2C] mb-4 tracking-tight">
            Изучаем Arduino
          </h1>
          <p className="text-xl text-[#403E43] max-w-2xl mx-auto leading-relaxed">
            Исследуйте мир микроконтроллеров Arduino через наши интерактивные обучающие модули. 
            Выберите интересующий вас раздел и начните своё путешествие в мир электроники.
          </p>
          <Button 
            onClick={() => navigate("/code-editor")}
            className="bg-[#0EA5E9] hover:bg-[#0284C7] mt-4"
          >
            Открыть редактор кода
          </Button>
        </div>
        <ModuleGrid />
      </div>
    </div>
  );
};

export default Index;
