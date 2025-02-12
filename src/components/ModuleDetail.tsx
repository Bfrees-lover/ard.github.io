import { useParams, useNavigate } from "react-router-dom";
import { modules } from "@/data/modules";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function ModuleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const module = modules.find((m) => m.id === id);

  if (!module) {
    return <div>Модуль не найден</div>;
  }

  // Функция для рендеринга контента, независимо от формата
  const renderContent = (content: string) => {
    return content.split('```').map((block, index) => {
      if (index % 2 === 1) {
        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="my-4"
          >
            <div className="bg-[#1A1F2C] text-white p-4 rounded-lg shadow-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{block.replace('cpp\n', '')}</code>
              </pre>
            </div>
          </motion.div>
        );
      } else {
        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="my-4"
          >
            {block.split('\n').map((paragraph, pIndex) => {
              if (paragraph.trim().startsWith('•')) {
                return (
                  <li key={pIndex} className="text-gray-700 ml-4 list-disc">
                    {paragraph.trim().substring(1)}
                  </li>
                );
              }
              if (paragraph.trim().startsWith('📊')) {
                return (
                  <div key={pIndex} className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-4">
                    <p className="text-blue-800 font-semibold">
                      {paragraph.trim()}
                    </p>
                  </div>
                );
              }
              if (paragraph.trim().startsWith('💡')) {
                return (
                  <div key={pIndex} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-4">
                    <p className="text-yellow-800 font-semibold">
                      {paragraph.trim()}
                    </p>
                  </div>
                );
              }
              if (paragraph.trim().startsWith('⚠️')) {
                return (
                  <div key={pIndex} className="bg-red-50 p-4 rounded-lg border border-red-200 my-4">
                    <p className="text-red-800 font-semibold">
                      {paragraph.trim()}
                    </p>
                  </div>
                );
              }
              if (paragraph.trim().startsWith('![')) {
                const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
                if (match) {
                  const [, alt, src] = match;
                  return (
                    <div key={pIndex} className="my-6">
                      <img 
                        src={src} 
                        alt={alt} 
                        className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-500 mt-2">{alt}</p>
                    </div>
                  );
                }
              }
              return paragraph.trim() && (
                <p key={pIndex} className="text-gray-700">
                  {paragraph}
                </p>
              );
            })}
          </motion.div>
        );
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Button 
        variant="ghost" 
        className="mb-6"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Назад
      </Button>
      
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-6xl mb-4 animate-bounce">{module.icon}</div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            {module.title}
          </h1>
          <p className="text-lg text-gray-600 mt-2">{module.description}</p>
        </motion.div>

        {module.sections ? (
          // Новый формат с sections
          module.sections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">{section.title}</h2>
              <div className="prose max-w-none">
                {renderContent(section.content)}
              </div>
            </Card>
          ))
        ) : module.content ? (
          // Старый формат с единым content
          <Card className="p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100">
            <div className="prose max-w-none">
              {renderContent(module.content)}
            </div>
          </Card>
        ) : null}
      </div>
    </div>
  );
}