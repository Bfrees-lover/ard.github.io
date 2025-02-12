import { Module } from "./types";

export const basicsModule: Module = {
  id: "basics",
  title: "Основы Arduino",
  description: "Изучите основные принципы работы с Arduino, включая установку среды разработки и базовые команды.",
  icon: "⚡",
  content: `Arduino - это открытая электронная платформа, основанная на простом в использовании железе и программном обеспечении.

![Arduino UNO - основная плата для начинающих](https://raw.githubusercontent.com/lovable-robots/arduino-basics/main/images/arduino-uno.jpg)

История Arduino:
• 2005: Массимо Банци создает первую Arduino для студентов
• 2006: Выпуск Arduino USB
• 2008: Появление Arduino Duemilanove
• 2010: Выпуск Arduino UNO
• 2012: Выход Arduino Leonardo
• 2014: Представление Arduino Zero
• 2016: Выпуск Arduino MKR1000
• 2018: Появление Arduino Nano 33 IoT
• 2020: Выход Arduino Portenta H7

![Arduino IDE - среда разработки](https://raw.githubusercontent.com/lovable-robots/arduino-basics/main/images/arduino-ide.jpg)

💡 Интересный факт: Arduino назван в честь бара "Bar di Re Arduino" в Италии, где встречались основатели проекта.

📊 Сравнительная статистика использования Arduino:
• 38% проектов используют Arduino UNO
• 24% используют Arduino Nano
• 18% используют Arduino Mega
• 20% используют другие платы

Основные характеристики Arduino UNO:
• Микроконтроллер: ATmega328P
• Рабочее напряжение: 5В
• Входное напряжение: 7-12В
• Цифровые входы/выходы: 14 (из них 6 могут использоваться как PWM)
• Аналоговые входы: 6
• Flash-память: 32 КБ
• SRAM: 2 КБ
• EEPROM: 1 КБ
• Тактовая частота: 16 МГц

💡 Инженерный факт: Arduino UNO может работать как программатор для других микроконтроллеров ATmega через протокол ISP.

⚠️ Важное замечание: Превышение входного напряжения выше 12В может привести к перегреву стабилизатора напряжения.

Другие популярные платы Arduino:

Arduino Nano:
• Компактный размер
• ATmega328P
• 14 цифровых входов/выходов
• 8 аналоговых входов
• 16 МГц частота

📊 Энергопотребление Arduino Nano:
• Активный режим: 19 мА
• Режим сна: 10 мкА
• Глубокий сон: 4.5 мкА

Arduino Mega 2560:
• 54 цифровых входа/выхода
• 16 аналоговых входов
• 4 UART порта
• 256 КБ Flash-памяти
• 8 КБ SRAM

💡 Инженерный трюк: Используйте внешний кварцевый резонатор для повышения точности таймеров.

Arduino Leonardo:
• ATmega32U4
• Встроенный USB
• 20 цифровых входов/выходов
• 12 аналоговых входов
• 32 КБ Flash-памяти

⚠️ Особенность Leonardo: При программировании платы она может временно "исчезать" из системы из-за особенностей USB-интерфейса.

Для начала работы необходимо:
1. Скачать и установить Arduino IDE с официального сайта
2. Подключить плату к компьютеру через USB
3. Выбрать правильную плату и порт в Arduino IDE
4. Установить драйверы (если требуется)

📊 Статистика ошибок начинающих:
• 45% - неправильный выбор порта
• 30% - неверная плата в настройках
• 15% - проблемы с драйверами
• 10% - другие ошибки

Базовая структура скетча:
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
\`\`\`

Основные функции для работы с пинами:
• pinMode(pin, mode) - установка режима пина (INPUT, OUTPUT, INPUT_PULLUP)
• digitalWrite(pin, value) - запись цифрового значения (HIGH или LOW)
• digitalRead(pin) - чтение цифрового значения
• analogWrite(pin, value) - запись аналогового значения (PWM, 0-255)
• analogRead(pin) - чтение аналогового значения (0-1023)

⚠️ Важно: Не все пины поддерживают PWM. На Arduino UNO это пины 3, 5, 6, 9, 10 и 11.

Работа с последовательным портом:
• Serial.begin(speed) - инициализация порта (обычно 9600 или 115200)
• Serial.print() - вывод данных
• Serial.println() - вывод данных с переводом строки
• Serial.available() - проверка наличия данных
• Serial.read() - чтение одного байта
• Serial.readString() - чтение строки
• Serial.parseInt() - чтение целого числа
• Serial.parseFloat() - чтение числа с плавающей точкой

💡 Инженерный совет: Используйте буферизацию для оптимизации передачи данных:
\`\`\`cpp
char buffer[64];
sprintf(buffer, "Температура: %d°C, Влажность: %d%%", temp, humidity);
Serial.println(buffer);
\`\`\`

Управление временем:
• delay(ms) - пауза в миллисекундах
• delayMicroseconds(us) - пауза в микросекундах
• millis() - время работы в миллисекундах
• micros() - время работы в микросекундах

📊 Точность функций времени:
• micros(): ±4 мкс
• millis(): ±1 мс
• delay(): погрешность до 1 мс
• delayMicroseconds(): точность до 1 мкс

Математические функции:
• map(value, fromLow, fromHigh, toLow, toHigh) - преобразование диапазонов
• constrain(value, min, max) - ограничение значения
• min(x, y) - минимальное из двух чисел
• max(x, y) - максимальное из двух чисел
• abs(x) - модуль числа
• sqrt(x) - квадратный корень
• pow(base, exp) - возведение в степень

💡 Оптимизация: Используйте битовые операции вместо умножения и деления на 2:
\`\`\`cpp
int x = 1234;
int doubled = x << 1;  // Умножение на 2
int halved = x >> 1;   // Деление на 2
\`\`\`

Работа с битами:
• bitRead(value, bit) - чтение бита
• bitWrite(value, bit, bitvalue) - запись бита
• bitSet(value, bit) - установка бита
• bitClear(value, bit) - очистка бита
• bit(n) - получение n-го бита

⚠️ Оптимизация памяти: Используйте битовые поля для хранения флагов:
\`\`\`cpp
struct Flags {
  uint8_t isOn : 1;
  uint8_t isError : 1;
  uint8_t isConnected : 1;
  uint8_t reserved : 5;
};
\`\`\`

Прерывания:
• attachInterrupt(digitalPinToInterrupt(pin), ISR, mode) - подключение прерывания
• detachInterrupt(digitalPinToInterrupt(pin)) - отключение прерывания
• interrupts() - разрешение прерываний
• noInterrupts() - запрет прерываний

📊 Приоритеты прерываний:
1. Reset (высший)
2. External INT0 и INT1
3. Pin Change
4. Timer Overflow
5. Serial Transfer
6. ADC Conversion (низший)

Режимы прерываний:
• LOW - при низком уровне
• CHANGE - при изменении уровня
• RISING - при переходе с низкого на высокий
• FALLING - при переходе с высокого на низкий

💡 Совет по отладке: Используйте светодиоды для визуальной индикации состояний:
\`\`\`cpp
#define DEBUG_LED 13

void indicateError() {
  for(int i = 0; i < 3; i++) {
    digitalWrite(DEBUG_LED, HIGH);
    delay(100);
    digitalWrite(DEBUG_LED, LOW);
    delay(100);
  }
}
\`\`\`
`
}; 
