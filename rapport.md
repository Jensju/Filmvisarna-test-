### Vad testar vi?
Vi testar följande features:
* Feature: Seats booking
  *  Här testar vi själva boknings process:
  - om det går att boka tillgängliga platser;
  - om det går att boka reserverade platser;
  - om det går att boka mindre än en plats;
  - om det går att boka platser i fall användare anger inkorrekt mejl adresen.

  * Feature: Booking confirmation
  * Här kollar vi om användare får en bokningsbekräftelse efter slutförd bokningen och om den bekräftelsen innehåller alla boknings uppgifter som bokad plats, en unik kod, ett namn på film samt datum och tid. Vi har testat de i olka scenarier:
  - att inloggad användare får bokningsbekräftelse som innehåler alla bokningsdetaljer; 
  - att utloggad användare får bokningsbekräftelse; 
  - att inloggad användare får bokningsbekräftelse även om användare anger någons annat mejl.

  * Feature: Ticket price
  * I den feature kollar vi om det finns möjlighet att boka platser för olika priser och att totalt pris räknas rätt:
  - att boka ett biljett till pensionär;
  - att boka ett biljett till barn;
  - att totalt pris räknas rätt om man bokar flera platser.

  *Feature: Filter
  * Här testar vi hur fungerar filtrering i boknings processen:
  - att användare ser bara aktuella visningar och kan inte boka platser på de visningar som har redan gått;
  - att lista med visnigar filtreras efter vald datum; 
  - att bokningen av antal platser filtreras efter antal tillgängliga platser och det går inte att välja fler platser/tillgängliga platser än finns i salongen.

 *Feature: Navigera till account creation
 * här kollar testerna om man kan:
  -hitta till en sida att skapa konto från
   
 *Feature: Check Bookings
 * här kollar testerna om man kan:
  -logga in
  -kolla sina inloggade bokningar
   
  *Feature: Create Account
 * här kollar testerna om man kan:
  -navigera till account creation
  -skapa ett konto med ett oanvänd mejl
   
*Feature: Create account negative
 * här kollar testerna om man kan:
  -navigera till account creation
  -hindras från att skapa ett konto med en tidigare använd mejl

*Feature: Login
 * här kollar testerna om man kan:
  -navigera till inloggning
  -logga in om man har rätt konto uppgifter

*Feature: Login Negative
 * här kollar testerna om man kan:
  -navigera till inloggning
  -hindras från att logga in om man har fel uppgifter

*Feature: Log out
 * här kollar testerna om man kan:
  -navigera till inloggning
  -logga in
  -logga ut korrekt

* Berätta om feature B
  * Eventuellt beskriv scenarier kortfattat.
* Berätta om feature C
  * Eventuellt beskriv scenarier kortfattat.

 ### Vad visar testerna på - finns det buggar/fel i produkten? 
 De flesta scenarier går igenom utan fel, dock visar följande scenarier på buggar/fel i produkten
 Vissa scenarier visar att det finns buggar.
 Scenario där man anger inkorrekt mejl i slutet av bokningen visar att det går, i ett fall av fyra som testades, att boka biljetter med ett mejl i fel format ("test@"). 
 I scenarier som gäller filtrering finns flera buggar: 
 - Användare får välja fler platser/tillgängliga platser än finns och får inget alert meddelande eller liknande som förhindrar att gå till nästa steg i bokningen. 
 - Om användare väljer en film från PDP (detaljsida) då filtreras inte visningar efter datum och det går att boka platser på en visning som har redan gått. 
 I scenarier som går igenom utan fel upptäckte vi ett brist i programmet. Ex: i en scenario där inloggad användare bokar plats och ange någons mejl ser inte användare den bokningsbekräftelse i sina aktiva bokningar. Och till och med användare vems mejl angets vid bokningen ser inte den bokningsbekräftelse hellre i sina bokningar, hen får bara bekräftelse på sitt mejl. Och ingen av de tva användare kan avboka de platserna som varit bokade.
*I scenarier för account creation så finns det en bugg/feature:
- man måste manuellt gå in och ändra den inmatade mejlen efter varje lyckad körning då man kan inte använda samma mejl flera gånger för att skapa ett konto
 * Scenariobeskrivning... samt vilken fel bugg
* Eventuellt beskriv scenarier kortfattat.

### Saker vi inte hunnit testa
* Under feature "Seats booking":
  * Vi hade velat lägga till följande scenario: användaren kan gå ett/flera steg tillbaka i bokningen för att ändra bokningsdetaljer som film, visningstid, antal platser/kategorier därför att det är viktig för smidig bokning. 
  * Under feature "Booking confirmation":
  * Vi hade velat lägga till följande scenario att inloggad användare bokar plats och anger någons mejl från annat konto och sedan kollar om den användare eller den andra användare har den bokningsbekräftelse på sitt konto därför att det är viktig att kunna avboka platser. 
* Under feature A:
  * Vi hade velat lägga till följande scenario... därför att.
* Under feature B:
  * Vi hade velat lägga till följande scenario... därför att.
