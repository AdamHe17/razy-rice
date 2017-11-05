#include <Servo.h>

#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

int en = 5;
int dir = 0;

int relaypin = 13;
Servo lidservo;
Servo riceservo;

//int inputpin = 12;

#define FIREBASE_HOST "razy-rice.firebaseio.com"
#define FIREBASE_AUTH "a7k1DD3pGBfwiJqsnCDtbfnkrWht1G4CeCvlkU6X"

#define WIFI_SSID "op3"
#define WIFI_PASSWORD "17292358"

int numcups;

void setup() {
  pinMode(en, OUTPUT);
  pinMode(dir, OUTPUT);
  pinMode(relaypin, OUTPUT);
  digitalWrite(relaypin, HIGH);
  lidservo.attach(12);
  riceservo.attach(4);

  //    // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  //  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    //    Serial.print(".");
    delay(500);
  }


  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.set("arduino_on", 1);
  Firebase.set("numcups", 0);
}


void loop() {
  numcups = Firebase.getInt("numcups");
  if (numcups > 4) {
    numcups = 4;
  }

  if (numcups > 0) {
    razy(numcups);
    Firebase.set("numcups", 0);
//    Firebase.set("status", "Cooking");
    while (true) {
      delay(10000);
    }
  }

//  while (true) {
//    delay(10000);
//  }  
}

void razy(int cups) {
  pushrice(cups);
  pumpwater(cups);
  pushlid();
  cookrice();
}
void pushrice(int cups) {
  riceservo.write(180);
  delay(cups*21000);
  riceservo.writeMicroseconds(1500);
}

void pumpwater(int cups) {
  pump(512);
  delay(cups * 20000);
  pump(0);
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

void pump(int spd) {
  if (spd >= 0) {
    analogWrite(en, spd);
    digitalWrite(dir, HIGH);
  } else if (spd < 0) {
    analogWrite(en, -spd);
    digitalWrite(dir, LOW);
  }
}

