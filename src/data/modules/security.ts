import { Module } from "./types";

export const securityModules: Module[] = [
  {
    id: "fingerprint",
    title: "Биометрическая защита",
    description: "Создавайте проекты с использованием сканера отпечатков пальцев и других биометрических датчиков.",
    icon: "🔐",
    sections: [
      {
        title: "Работа со сканером отпечатков",
        content: `Биометрические датчики позволяют создавать надежные системы контроля доступа.

![Сканер отпечатков](https://images.unsplash.com/photo-1614064641938-3bbee52942c7)

Основные компоненты:
• Сканер отпечатков FPM10A
• RFID модули
• Биометрические датчики

💡 Совет: Всегда храните биометрические данные в зашифрованном виде.`
      },
      {
        title: "Пример кода: Сканер отпечатков",
        content: `Пример использования сканера отпечатков пальцев FPM10A:

\`\`\`cpp
#include <Adafruit_Fingerprint.h>
#include <SoftwareSerial.h>

// Создаем программный последовательный порт
SoftwareSerial mySerial(2, 3); // RX, TX

Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

void setup() {
  Serial.begin(9600);
  finger.begin(57600);
  
  if (finger.verifyPassword()) {
    Serial.println("Сканер отпечатков найден!");
  } else {
    Serial.println("Сканер не найден :(");
    while (1) { delay(1); }
  }
}

void loop() {
  // Получаем изображение отпечатка
  int p = finger.getImage();
  if (p != FINGERPRINT_OK) return;

  // Преобразуем изображение
  p = finger.image2Tz();
  if (p != FINGERPRINT_OK) return;

  // Ищем совпадение
  p = finger.fingerFastSearch();
  if (p == FINGERPRINT_OK) {
    Serial.println("Отпечаток найден!");
    Serial.print("ID #"); 
    Serial.println(finger.fingerID);
  } else {
    Serial.println("Отпечаток не найден");
  }
  delay(50);
}
\`\`\`

⚠️ Важно: Не забудьте установить библиотеку Adafruit_Fingerprint.`
      }
    ]
  }
];