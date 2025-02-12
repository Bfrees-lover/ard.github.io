import { Module } from "./types";

export const roboticsModules: Module[] = [
  {
    id: "robot-arm",
    title: "Роботизированная рука",
    description: "Создайте роботизированную руку с несколькими степенями свободы.",
    icon: "🦾",
    sections: [
      {
        title: "Создание роботизированной руки",
        content: `Роботизированная рука - отличный проект для изучения кинематики и управления сервоприводами.

![Робот-манипулятор](https://images.unsplash.com/photo-1485827404703-89b55fcc595e)

Компоненты проекта:
• Сервоприводы MG996R
• 3D-печатные детали
• Arduino Mega
• Джойстик управления

📊 Характеристики:
• 4-6 степеней свободы
• Грузоподъёмность до 200г
• Радиус действия 25-30см

💡 Совет: Начните с простой 3-осевой конструкции, постепенно усложняя проект.`
      },
      {
        title: "Пример кода: Управление сервоприводами",
        content: `Пример кода для управления роботизированной рукой:

\`\`\`cpp
#include <Servo.h>

// Создаем объекты для сервоприводов
Servo baseServo;    // Основание
Servo shoulderServo; // Плечо
Servo elbowServo;   // Локоть
Servo gripperServo; // Захват

// Пины для джойстика
#define JOY_X A0
#define JOY_Y A1
#define JOY_BTN 2

void setup() {
  // Привязываем сервоприводы к пинам
  baseServo.attach(3);
  shoulderServo.attach(5);
  elbowServo.attach(6);
  gripperServo.attach(9);
  
  // Настраиваем кнопку джойстика
  pinMode(JOY_BTN, INPUT_PULLUP);
}

void loop() {
  // Читаем значения с джойстика
  int xValue = analogRead(JOY_X);
  int yValue = analogRead(JOY_Y);
  bool btnPressed = !digitalRead(JOY_BTN);
  
  // Преобразуем значения в углы для сервоприводов
  int baseAngle = map(xValue, 0, 1023, 0, 180);
  int shoulderAngle = map(yValue, 0, 1023, 0, 180);
  
  // Управляем сервоприводами
  baseServo.write(baseAngle);
  shoulderServo.write(shoulderAngle);
  
  // Управление захватом
  if (btnPressed) {
    gripperServo.write(180); // Закрыть захват
  } else {
    gripperServo.write(0);   // Открыть захват
  }
  
  delay(15); // Небольшая задержка для стабильности
}
\`\`\`

⚠️ Важно: Убедитесь, что источник питания способен обеспечить достаточный ток для всех сервоприводов.`
      }
    ]
  },
  {
    id: "line-follower",
    title: "Робот-следопыт",
    description: "Разработайте робота, который следует по линии с помощью инфракрасных датчиков.",
    icon: "🤖",
    sections: [
      {
        title: "Создание робота-следопыта",
        content: `Робот-следопыт - классический проект для изучения основ робототехники.

![Робот-следопыт](https://images.unsplash.com/photo-1485827404703-89b55fcc595e)

Необходимые компоненты:
• ИК-датчики линии
• Моторы постоянного тока
• Драйвер моторов L298N
• Шасси робота

⚠️ Важно: Калибровка датчиков критически важна для точного следования по линии.`
      },
      {
        title: "Пример кода: Следование по линии",
        content: `Пример кода для робота, следующего по черной линии:

\`\`\`cpp
// Пины для датчиков линии
#define LEFT_SENSOR A0
#define RIGHT_SENSOR A1

// Пины для управления моторами через L298N
#define ENA 5  // Скорость левого мотора
#define ENB 6  // Скорость правого мотора
#define IN1 7  // Направление левого мотора
#define IN2 8
#define IN3 9  // Направление правого мотора
#define IN4 10

// Пороговое значение для определения линии
#define THRESHOLD 500

void setup() {
  // Настройка пинов моторов
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
}

void loop() {
  // Читаем значения с датчиков
  int leftValue = analogRead(LEFT_SENSOR);
  int rightValue = analogRead(RIGHT_SENSOR);
  
  // Если оба датчика на линии - едем прямо
  if (leftValue > THRESHOLD && rightValue > THRESHOLD) {
    forward();
  }
  // Если левый датчик на линии - поворачиваем влево
  else if (leftValue > THRESHOLD) {
    turnLeft();
  }
  // Если правый датчик на линии - поворачиваем вправо
  else if (rightValue > THRESHOLD) {
    turnRight();
  }
  // Если оба датчика вне линии - стоп
  else {
    stop();
  }
}

void forward() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 200);
  analogWrite(ENB, 200);
}

void turnLeft() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 150);
  analogWrite(ENB, 150);
}

void turnRight() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, 150);
  analogWrite(ENB, 150);
}

void stop() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);
}
\`\`\`

💡 Совет: Для более плавного движения можно использовать PID-регулятор.`
      }
    ]
  }
];