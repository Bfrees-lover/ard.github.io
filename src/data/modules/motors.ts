import { Module } from "./types";

export const motorModules: Module[] = [
  {
    id: "servo",
    title: "Сервоприводы",
    description: "Управление сервоприводами для точного позиционирования.",
    icon: "🔄",
    content: `Сервоприводы позволяют осуществлять точное позиционирование в заданном угле.

![Сервопривод SG90](https://raw.githubusercontent.com/lovable-robots/arduino-motors/main/images/sg90.jpg)

![Подключение сервопривода к Arduino](https://raw.githubusercontent.com/lovable-robots/arduino-motors/main/images/servo-wiring.jpg)

Типы сервоприводов:
• Стандартные (0-180°)
• Непрерывного вращения
• Цифровые
• Аналоговые

Подключение сервопривода:
• Красный → 5V
• Коричневый/Черный → GND
• Оранжевый/Желтый → D9

Пример кода:
\`\`\`cpp
#include <Servo.h>

Servo myservo;
int pos = 0;

void setup() {
  myservo.attach(9);
}

void loop() {
  // Плавное движение от 0 до 180
  for (pos = 0; pos <= 180; pos++) {
    myservo.write(pos);
    delay(15);
  }
  
  // Плавное движение от 180 до 0
  for (pos = 180; pos >= 0; pos--) {
    myservo.write(pos);
    delay(15);
  }
}
\`\`\`

Расширенный пример с несколькими сервоприводами:
\`\`\`cpp
#include <Servo.h>

Servo servo1;
Servo servo2;
Servo servo3;

void setup() {
  servo1.attach(9);
  servo2.attach(10);
  servo3.attach(11);
  
  // Начальные позиции
  servo1.write(90);
  servo2.write(90);
  servo3.write(90);
}

void loop() {
  // Последовательное движение
  moveServo(servo1, 0, 180);
  moveServo(servo2, 0, 180);
  moveServo(servo3, 0, 180);
  
  delay(1000);
  
  moveServo(servo1, 180, 0);
  moveServo(servo2, 180, 0);
  moveServo(servo3, 180, 0);
  
  delay(1000);
}

void moveServo(Servo &servo, int start, int end) {
  int step = (start < end) ? 1 : -1;
  
  for (int pos = start; pos != end; pos += step) {
    servo.write(pos);
    delay(15);
  }
}
\`\`\`

Характеристики сервоприводов:
• Угол поворота: обычно 0-180°
• Крутящий момент: от 1.2 до 20+ кг/см
• Скорость: 0.1-0.5 сек/60°
• Рабочее напряжение: 4.8-6В

Применение:
• Роботы-манипуляторы
• Управление камерой
• Автоматические двери
• Модели самолетов
• Системы слежения
`
  },
  {
    id: "stepper",
    title: "Шаговые двигатели",
    description: "Управление шаговыми двигателями для точного позиционирования.",
    icon: "⚙️",
    content: `Шаговые двигатели позволяют осуществлять точное позиционирование и контроль скорости вращения.

![NEMA 17 шаговый двигатель](https://raw.githubusercontent.com/lovable-robots/arduino-motors/main/images/nema17.jpg)

![Драйвер A4988](https://raw.githubusercontent.com/lovable-robots/arduino-motors/main/images/a4988.jpg)

Типы шаговых двигателей:
• Биполярные
• Униполярные
• Гибридные
• С постоянными магнитами

Подключение через драйвер A4988:
• STEP → 3
• DIR → 2
• MS1, MS2, MS3 → Arduino для микрошага
• ENABLE → Arduino (опционально)
• VDD → 5V
• GND → GND
• VMOT → 12V (отдельное питание)
• A1, A2 → первая обмотка двигателя
• B1, B2 → вторая обмотка двигателя

Пример кода с библиотекой AccelStepper:
\`\`\`cpp
#include <AccelStepper.h>

#define STEP_PIN 3
#define DIR_PIN 2
#define ENABLE_PIN 8

// Инициализация с типом драйвера
AccelStepper stepper(1, STEP_PIN, DIR_PIN);

void setup() {
  pinMode(ENABLE_PIN, OUTPUT);
  digitalWrite(ENABLE_PIN, LOW); // Включение двигателя
  
  stepper.setMaxSpeed(1000);     // Шагов в секунду
  stepper.setAcceleration(500);  // Ускорение
  stepper.setCurrentPosition(0); // Установка текущей позиции
}

void loop() {
  // Движение на 200 шагов вперед
  stepper.moveTo(200);
  while(stepper.distanceToGo() != 0) {
    stepper.run();
  }
  
  delay(1000);
  
  // Движение в начальную позицию
  stepper.moveTo(0);
  while(stepper.distanceToGo() != 0) {
    stepper.run();
  }
  
  delay(1000);
}
\`\`\`

Пример с микрошагом:
\`\`\`cpp
#define STEP_PIN 3
#define DIR_PIN 2
#define MS1_PIN 4
#define MS2_PIN 5
#define MS3_PIN 6

void setup() {
  pinMode(STEP_PIN, OUTPUT);
  pinMode(DIR_PIN, OUTPUT);
  pinMode(MS1_PIN, OUTPUT);
  pinMode(MS2_PIN, OUTPUT);
  pinMode(MS3_PIN, OUTPUT);
  
  // Установка режима микрошага 1/16
  digitalWrite(MS1_PIN, HIGH);
  digitalWrite(MS2_PIN, HIGH);
  digitalWrite(MS3_PIN, HIGH);
}

void loop() {
  // Вращение в одну сторону
  digitalWrite(DIR_PIN, HIGH);
  
  for(int i = 0; i < 3200; i++) { // 200 шагов * 16 микрошагов
    digitalWrite(STEP_PIN, HIGH);
    delayMicroseconds(500);
    digitalWrite(STEP_PIN, LOW);
    delayMicroseconds(500);
  }
  
  delay(1000);
  
  // Вращение в другую сторону
  digitalWrite(DIR_PIN, LOW);
  
  for(int i = 0; i < 3200; i++) {
    digitalWrite(STEP_PIN, HIGH);
    delayMicroseconds(500);
    digitalWrite(STEP_PIN, LOW);
    delayMicroseconds(500);
  }
  
  delay(1000);
}
\`\`\`

Характеристики и особенности:
• Точность: 1.8° или 0.9° на шаг
• Крутящий момент: от 0.1 до 50+ Нм
• Скорость: до 1000+ об/мин
• Режимы микрошага: 1/2, 1/4, 1/8, 1/16, 1/32

Применение:
• 3D принтеры
• ЧПУ станки
• Системы позиционирования
• Роботы
• Автоматизация производства
`
  },
  {
    id: "dc",
    title: "DC моторы",
    description: "Управление двигателями постоянного тока.",
    icon: "⚡",
    content: `Двигатели постоянного тока (DC) используются для создания движения в различных проектах.

![DC мотор с редуктором](https://raw.githubusercontent.com/lovable-robots/arduino-motors/main/images/dc-motor.jpg)

![Драйвер L298N](https://raw.githubusercontent.com/lovable-robots/arduino-motors/main/images/l298n.jpg)

Типы DC моторов:
• Коллекторные
• Бесколлекторные (BLDC)
• С редуктором
• Энкодером

Подключение через драйвер L298N:
• ENA → 10 (PWM)
• IN1 → 9
• IN2 → 8
• OUT1, OUT2 → Мотор 1
• +12V → Внешнее питание
• GND → Общий GND

Пример кода:
\`\`\`cpp
#define ENA 10
#define IN1 9
#define IN2 8

void setup() {
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
}

void loop() {
  // Вращение вперед
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  
  // Плавное ускорение
  for(int speed = 0; speed <= 255; speed++) {
    analogWrite(ENA, speed);
    delay(20);
  }
  
  delay(1000);
  
  // Плавное замедление
  for(int speed = 255; speed >= 0; speed--) {
    analogWrite(ENA, speed);
    delay(20);
  }
  
  // Смена направления
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  
  // Максимальная скорость
  analogWrite(ENA, 255);
  delay(1000);
  
  // Остановка
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  delay(1000);
}
\`\`\`

Пример с двумя моторами:
\`\`\`cpp
#define ENA 10
#define IN1 9
#define IN2 8
#define ENB 5
#define IN3 7
#define IN4 6

void setup() {
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENB, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
}

void forward(int speed) {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, speed);
  analogWrite(ENB, speed);
}

void backward(int speed) {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, speed);
  analogWrite(ENB, speed);
}

void left(int speed) {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, speed);
  analogWrite(ENB, speed);
}

void right(int speed) {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, speed);
  analogWrite(ENB, speed);
}

void stop() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
}

void loop() {
  forward(200);  // Движение вперед
  delay(2000);
  
  right(200);    // Поворот направо
  delay(1000);
  
  forward(200);  // Движение вперед
  delay(2000);
  
  left(200);     // Поворот налево
  delay(1000);
  
  backward(200); // Движение назад
  delay(2000);
  
  stop();        // Остановка
  delay(1000);
}
\`\`\`

Характеристики DC моторов:
• Напряжение: 3-24В
• Скорость: 1000-15000 об/мин
• Крутящий момент: зависит от модели
• КПД: 50-80%

Применение:
• Роботы
• Радиоуправляемые модели
• Автоматизация
• Вентиляторы
• Насосы
`
  }
];
