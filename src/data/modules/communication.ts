import { Module } from "./types";

export const communicationModules: Module[] = [
  {
    id: "bluetooth",
    title: "Bluetooth модули",
    description: "Научитесь подключать и программировать Bluetooth модули для беспроводной связи.",
    icon: "📶",
    content: `Bluetooth модули позволяют создавать беспроводное соединение между Arduino и другими устройствами.

![HC-05 Bluetooth модуль](https://raw.githubusercontent.com/lovable-robots/arduino-modules/main/images/hc-05.jpg)

![Схема подключения HC-05 к Arduino](https://raw.githubusercontent.com/lovable-robots/arduino-modules/main/images/hc-05-wiring.jpg)

Популярные модули:
• HC-05 (Master/Slave режимы)
• HC-06 (только Slave режим)
• HM-10 (BLE модуль)
• CC2541 (BLE модуль)
• RN-42 (Bluetooth Classic)
• BT-06 (BLE модуль)

Характеристики модулей:

HC-05:
• Bluetooth 2.0+EDR
• Дальность: до 10 метров
• Скорость: до 3 Мбит/с
• Напряжение: 3.3-6В
• Поддержка AT-команд
• Master и Slave режимы
• Память для 7 устройств
• Частота: 2.4 ГГц

HC-06:
• Bluetooth 2.0+EDR
• Только Slave режим
• Дальность: до 10 метров
• Скорость: до 3 Мбит/с
• Напряжение: 3.3-6В
• Простая настройка
• Фиксированная скорость 9600

HM-10:
• Bluetooth 4.0 BLE
• Низкое энергопотребление
• Дальность: до 100 метров
• Напряжение: 3.3-6В
• Поддержка AT-команд
• Master и Slave режимы
• Встроенная антенна

Подключение HC-05 к Arduino:
• VCC → 5V
• GND → GND
• TXD → RX (pin 2)
• RXD → TX (pin 3)
• EN/KEY → Pin 4 (опционально, для AT-команд)
• STATE → Pin 5 (опционально, для статуса)

Пример кода для работы с Bluetooth:
\`\`\`cpp
#include <SoftwareSerial.h>

SoftwareSerial bluetooth(2, 3); // RX, TX

void setup() {
  Serial.begin(9600);
  bluetooth.begin(9600);
  
  // Настройка пинов для светодиода
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // Если есть данные от Bluetooth
  if (bluetooth.available()) {
    char data = bluetooth.read();
    Serial.print("Получено: ");
    Serial.println(data);
    
    // Управление светодиодом
    if (data == '1') {
      digitalWrite(LED_BUILTIN, HIGH);
      bluetooth.println("LED ON");
    } 
    else if (data == '0') {
      digitalWrite(LED_BUILTIN, LOW);
      bluetooth.println("LED OFF");
    }
  }
  
  // Если есть данные от Serial
  if (Serial.available()) {
    bluetooth.write(Serial.read());
  }
}
\`\`\`

AT-команды для настройки HC-05:
• AT - проверка связи
• AT+NAME=MyDevice - установка имени
• AT+PSWD=1234 - установка пароля
• AT+UART=9600,0,0 - настройка скорости
• AT+ROLE=0 - режим Slave
• AT+ROLE=1 - режим Master
• AT+CMODE=0 - подключение к определенному адресу
• AT+BIND=xxxx,xx,xxxxxx - установка адреса для подключения
• AT+VERSION? - версия прошивки
• AT+ORGL - сброс к заводским настройкам
• AT+ADDR? - получение адреса модуля
• AT+STATE? - получение статуса
• AT+RESET - перезагрузка модуля

Безопасность:
• Используйте сложные пароли
• Меняйте стандартные имена устройств
• Отключайте видимость когда возможно
• Используйте шифрование данных
• Регулярно обновляйте прошивку

Применение:
• Управление роботами
• Беспроводные датчики
• Умный дом
• Дистанционное управление
• Передача телеметрии
• Беспроводная отладка
• Мобильные приложения
`
  },
  {
    id: "wifi",
    title: "WiFi модули",
    description: "Подключение к интернету и создание IoT устройств с помощью WiFi модулей.",
    icon: "🌐",
    content: `WiFi модули позволяют подключать Arduino к интернету и создавать IoT устройства.

![ESP8266 WiFi модуль](https://raw.githubusercontent.com/lovable-robots/arduino-modules/main/images/esp8266.jpg)

![NodeMCU на базе ESP8266](https://raw.githubusercontent.com/lovable-robots/arduino-modules/main/images/nodemcu.jpg)

Популярные модули:
• ESP8266 (ESP-01, ESP-12E)
• ESP32 (со встроенным Bluetooth)
• NodeMCU
• Wemos D1 Mini
• Arduino WiFi Shield
• Arduino MKR WiFi 1010

Характеристики модулей:

ESP8266:
• WiFi 802.11 b/g/n
• Встроенный TCP/IP стек
• Частота 80 МГц
• RAM 160 КБ
• Flash до 16 МБ
• 17 GPIO пинов
• Поддержка WPA/WPA2
• Режимы Station/AP/Both

ESP32:
• WiFi + Bluetooth
• Двухъядерный процессор
• Частота до 240 МГц
• RAM 520 КБ
• Flash до 16 МБ
• 34 GPIO пина
• Аппаратное шифрование
• Поддержка MQTT

NodeMCU:
• На базе ESP8266
• Встроенный USB
• Программирование Lua
• 11 GPIO пинов
• Встроенный регулятор
• Поддержка Arduino IDE

Подключение ESP8266 к Arduino:
• VCC → 3.3V (важно!)
• GND → GND
• TX → RX (через делитель напряжения)
• RX → TX
• CH_PD/EN → 3.3V
• GPIO0 → GND (для прошивки)
• RST → 3.3V (через резистор 10k)

Пример кода для подключения к WiFi и отправки данных:
\`\`\`cpp
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "YourWiFiName";
const char* password = "YourWiFiPassword";
const char* serverUrl = "http://api.example.com/data";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("");
  Serial.println("WiFi подключен");
  Serial.println("IP адрес: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    // Создаем JSON объект
    StaticJsonDocument<200> doc;
    doc["sensor"] = "temperature";
    doc["value"] = 25.5;
    
    // Сериализуем JSON
    String jsonString;
    serializeJson(doc, jsonString);
    
    // Отправляем POST запрос
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");
    
    int httpCode = http.POST(jsonString);
    
    if (httpCode > 0) {
      String payload = http.getString();
      Serial.println(payload);
    }
    
    http.end();
  }
  delay(5000);
}
\`\`\`

Создание веб-сервера:
\`\`\`cpp
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "YourWiFiName";
const char* password = "YourWiFiPassword";

ESP8266WebServer server(80);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  server.on("/", HTTP_GET, []() {
    String html = "<html><body>";
    html += "<h1>Arduino Web Server</h1>";
    html += "<p>Temperature: 25.5 C</p>";
    html += "</body></html>";
    server.send(200, "text/html", html);
  });
  
  server.begin();
}

void loop() {
  server.handleClient();
}
\`\`\`

Протоколы и возможности:
• HTTP/HTTPS клиент
• WebSocket
• MQTT
• FTP клиент
• DNS сервер
• DHCP клиент
• mDNS
• SSDP
• OTA обновления

Безопасность:
• Используйте HTTPS
• Включите шифрование
• Регулярно обновляйте прошивку
• Используйте сложные пароли
• Отключайте отладочные порты
• Проверяйте входные данные

Применение:
• Умный дом
• Метеостанции
• Системы мониторинга
• Удаленное управление
• Сбор данных
• IoT устройства
• Веб-интерфейсы
`
  }
];
