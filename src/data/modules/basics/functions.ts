import { ModuleSection } from "../types";

export const functionsSection: ModuleSection = {
  title: "Основные функции",
  content: `Основные функции для работы с пинами:
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
• Serial.parseFloat() - чтение числа с плавающей точкой`
};