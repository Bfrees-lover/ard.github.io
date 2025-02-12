
import { Module } from "./types";

export const homeAutomationModules: Module[] = [
  {
    id: "smart-home",
    title: "Умный дом на Arduino",
    description: "Создайте систему умного дома с датчиками температуры, влажности и управлением освещением.",
    icon: "🏠",
    sections: [
      {
        title: "Основные компоненты",
        content: `Для создания базовой системы умного дома понадобится:
• Arduino MEGA
• DHT22 (датчик температуры и влажности)
• Реле для управления освещением
• ESP8266 для Wi-Fi подключения
• LCD дисплей для отображения информации

![Умный дом](https://images.unsplash.com/photo-1558002038-1055907df827)

💡 Совет: Используйте MQTT протокол для связи между устройствами умного дома.`
      },
      {
        title: "Пример кода",
        content: `Базовый код для системы умного дома:

\`\`\`cpp
#include <DHT.h>
#include <LiquidCrystal_I2C.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

#define DHTPIN 2
#define DHTTYPE DHT22
#define RELAY_PIN 3

DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(9600);
  dht.begin();
  lcd.init();
  lcd.backlight();
  pinMode(RELAY_PIN, OUTPUT);
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  
  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(t);
  lcd.print("C");
  
  lcd.setCursor(0, 1);
  lcd.print("Hum: ");
  lcd.print(h);
  lcd.print("%");
  
  // Автоматическое управление освещением
  if(t > 25) {
    digitalWrite(RELAY_PIN, HIGH);
  } else {
    digitalWrite(RELAY_PIN, LOW);
  }
  
  delay(2000);
}
\`\`\`

⚠️ Важно: При работе с реле соблюдайте технику безопасности и не подключайте высокое напряжение без соответствующей защиты.`
      }
    ]
  }
];
