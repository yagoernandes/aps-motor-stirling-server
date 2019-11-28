int analogPin = A3;
int val = 0;
void setup() {
  // Inicializa a comunicação serial com uma taxa de 9600 bauds.
  Serial.begin(9600);
}
 
void loop() {
  // Enquanto houverem bytes disponíveis;
  while (true) {
    val = analogRead(analogPin);
    Serial.println(val);
    //Serial.print("HELLO\n"); // Faz o eco do byte recebido;
    delay(500);
  }
}
