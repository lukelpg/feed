from gpiozero import DistanceSensor

ultrasonic = DistanceSensor(echo=16, trigger=20)

while True:
    print(ultrasonic.distance)