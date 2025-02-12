import { Module } from "./types";

export const sensorModules: Module[] = [
  {
    id: "temperature",
    title: "Датчики температуры",
    description: "Измерение температуры с помощью различных датчиков.",
    icon: "🌡️",
    content: `Датчики температуры позволяют измерять температуру окружающей среды или объектов.

![Датчик DS18B20](https://raw.githubusercontent.com/lovable-robots/arduino-sensors/main/images/ds18b20.jpg)

![Датчик DHT11](https://raw.githubusercontent.com/lovable-robots/arduino-sensors/main/images/dht11.jpg)

Популярные датчики:
• DS18B20 (цифровой, водонепроницаемый)
• DHT11/DHT22 (температура и влажность)
• LM35 (аналоговый)
• MAX6675 (для термопар)

Подключение DS18B20:
• VCC → 5V
• GND → GND
• DATA → D2 (подтяжка 4.7k к VCC)

Пример кода для DS18B20:
\`\`\`cpp
#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(9600);
  sensors.begin();
}

void loop() {
  sensors.requestTemperatures();
  float tempC = sensors.getTempCByIndex(0);
  
  Serial.print("Температура: ");
  Serial.print(tempC);
  Serial.println(" °C");
  
  delay(1000);
}
\`\`\`

Подключение DHT11:
• VCC → 5V
• GND → GND
• DATA → D4

Пример кода для DHT11:
\`\`\`cpp
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  
  if (isnan(h) || isnan(t)) {
    Serial.println("Ошибка чтения!");
    return;
  }
  
  Serial.print("Влажность: ");
  Serial.print(h);
  Serial.print(" %, Температура: ");
  Serial.print(t);
  Serial.println(" °C");
  
  delay(2000);
}
\`\`\`

Особенности разных датчиков:
• DS18B20:
  - Точность ±0.5°C
  - Диапазон -55°C до +125°C
  - Водонепроницаемый вариант
  - Возможность подключения нескольких датчиков

• DHT11:
  - Измерение температуры и влажности
  - Точность ±2°C
  - Диапазон 0-50°C
  - Частота опроса не чаще 1 раз в секунду

• LM35:
  - Линейная характеристика
  - Точность ±0.5°C
  - Диапазон -55°C до +150°C
  - Простота подключения

• MAX6675:
  - Для работы с термопарами
  - Диапазон 0°C до +1024°C
  - Высокая точность
  - Цифровой интерфейс
`
  },
  {
    id: "distance",
    title: "Датчики расстояния",
    description: "Измерение расстояния с помощью ультразвуковых и инфракрасных датчиков.",
    icon: "📏",
    content: `Датчики расстояния позволяют измерять расстояние до объектов бесконтактным способом.

![Ультразвуковой датчик HC-SR04](https://raw.githubusercontent.com/lovable-robots/arduino-sensors/main/images/hc-sr04.jpg)

![Инфракрасный датчик Sharp](https://raw.githubusercontent.com/lovable-robots/arduino-sensors/main/images/sharp-ir.jpg)

Типы датчиков:
• Ультразвуковые (HC-SR04)
• Инфракрасные (Sharp GP2Y0A21YK)
• Лазерные (VL53L0X)
• Радары (RCWL-0516)

Подключение HC-SR04:
• VCC → 5V
• GND → GND
• TRIG → D11
• ECHO → D12

Пример кода для HC-SR04:
\`\`\`cpp
#define TRIG_PIN 11
#define ECHO_PIN 12

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}

void loop() {
  // Отправка ультразвукового импульса
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  
  // Измерение времени отклика
  long duration = pulseIn(ECHO_PIN, HIGH);
  
  // Расчет расстояния
  float distance = duration * 0.034 / 2;
  
  Serial.print("Расстояние: ");
  Serial.print(distance);
  Serial.println(" см");
  
  delay(500);
}
\`\`\`

Подключение Sharp GP2Y0A21YK:
• VCC → 5V
• GND → GND
• OUT → A0

Пример кода для Sharp GP2Y0A21YK:
\`\`\`cpp
#define IR_PIN A0

void setup() {
  Serial.begin(9600);
}

void loop() {
  int value = analogRead(IR_PIN);
  
  // Преобразование в сантиметры
  // (калибровочная формула может отличаться)
  float distance = 2076.0 / (value - 11);
  
  Serial.print("Расстояние: ");
  Serial.print(distance);
  Serial.println(" см");
  
  delay(100);
}
\`\`\`

Характеристики датчиков:

HC-SR04:
• Диапазон: 2-400 см
• Точность: ±3 мм
• Угол измерения: 15°
• Частота: 40 кГц

Sharp GP2Y0A21YK:
• Диапазон: 10-80 см
• Аналоговый выход
• Не зависит от цвета объекта
• Быстрый отклик

VL53L0X:
• Диапазон: до 2 м
• Высокая точность
• I2C интерфейс
• Лазерное измерение

Применение:
• Роботы-пылесосы
• Системы парковки
• Охранные системы
• Автоматические двери
• Измерение уровня жидкости
`
  }
];
