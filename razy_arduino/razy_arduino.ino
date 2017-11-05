#include <Servo.h>

#include <ESP8266WiFi.h>
#include <FirebaseArduino.h> 

int en = 5;
int dir = 0;

int relaypin = 13;
Servo lidservo;

//int inputpin = 12;

#define FIREBASE_HOST "razy-rice.firebaseio.com"
#define FIREBASE_AUTH "a7k1DD3pGBfwiJqsnCDtbfnkrWht1G4CeCvlkU6X"

#define WIFI_SSID "op3"
#define WIFI_PASSWORD "17292358"

int ricesignal;

void setup() {                
  pinMode(en, OUTPUT);
  pinMode(dir, OUTPUT);
  pinMode(relaypin, OUTPUT);     
  digitalWrite(relaypin, HIGH);
//  pinMode(inputpin, INPUT);

//    // connect to wifi.
//  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
//  //  Serial.print("connecting");
//  while (WiFi.status() != WL_CONNECTED) {
//    //    Serial.print(".");
//    delay(500);
//  }
  lidservo.attach(12);

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.set("arduino_on", 0);
  Firebase.set("ricesignal", 0);
}


void loop() {
//  pump(512);
//  delay(5000);
//  pump(0);
//  delay(5000);

//  ricesignal = Firebase.getInt("ricesignal");
//
//  if(digitalRead(inputpin) == 1) {
//    cookrice();
//  }
//
//  if(ricesignal == 1) {
//    cookrice();
//    Firebase.set("ricesignal", 0);
//  }
 
//  cookrice();
pushlid();
  
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

void pushlid() {
  lidservo.write(90);
  delay(2000);
  lidservo.write(170);
  delay(2000);
  lidservo.write(90);
  delay(2000);
}


