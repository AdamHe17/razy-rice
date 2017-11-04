#include <Servo.h> 

Servo lidservo;

int en = 5;
int dir = 0;

int relaypin = 13;

void setup() {                
  pinMode(en, OUTPUT);
  pinMode(dir, OUTPUT);
  pinMode(relaypin, OUTPUT);     
  lidservo.attach(4);
}


void loop() {
//  pump(512);
//  delay(5000);
//  pump(0);
//  delay(5000);
 
  cookrice();
  while(true) {
     lidservo.write(90);
  }
  
  
}

void pump(int spd) {
  if (spd >= 0) {
    analogWrite(en, spd);
    digitalWrite(dir, HIGH);
  } else if (spd < 0) {
    analogWrite(en, -spd);
    digitalWrite(dir, LOW);
  }
}

void cookrice() {
  digitalWrite(relaypin, LOW);
  delay(500);
  digitalWrite(relaypin, HIGH);
}


