class BaseConverter:
    @staticmethod
    def convert(celsius, to_scale):
        if to_scale == 'K':
            return celsius + 273.15
        elif to_scale == 'F':
            return (celsius * 9/5) + 32
        else:
            raise ValueError("Unsupported scale: choose 'K' for Kelvin or 'F' for Fahrenheit")

if __name__ == "__main__":
    # Запрос температуры в градусах Цельсия у пользователя
    celsius = float(input("Введите температуру в градусах Цельсия: "))

    # Запрос типа конвертации у пользователя
    scale = input("Введите 'K' для конвертации в Кельвины или 'F' для конвертации в Фаренгейты: ").upper()

    # Создание экземпляра BaseConverter и выполнение конвертации
    converter = BaseConverter()
    try:
        result = converter.convert(celsius, scale)
        print(f"Температура в градусах по {scale}: {result}")
    except ValueError as e:
        print(e)
