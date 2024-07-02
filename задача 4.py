def calculate_angle(hours, minutes):
    # Normalize hours to be within 0-11 range
    hours = hours % 12

    # Calculate the angle of the minute hand
    minute_angle = minutes * 6

    # Calculate the angle of the hour hand
    hour_angle = (hours * 30) + (minutes * 0.5)

    # Calculate the difference between the two angles
    angle = abs(hour_angle - minute_angle)

    # The smaller angle between the two possible angles
    if angle > 180:
        angle = 360 - angle

    return angle

# Пример использования:
hours = int(input("Введите часы: "))
minutes = int(input("Введите минуты: "))
angle = calculate_angle(hours, minutes)
print(f"Угол между часовой и минутной стрелками: {angle} градусов")
