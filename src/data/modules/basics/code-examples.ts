import { ModuleSection } from "../types";

export const codeExamplesSection: ModuleSection = {
  title: "Примеры кода",
  content: `Базовая структура скетча:
\`\`\`cpp
void setup() {
  // Код здесь выполняется один раз при запуске
  Serial.begin(9600); // Инициализация последовательного порта
  pinMode(13, OUTPUT); // Настройка пина как выход
}

void loop() {
  // Код здесь выполняется циклически
  digitalWrite(13, HIGH); // Включить светодиод
  delay(1000);           // Ждать 1 секунду
  digitalWrite(13, LOW);  // Выключить светодиод
  delay(1000);           // Ждать 1 секунду
}
\`\`\`

💡 Оптимизация кода: Используйте millis() вместо delay() для неблокирующих задержек:
\`\`\`cpp
unsigned long previousMillis = 0;
const long interval = 1000;

void loop() {
  unsigned long currentMillis = millis();
  
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    digitalWrite(13, !digitalRead(13));
  }
}
\`\`\``
};