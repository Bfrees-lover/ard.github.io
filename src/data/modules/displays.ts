import { Module } from "./types";

export const displayModules: Module[] = [
  {
    id: "lcd",
    title: "LCD дисплеи",
    description: "Работа с LCD дисплеями для вывода информации.",
    icon: "🖥️",
    content: `LCD дисплеи используются для отображения текста и простых символов.

![LCD 16x2 дисплей](https://raw.githubusercontent.com/lovable-robots/arduino-displays/main/images/lcd-16x2.jpg)

![I2C адаптер для LCD](https://raw.githubusercontent.com/lovable-robots/arduino-displays/main/images/i2c-adapter.jpg)

Типы LCD дисплеев:
• 16x2 символов (стандартный)
• 20x4 символов
• 8x2 символов
• Графические LCD

Подключение LCD 16x2 (с I2C модулем):
• VCC → 5V
• GND → GND
• SDA → A4
• SCL → A5

Подключение без I2C:
• VSS → GND
• VDD → 5V
• V0 → потенциометр
• RS → 12
• RW → GND
• E → 11
• D4-D7 → 5,4,3,2
• A → 5V
• K → GND

Пример кода с I2C:
\`\`\`cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Hello, Arduino!");
  
  // Создание пользовательского символа
  byte heart[8] = {
    0b00000,
    0b01010,
    0b11111,
    0b11111,
    0b11111,
    0b01110,
    0b00100,
    0b00000
  };
  lcd.createChar(0, heart);
}

void loop() {
  lcd.setCursor(0, 1);
  lcd.print(millis()/1000);
  lcd.write(0); // Вывод пользовательского символа
  delay(1000);
}
\`\`\`

Основные команды:
• lcd.clear() - очистка экрана
• lcd.home() - курсор в начало
• lcd.setCursor(x, y) - установка курсора
• lcd.print() - вывод текста
• lcd.createChar() - создание символа
• lcd.scrollDisplayLeft() - прокрутка влево
• lcd.scrollDisplayRight() - прокрутка вправо
• lcd.noDisplay() - выключение дисплея
• lcd.display() - включение дисплея
`
  },
  {
    id: "oled",
    title: "OLED дисплеи",
    description: "Работа с OLED дисплеями для создания графического интерфейса.",
    icon: "📱",
    content: `OLED дисплеи предоставляют возможность отображать графику и текст с высоким контрастом.

![OLED 0.96" дисплей](https://raw.githubusercontent.com/lovable-robots/arduino-displays/main/images/oled-096.jpg)

![Пример графики на OLED](https://raw.githubusercontent.com/lovable-robots/arduino-displays/main/images/oled-graphics.jpg)

Типы OLED дисплеев:
• 0.96" 128x64
• 0.91" 128x32
• 1.3" 128x64
• 0.49" 64x32

Подключение OLED дисплея (I2C):
• VCC → 5V/3.3V
• GND → GND
• SCL → A5
• SDA → A4

Пример кода:
\`\`\`cpp
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  
  // Вывод текста
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0,0);
  display.println("Hello, OLED!");
  
  // Рисование фигур
  display.drawRect(0, 20, 40, 20, WHITE);
  display.fillCircle(60, 30, 10, WHITE);
  display.drawLine(80, 20, 120, 40, WHITE);
  
  display.display();
}

void loop() {
  // Анимация
  for(int i=0; i<SCREEN_WIDTH; i++) {
    display.clearDisplay();
    display.drawPixel(i, 32, WHITE);
    display.display();
    delay(50);
  }
}
\`\`\`

Графические возможности:
• drawPixel() - точка
• drawLine() - линия
• drawRect() - прямоугольник
• fillRect() - закрашенный прямоугольник
• drawCircle() - окружность
• fillCircle() - закрашенный круг
• drawTriangle() - треугольник
• drawBitmap() - вывод изображения
• setRotation() - поворот экрана
• invertDisplay() - инверсия цветов

Особенности:
• Высокий контраст
• Низкое энергопотребление
• Широкий угол обзора
• Быстрое обновление
• Поддержка анимации
`
  }
];
