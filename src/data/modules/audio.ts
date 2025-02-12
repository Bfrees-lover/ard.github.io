import { Module } from "./types";

export const audioModules: Module[] = [
  {
    id: "sound-processing",
    title: "Обработка звука",
    description: "Изучите работу со звуком, создавайте музыкальные инструменты и аудио эффекты.",
    icon: "🎵",
    sections: [
      {
        title: "Основы работы со звуком",
        content: `Arduino может воспроизводить и анализировать звуковые сигналы.

![Аудио проекты](https://images.unsplash.com/photo-1558584673-c834fb1cc3ca)

Популярные компоненты:
• Пьезодинамики
• MP3 модули
• Микрофонные модули
• FFT анализаторы

⚠️ Важно: При работе с аудио учитывайте ограничения микроконтроллера по частоте дискретизации.`
      },
      {
        title: "Пример кода: Воспроизведение мелодии",
        content: `Простой пример воспроизведения мелодии через пьезодинамик:

\`\`\`cpp
#define BUZZER_PIN 9

// Ноты
#define NOTE_C4 262
#define NOTE_D4 294
#define NOTE_E4 330
#define NOTE_F4 349

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  // Воспроизведение простой мелодии
  tone(BUZZER_PIN, NOTE_C4, 500);
  delay(500);
  tone(BUZZER_PIN, NOTE_D4, 500);
  delay(500);
  tone(BUZZER_PIN, NOTE_E4, 500);
  delay(500);
  tone(BUZZER_PIN, NOTE_F4, 500);
  delay(1000);
}
\`\`\`

💡 Совет: Используйте библиотеку Tone для более сложных мелодий.`
      }
    ]
  }
];