# import sys
# sys.path.append('/path/to/gpiozero')

from gpiozero import LED
from time import sleep

# Define the GPIO pin where the LED is connected
led = LED(21)  # Change the GPIO pin number as needed

try:
    while True:
        # Turn the LED on
        led.on()
        print("LED is ON")
        sleep(1)  # Pause for 1 second

        # Turn the LED off
        led.off()
        print("LED is OFF")
        sleep(1)  # Pause for 1 second

except KeyboardInterrupt:
    # Handle Ctrl+C gracefully
    led.off()  # Turn off the LED
    print("Exiting program")
