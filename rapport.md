### Vad testar vi?
Vi testar följande features:
*Feature: Seats booking
  *  Här testar vi själva bokningsprocessen:
  - om det går att boka tillgängliga platser;
  - om det går att boka reserverade platser;
  - om det går att boka mindre än en plats;
  - om det går att boka platser i fall där användare anger inkorrekt mejl adresen.

  *Feature: Booking confirmation
  * Här kollar vi om användare får en bokningsbekräftelse efter slutförd bokningen och om den bekräftelsen innehåller alla bokningsuppgifter som bokad plats, en unik kod, ett namn på film samt datum och tid. Vi har testat de i olka scenarier:
  - att inloggad användare får bokningsbekräftelse som innehåler alla bokningsdetaljer; 
  - att utloggad användare får bokningsbekräftelse; 
  - att inloggad användare får bokningsbekräftelse även om användare anger någons annat mejl.

  *Feature: Ticket price
  * I denna feature kollar vi om det finns möjlighet att boka platser för olika priser och att det totala priset räknas rätt:
  - att boka en biljett till ett pensionär;
  - att boka en biljett till ett barn;
  - att totaltpriset räknas rätt om man bokar flera platser.

  *Feature: Filter
  * Här testar vi hur filtreringen fungerar i bokningsprocessen:
  - att användare bara ser de aktuella visningarna och inte kan boka platser på de visningar som har redan spelats;
  - att lista med visnigar filtreras efter valt datum; 
  - att bokningen av antal platser filtreras efter antal tillgängliga platser och att man kan välja fler platser/tillgängliga platser än det finns i salongen.

 *Feature: Navigera till account creation
 * här kontrollerar testerna om man kan:
  -hitta till en sida där man kan skapa ett konto
   
 *Feature: Check Bookings
 * här kontrollerar testerna om man kan:
  -logga in
  -se sina inloggade bokningar
   
*Feature: Create Account
  * här checkar testerna om man kan:
  -navigera till "account creation"
  -skapa ett konto med en oanvänd mejl-adress
   
*Feature: Create account negative
 * här undersöker testerna om man kan:
  -navigera till account creation
  -hindras från att skapa ett konto med en tidigare använd mejl

*Feature: Login
 * här kontrollerar testerna om man kan:
  -navigera till inloggning
  -loggar in om man har rätt konto uppgifter

*Feature: Login Negative
 * här kontrollerar testerna om man kan:
  -navigera till inloggning
  -hindras från att logga in om man har fel uppgifter

*Feature: Log out
 * här kontrollerar testerna om man kan:
  -navigera till inloggning
  -logga in
  -logga ut korrekt

*Berätta om feature B
  * Eventuellt beskriv scenarier kortfattat.
  * Berätta om feature C
  * Eventuellt beskriv scenarier kortfattat.

 ### Vad visar testerna på - finns det buggar/fel i produkten? 
 De flesta scenarier går igenom utan fel, dock visar följande scenarier på buggar/fel i produkten
 Vissa scenarier visar att det finns buggar.
 Scenario där man anger inkorrekt mejl i slutet av bokningen visar att det går, i ett fall av fyra som testades, att boka biljetter med ett mejl i fel format ("test@"). 
 I scenarier som gäller filtrering finns flera buggar: 
 - Användare får välja fler platser än vad som finns tillgängligt, och får inget alert-meddelande eller liknande som förhindrar att man kan gå vidare till nästa steg i bokningen. 
 - Om användare väljer en film från PDP (detaljsida) då filtreras inte visningar efter datum och det går att boka platser på en visning som har redan gått. 
 I scenarier som går igenom utan fel upptäckte vi ett brist i programmet. Ex: i en scenario där en inloggad användare bokar plats och ange någons mejl, ser inte användaren bokningsbekräftelsen i sina aktiva bokningar. Inte heller användaren, vars mejl-adress angivits vid bokningen, kan se bokningsbekräftelsen i sina bokningar, hen får bara bekräftelse på sitt mejl. Ingen av dessa två användare kan avboka de bokade platserna.
 - Går att boka barnbiljett även för filmer merd 

I scenarier för account creation så finns det en bugg/feature:
- man måste manuellt gå in och ändra det inmatade mejlen efter varje lyckad körning då det inte går att använda samma mejl flera gånger för att skapa ett konto

Scenariobeskrivning... samt vilken fel bugg
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



Feature: Kontrollera trailers
– Kontrollerar att det går att klicka på filmposter-filmerna
– att länk finns till filmtrailer för respektive film.

Feature: Datumval
– Kontrollerar att det går att göra ett nytt datumval från när tillgängliga filmer ska visas.
– Leder till startfält för bokningsförarandet.

Feature: Återställning av datumval
– kontrollerar att det går att återställa ett ändrat datum till dagens datum via återställningsknappen.

Tänkt feature: åldersgränsbegränsning.
Kunde inte kontrolleras då det inte finns någon begränsning att kontrollera. Går att boka barnbiljett utan vuxen även på högre åldersgränser.