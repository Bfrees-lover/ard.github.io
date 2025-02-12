
import { Module } from "./types";

export const weatherModules: Module[] = [
  {
    id: "weather-station",
    title: "Метеостанция",
    description: "Создайте домашнюю метеостанцию для измерения температуры, влажности, давления и прогноза погоды.",
    icon: "🌤️",
    sections: [
      {
        title: "Компоненты метеостанции",
        content: `Для создания метеостанции потребуется:
• Arduino UNO
• BME280 (датчик температуры, влажности и давления)
• LCD дисплей 20x4
• RTC DS3231 (часы реального времени)
• SD карта для хранения данных

![Метеостанция](https://images.unsplash.com/photo-1590055531716-26bc975444e3)

📊 Возможности станции:
• Измерение температуры: -40°C до +85°C
• Измерение влажности: 0-100%
• Измерение давления: 300-1100 hPa
• Построение графиков изменения параметров
• Прогноз погоды по тенденции изменения давления`
      },
      {
        title: "Код метеостанции",
        content: `Пример кода для метеостанции:

\`\`\`cpp
#include <Wire.h>
#include <Adafruit_BME280.h>
#include <LiquidCrystal_I2C.h>
#include <SD.h>
#include <RTClib.h>

Adafruit_BME280 bme;
LiquidCrystal_I2C lcd(0x27, 20, 4);
RTC_DS3231 rtc;

void setup() {
  Serial.begin(9600);
  
  // Инициализация датчика BME280
  if (!bme.begin(0x76)) {
    Serial.println("BME280 не найден!");
    while (1);
  }
  
  // Инициализация дисплея
  lcd.init();
  lcd.backlight();
  
  // Инициализация RTC
  if (!rtc.begin()) {
    Serial.println("RTC не найден!");
    while (1);
  }
  
  // Инициализация SD карты
  if (!SD.begin(4)) {
    Serial.println("SD карта не найдена!");
    while (1);
  }
}

void loop() {
  DateTime now = rtc.now();
  float temperature = bme.readTemperature();
  float humidity = bme.readHumidity();
  float pressure = bme.readPressure() / 100.0F;
  
  // Вывод на дисплей
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(now.timestamp(DateTime::TIMESTAMP_TIME));
  
  lcd.setCursor(0, 1);
  lcd.print("T:");
  lcd.print(temperature, 1);
  lcd.print("C H:");
  lcd.print(humidity, 0);
  lcd.print("%");
  
  lcd.setCursor(0, 2);
  lcd.print("P: ");
  lcd.print(pressure, 1);
  lcd.print(" hPa");
  
  // Запись данных на SD карту
  File dataFile = SD.open("weather.csv", FILE_WRITE);
  if (dataFile) {
    dataFile.print(now.timestamp(DateTime::TIMESTAMP_FULL));
    dataFile.print(",");
    dataFile.print(temperature);
    dataFile.print(",");
    dataFile.print(humidity);
    dataFile.print(",");
    dataFile.println(pressure);
    dataFile.close();
  }
  
  delay(60000); // Обновление раз в минуту
}
\`\`\`

💡 Совет: Для более точного прогноза погоды следите за изменением давления в течение нескольких часов.

⚠️ Важно: Калибруйте датчик давления с учетом высоты над уровнем моря в вашей местности.`
      }
    ]
  }
];
