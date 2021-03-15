# Information

Detta är en webbaplikation för en tilltänkt golfklubb. GraphQL, Node.js, Express och React.js är verktygen. Vår API är designad med Users och Events som huvudaktörer. En user ska kunna skapa och titta på event, boka och avboka dessa skapade event och se en enkel statistik över hur bokningarna har blivit, prismässigt. Eventsen har titel, pris, datum och sparar vem som skapat dem. Detta för att särskilja vilken user som har skapat vilket event. Det finns också en "Om oss"-sida och förslag på en medlemssida, "My Page". Bokade events och medlemssidan kan endast ses om man är inloggad. MongoDB och deras molnbaserade Atlas-applikation som databas. Webbapplikation är en Single Page Application. Ambitionen var att också skapa en ren administratörsroll för skapandet av events men det har vi tyvärr inte löst.  

# Front End

Components: Samlingsmapp för alla komponenter. Vad vi har sett så är detta ett vanligt sätt att organisera upp ett projekt på, för att få en lättare överblick då React.js ofta handlar om komponenthantering.

Backdrop: Tar fram ramen för att skapa ett event. 

BookingList: Hämtar och visar bokningarna som är gjorde av den inloggade användaren. Här används map-funktionen som går igenom bookingslistan och renderar den listan. Cancel gör att bokningen tas bort ifrån användarens bokningslista.

BookingCharts: För att få en enklare graf hur prisnivåerna har varit vid bokningarna. 

BookingsControl: Här jobbar vi med Properties som kör en true/false statement i knapparna med JSX.

EventItem: Jobbar även med props och kör true/false statement innanför div. Checkar av om userID stämmer mot databasen och därav skickar ut paragrafen beroende på utfallet av statement.

EventList: Här jobbar vi med EventItem som en komponent och kallar på den, använder properties och .map för att gå över events och hämta de olika värdena. 

Modal: Själva backbonen för formen och "eventskaparen" som används i Events.js under Pages.  

Navigation: Innehåller den övre navigationsmenyn med länkarna till de olika sidorna. Med hjälp av användarens token avgörs det om användaren är inloggad eller ej och kan därför inte få åtkomst till alla sidor, såsom MyPage och Bookings. 

Spinner: Laddningssymbolen medans datan hämtas från databasen.

AboutUs: Sida för oss utvecklare där klienten kan få ta del av information om oss.

Auth: Innehåller logiken för inloggning eller att skapa en ny användare. Vid inloggning, vid state isLogin, skickas en query för att stämma av email och lösenord. Vid skapande av ny användare, vid state !isLogin, skickas istället en mutation. Det är switchen knappen som avgör om man är på login eller sign up. 

Events: Here we are working with state management that is important regarding front end. And also as explained in the back end section that we use our queries to fetch data in a requestBody. Try/catch for best error logging management.

App: Here we take advantage of React in terms of components when we navigate throughout our application.

Bookings: Logiken för bokningarna. Fetch för att hämta bokningarna associerade till den inloggade användaren. 


app.js: Grunden för applikation, start av server och anslutningen till databasen. 
Buildschema gör så vi kan skapa scheman med att skriva dem som stringar. 

nodemon: Hjälper till med att starta om servern vid varje tillfälle något har ändrats, för snabbare uppstart. 

# Back End

Vi har arbetat med GraphQL (första gången och overall en väldigt trevlig upplevelse). Mappen GraphQL innehåller undermappar resolvers och schema. Resolvers handlar om att arbeta mot databasen i form av att kunna skapa användare och logga in. Även samma gäller när vi pratar om events där vi både kan skapa och cancela event och kör många olika checks mot våran back end. Detsamma gäller när vi skapar events! Merge.js är vill vi lyfta fram som mergear datan i asynchronous metoder.

Mappen Schema är det fundamentala vad vi kan göra med våran GraphQL. Vi skriver in vad tex en User ska kunna ha för parametrar när vi fetchar via Queries. Om vi vill skapa något i databasen så måste vi använda oss av Mutations. Allt detta har varit ny erfarenhet för oss vilket har varit kul.

Helpers med klassen date.js är en simpel klass som skickar med en sträng av en date

Middleware har en klass som heter 'is-auth' som jobbar med request, response och next som parametrar.

Models innehåller både booking, event, user som jobbar mot mongoose.