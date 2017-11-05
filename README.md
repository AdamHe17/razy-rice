# Razy-Rice

## Inspiration
We all cook dinner everyday at home and rice is one of the most common things we make. Sometimes we come back late from class and could really use a good meal right when we get back. Making rice takes too long, so we decided to automate that process and start it before we even get home!

## What it does
Razy Rice adds the desired amount of rice and water to the rice cooker and starts the cooking process remotely. The app can tell the robot to start making rice from anywhere, even when we're still in class or on our way back.

## How we built it
The device has four key steps: (1) adding rice to the rice cooker, (2) adding water to the rice cooker, (3) closing the lid, and (4) turning on the rice cooker. The rice feeder uses an auger-like device connected to a continuous rotating servo motor. To add water to the rice cooker, a pump controlled with an h-bridge was used. The lid was pushed down with an arm attached to a servo motor. Finally, the rice cooker was turned on by simulating a button press through a relay. These components were attached to the ESP8266 Thing, a micro-controller designed for communicating with IOT devices. The device constantly looks at a firebase database to know exactly when to start the cooking process. The smartphone app utilizes the ionic platform and sends when to start cooking and the amount of rice to cook to the micro-controller.

## Challenges we ran into
One of the biggest challenges we ran into was creating an efficient dispensing mechanism for the rice. Many of our initial proposals were impractical due to the rice being very heavy and putting too much stress on the motors.

## Accomplishments that we're proud of
This was the first attempt at a hardware hack for all of us. We are extremely proud of the fact that we hacked together the fully-functional rice bot as well as an app interface that can be used anywhere. Additionally, the rice dispensor design ended up being very consistent which overcame a large design challenge.

## What we learned
We learned how to build an IOT device and smartphone app from the bottom up. 

## What's next for Razy-Rice
As the device is currently a prototype, a solid exterior case would be ideal. Additionally, more buttons on the rice cooker could be hooked into in order to allow for more control (white rice vs brown rice, etc). Sensors could also be added to the rice holder and water holder to notify the user if they are low on either ingredients. Additionally, if the device is located next to a sink, the water could instead draw directly from the pipes instead of holding it in an external container. 
