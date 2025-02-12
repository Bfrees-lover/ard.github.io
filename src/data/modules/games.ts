
import { Module } from "./types";

export const gameModules: Module[] = [
  {
    id: "snake-game",
    title: "Змейка на Arduino",
    description: "Создайте классическую игру змейка используя LED матрицу и джойстик.",
    icon: "🎮",
    sections: [
      {
        title: "Компоненты для проекта",
        content: `Для создания игры змейка потребуется:
• LED матрица 8x8
• Джойстик
• Arduino UNO/NANO
• Макетная плата
• Соединительные провода

![LED Матрица](https://images.unsplash.com/photo-1553406830-ef2513450d76)

💡 Совет: Используйте MAX7219 для управления LED матрицей - это упростит работу с дисплеем.`
      },
      {
        title: "Код игры",
        content: `Базовый код для игры змейка:

\`\`\`cpp
#include <LedControl.h>

// Пины для подключения MAX7219
#define DIN_PIN 12
#define CLK_PIN 11
#define CS_PIN 10

// Пины джойстика
#define JOY_X A0
#define JOY_Y A1

// Создаем объект для управления матрицей
LedControl lc = LedControl(DIN_PIN, CLK_PIN, CS_PIN, 1);

void setup() {
  lc.shutdown(0, false);  // Включаем матрицу
  lc.setIntensity(0, 8); // Устанавливаем яркость (0-15)
  lc.clearDisplay(0);    // Очищаем дисплей
}

void loop() {
  // Читаем значения с джойстика
  int x = analogRead(JOY_X);
  int y = analogRead(JOY_Y);
  
  // Определяем направление движения
  if(x < 300) moveLeft();
  else if(x > 700) moveRight();
  if(y < 300) moveUp();
  else if(y > 700) moveDown();
  
  delay(100); // Задержка для контроля скорости игры
}
\`\`\`

⚠️ Важно: Не забудьте установить библиотеку LedControl через менеджер библиотек Arduino IDE.`
      }
    ]
  }
];
