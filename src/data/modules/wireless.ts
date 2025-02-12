import { Module } from "./types";

export const wirelessModules: Module[] = [
  {
    id: "bluetooth",
    title: "Bluetooth проекты",
    description: "Создавайте проекты с беспроводной связью через Bluetooth модули HC-05 и HC-06.",
    icon: "📡",
    sections: [
      {
        title: "Работа с Bluetooth",
        content: `Bluetooth модули позволяют создавать беспроводные проекты Arduino.

![Bluetooth модули](https://images.unsplash.com/photo-1499951360447-b19be8fe80f5)

Популярные модули:
• HC-05 (Master/Slave)
• HC-06 (Slave only)
• HM-10 (BLE)

💡 Совет: Используйте режим AT для настройки параметров модуля.`
      }
    ]
  },
  {
    id: "wifi",
    title: "WiFi проекты",
    description: "Разрабатывайте IoT устройства с использованием WiFi модулей ESP8266 и ESP32.",
    icon: "📶",
    sections: [
      {
        title: "Работа с WiFi",
        content: `WiFi модули открывают широкие возможности для создания IoT устройств.

![WiFi проекты](https://images.unsplash.com/photo-1544197150-b99a580bb7a8)

Популярные платформы:
• ESP8266
• ESP32
• Arduino WiFi Shield

⚠️ Важно: Учитывайте энергопотребление WiFi модулей при разработке автономных устройств.`
      }
    ]
  }
];