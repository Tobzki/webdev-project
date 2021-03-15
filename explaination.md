Detta är en webbaplikation för en tilltänkt golfklubb. GraphQL, Node.js, Express och React.js är verktygen. Vår API är designad med Users och Events som huvudaktörer. En user ska kunna skapa och titta på event, boka och avboka dessa skapade event och se en enkel statistik över hur bokningarna har blivit, prismässigt. Eventsen har titel, pris, datum och sparar vem som skapat dem. Detta för att särskilja vilken user som har skapat vilket event. Det finns också en "Om oss"-sida och förslag på en medlemssida, "My Page". Bokade events och medlemssidan kan endast ses om man är inloggad. MongoDB och deras molnbaserade Atlas-applikation som databas. Webbapplikation är en Single Page Application. Ambitionen var att också skapa en ren administratörsroll för skapandet av events men det har vi tyvärr inte löst.  


From the top!

Components: Samlingsmapp för alla komponenter.

Backdrop: Tar fram ramen för att skapa ett event. 

BookingList: Hämtar och visar bokningarna som är gjorde av den inloggade användaren. Här används map-funktionen som går igenom bookingslistan och renderar den listan. Cancel gör att bokningen tas bort ifrån användarens bokningslista.

BookingCharts: För att få en enklare graf hur prisnivåerna har varit vid bokningarna. 

BookingsControl: 

EventItem: 

EventList: 

Modal: Själva backbonen för formen och "eventskaparen" som används i Events.js under Pages.  

Navigation: Innehåller den övre navigationsmenyn med länkarna till de olika sidorna. Med hjälp av användarens token avgörs det om användaren är inloggad eller ej och kan därför inte få åtkomst till alla sidor, såsom MyPage och Bookings. 

Spinner: Laddningssymbolen medans datan hämtas från databasen.

Context: 

Pages: 

AboutUs: Sida för oss utvecklare.

Auth: Innehåller logiken för inloggning eller att skapa en ny användare. Vid inloggning, vid state isLogin, skickas en query för att stämma av email och lösenord. Vid skapande av ny användare, vid state !isLogin, skickas istället en mutation. Det är switchen knappen som avgör om man är på login eller sign up. 

Bookings: Logiken för bokningarna. Fetch för att hämta bokningarna associerade till den inloggade användaren. 


app.js: Grunden för applikation, start av server och anslutningen till databasen. 
Buildschema gör så vi kan skapa scheman med att skriva dem som stringar. 

nodemon: Hjälper till med att starta om servern vid varje tillfälle något har ändrats, för snabbare uppstart. 