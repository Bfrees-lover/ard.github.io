
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function CodeEditor() {
  const [code, setCode] = useState(`void setup() {
  // код инициализации
}

void loop() {
  // основной код
}`);
  const { toast } = useToast();

  const handleCompile = () => {
    toast({
      title: "Компиляция",
      description: "В данный момент компиляция недоступна в веб-версии. Скопируйте код и используйте Arduino IDE.",
    });
  };

  const handleUpload = () => {
    toast({
      title: "Загрузка на плату",
      description: "В данный момент загрузка недоступна в веб-версии. Скопируйте код и используйте Arduino IDE.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F6F7] to-[#E6E9F0] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#1A1F2C]">Редактор кода Arduino</h1>
          <div className="space-x-4">
            <Button 
              onClick={handleCompile}
              className="bg-[#0EA5E9] hover:bg-[#0284C7]"
            >
              Компилировать
            </Button>
            <Button 
              onClick={handleUpload}
              className="bg-[#10B981] hover:bg-[#059669]"
            >
              Загрузить на плату
            </Button>
          </div>
        </div>
        
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="font-mono min-h-[600px] bg-white border-[#E2E2E2] text-[#1A1F2C]"
          placeholder="Введите код Arduino..."
        />
      </div>
    </div>
  );
}
