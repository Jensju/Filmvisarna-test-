### Vilka är vi?
* AccidentByDragon = Karl Loe
- YevShch = Yevheniia Shcherbakova
- Nebshi = Neby Adhane
- Jensju = Jens Sjunnesson
- Nebshi = Neby Adhane
- Esra   = Esra Unal
- Gursell = Gursel Unal

### Vad testar vi?
Vi testar följande features:
* Feature: Seats booking
  *  Här testar vi själva bokningsprocessen:
  - om det går att boka tillgängliga platser;
  - om det går att boka reserverade platser;
  - om det går att boka mindre än en plats;
  - om det går att boka platser ifall användare anger en inkorrekt mejladress.

  * Feature: Booking confirmation
  * Här kollar vi om användare får en bokningsbekräftelse efter slutförd bokningen och om den bekräftelsen innehåller alla bokningsuppgifter, som bokad plats, en unik kod, ett namn på film samt datum och tid. Vi har testat dem i olika scenarier:
  - att inloggad användare får bokningsbekräftelse som innehåller alla bokningsdetaljer; 
  - att utloggad användare får bokningsbekräftelse; 
  - att inloggad användare får bokningsbekräftelse även om användare anger någon annans mejl.

  * Feature: Ticket price
  * I den feature kollar vi om det finns möjlighet att boka platser för olika priser och att totalt pris räknas rätt:
  - att boka en biljett till en pensionär;
  - att boka en biljett till ett barn;
  - att totalt pris räknas rätt om man bokar flera platser.

  *Feature: Filter
  * Här testar vi hur filtrering fungerar i bokningsprocessen:
  - att användare bara ser aktuella visningar och inte kan boka platser på de visningar som redan har visats;
  - att lista med visningar filtreras efter valt datum; 
  - att bokningen av antal platser filtreras efter antal tillgängliga platser och det går inte att välja fler platser/tillgängliga platser än det finns i salongen.

 *Feature: Navigera till account creation
 * här kontrollerar testerna om man kan:
  - hitta till en sida att skapa ett konto från;
   
 *Feature: Check Bookings
 * här kontrollerar testerna om man kan:
  - logga in;
  - checka sina gjorda bokningar;
   
  *Feature: Create Account
 * här kontrollerar testerna om man kan:
  - navigera till account creation;
  - skapa ett konto med en oanvänd mejl-adress;
   
*Feature: Create account negative
 * här kontrollerar testerna om man kan:
  - navigera till account creation;
  - hindras från att skapa ett konto med en tidigare använd mejl-adress;

*Feature: Login
 * här kontrollerar testerna om man kan:
  - navigera till inloggning;
  - logga in om man har rätt kontouppgifter;

*Feature: Login Negative
 * här kollar testerna om man kan:
  - navigera till inloggning;
  - hindras från att logga in om man har fel uppgifter;

* Feature: Log out
 * här kontrollerar testerna om man kan:
  - navigera till inloggning;
  - logga in;
  - logga ut korrekt;

 * Feature: Contact page
 - Testar att kontaktformuläret är interaktivt och tillåter inmatning i alla fält.

 * Feature: Find us page
  - Testar att en "hitta hit" sektion med adressuppgifter och eventuellt en karta finns i sidfoten på hemsidan. 

  * Feature: Check unique URL/Route
   - Testar att varje sida på webbplatsen har en unik URL som ändras när användaren navigerar via länkar.

* Feature: Check linked trailers
  * Testet kontrollerar att man kan förhandstitta på en youtube-trailer 
  - genoml att "klicka" på en filmaffisch
  - navigera till trailer-fönstret
  - kontrollera att man får tag i starsekvensen

* Feature: Filtering of views by date
  * Välja specifikt datum för filmlistning.
  - välja önskat datum i kalendern
  - ta tag i första film i listan
  - navigera till första steget för biljettbokning

* Feature: Reset the filtering of views by date
  * Kontrollerar att ett ändrat datum återställs med reset-knappen
  - Ändrar default-datum till ett senare datum
  - Bekräftar det nya datumet
  - klickar på resetknappen
  - Återställer kalenderdatumet till default-datum
  
* Feature : Testet kontrollerar om man kan se detaljerna i en film (bild, trailer, beskrivning, skådespelare, regissör etc).

* Feature : Testet kontrollerar om man kan se de ledig platserna i hallen.

* Feature :Testet kontrollerar synligheten för Om oss-sidan.

* Feature: View of movie trailers.
  -Att klicka på "movies" för att se "trailer".
  -Att kontollera om man kan se "trailer of movies".

* Feature: See reserved seats live 
  -Att testa om man kan boka "seats"
  -Att kontrollera om kan klicka på tiden, datumn och språket av movies.
  -Att kontollera om relaterade segmenter går vidare.
  -Att kontollera om man kan inte boka "seats" som har bokat redan.

* Feature: Cancel a booking 
  -Att kontrollera om man kan logga in
  -Att gå vidare till bokningsdetaljer efter loggning in
  -Att avboka en bokning so att man inte tar upp plats för någon annan.

* Berätta om feature B
  * Eventuellt beskriv scenarier kortfattat.
* Berätta om feature C
  * Eventuellt beskriv scenarier kortfattat.

 ### Vad visar testerna på - finns det buggar/fel i produkten? 
 De flesta scenarier går igenom utan fel, dock visar följande scenarier på buggar/fel i produkten.
 Vissa scenarier visar att det finns buggar.
 Scenario där man anger inkorrekt mejl i slutet av bokningen visar att det går, i ett fall av fyra som testades, att boka biljetter med ett mejl i fel format ("test@"). 
 I scenarier som gäller filtrering finns flera buggar: 
 - Användare får välja fler platser/tillgängliga platser än det finns i salongen och får inget alert-meddelande eller liknande som förhindrar att gå vidare till nästa steg i bokningen. 
 - Om användare väljer en film från PDP (detaljsida) då filtreras inte visningar efter datum och det går att boka platser på en visning som redan har spelats. 
 I scenarier som går igenom utan fel upptäckte vi en brist i programmet. Ex: I ett scenario där en inloggad användare bokar plats och anger någon annans mej-adress, kommer denne inte att se bokningsbekräftelsen i sina aktiva bokningar. Även när användare angivit sin egen mejl-adress vid bokning syns ändå inte bokningsbekräftelsen i bokningar, hen får bara en bekräftelse på sitt mejl. Och ingen av de två användare kan avboka de platser som bokats.

I scenarier för account creation finns det en bugg i featuren:
- man måste manuellt gå in och ändra den inmatade mejl-adressen efter varje lyckad körning, då man inte kan använda samma mejl flera gånger för att skapa ett konto.

I scenarier för Seats booking går det att maximalt att boka så många platser som följer fram till nästkommande reda bokade stol. Det går alltså inte att boka för exempelvis sex personer vid samma bokningstillfälle om det max finns fem stolar sammanhållet i en följd, även om det finns fler lediga platser i salongen. Då måste det göras en extra bokning.

Scenariobeskrivning... samt vilken fel bugg
* Eventuellt beskriv scenarier kortfattat.

### Saker vi inte hunnit testa
* Under feature "Seats booking":
  * Vi hade velat lägga till följande scenario: användaren kan gå ett/flera steg tillbaka i bokningen för att ändra bokningsdetaljer som film, visningstid, antal platser/kategorier därför att det är viktig för smidig bokning. 
  * Under feature "Booking confirmation":
  * Vi hade velat lägga till följande scenario: att inloggad användare bokar plats men anger ett mejl från ett annat konto och sedan kontrollerar vilken användare som har bokningsbekräftelsen på sitt konto. Därför att det är viktig att kunna avboka platser. 
+ Vi hade velat testa "Age limit booking": 
  + Det finns ingen begränsning för att boka biljett till filmer med åldersgräns utan det går utmärkt att boka barnbiljett till dessa visningar.

+ Vi hade också tänkt ha en Feature för: Filtering movies by age limit, men dessvärre fanns det ingen sådan funktion på siten.

 
  
* Under feature A:
  * Vi hade velat lägga till följande scenario... därför att.
* Under feature B:
  * Vi hade velat lägga till följande scenario... därför att.




