### Vilka är vi?
* AccidentByDragon = Karl Loe
- YevShch = Yevheniia Shcherbakova
- Nebshi = Neby Adhane
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

Scenariobeskrivning... samt vilken fel bugg
* Eventuellt beskriv scenarier kortfattat.

### Saker vi inte hunnit testa
* Under feature "Seats booking":
  * Vi hade velat lägga till följande scenario: användaren kan gå ett/flera steg tillbaka i bokningen för att ändra bokningsdetaljer som film, visningstid, antal platser/kategorier därför att det är viktig för smidig bokning. 
  * Under feature "Booking confirmation":
  * Vi hade velat lägga till följande scenario: att inloggad användare bokar plats men anger ett mejl från ett annat konto och sedan kontrollerar vilken användare som har bokningsbekräftelsen på sitt konto. Därför att det är viktig att kunna avboka platser. 
  
* Under feature A:
  * Vi hade velat lägga till följande scenario... därför att.
* Under feature B:
  * Vi hade velat lägga till följande scenario... därför att.
