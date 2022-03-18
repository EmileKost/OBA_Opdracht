<h1>Read me OBA Prototype</h1>
In deze projectweek heb ik voor de Openbare Bibliotheek Amsterdam een week lang aan een opdracht gewerkt om zo een werkend prototype af te leveren en de OBA te kunnen inspireren met nieuwe ontwerpen, features of inzichten. In deze week heb ik de geleerde skills van CSS to the rescue en Web app form scratch gecombineerd.

<h2>De opdracht</h2>
Vanuit de OBA kregen we drie verschillende cases waaruit we konden kiezen. Ik koos voor de opdracht Ondernemen. Bij deze opdracht ligt de focus op de jongere doelgroep die bezig is, of wilt beginnen met ondernemen. Het is de bedoeling dat deze doelgroep gemakkelijk content over ondernemen kan opzoeken.
Om de content zo goed mogelijk aan de gebruiker mee te geven heb ik besloten om een soort OBA x Ondernemerschap actie site te maken. Deze website is speciaal bedoelt voor jonge ondernemers die of al veel weten, of nog helemaal moeten beginnen. Mijn website moet ervoor zorgen dat de gebruiker gemakkelijk basiskennis over ondernemen kan vinden, en moet het mogelijk maken om alle soort content over ondernemerschap te kunnen opzoeken. De website moet gemakkelijk toegankelijk zijn en het overzichtelijk maken van het vinden van content.

<h2>Vernieuwd OBA x Ondernemerschap logo</h2>
Om de actiesite aantrekkelijker voor jongeren te maken heb ik besloten om een apart logo te maken die speciaal in het teken staat van jonge ondernemers. Dit om de website te onderscheiden van de normale OBA website.
![oba-logo2](https://user-images.githubusercontent.com/70690100/158877894-17cf32aa-e084-4554-93d7-72c04ff319ba.jpg)

<h2>Data ophalen</h2>
Om te beginnen moest ik eerst natuurlijk de data van de API fetchen. Doordat er wat problemen waren met de toegankelijkeid kreeg iedereen een eigen key. In de getData() functie wordt uiteindelijk deze key toegewezen aan de URL waardoor de API data toegankelijk werd.
<img width="868" alt="Schermafbeelding 2022-03-17 om 20 02 55" src="https://user-images.githubusercontent.com/70690100/158877099-d6bc63da-fcbb-4b1a-a160-a8460ac7f1fc.png">
1. Dit zijn alle delen van de url die nodig zijn om de juiste url te krijgen om de data van de API te kunnen fetchen.

<img width="938" alt="Schermafbeelding 2022-03-17 om 20 03 10" src="https://user-images.githubusercontent.com/70690100/158878084-e2587c48-e878-4dda-9d71-f9703aa26e88.png">
2. Bij de fetch functie wordt de data opgehaald. Terwijl de data gefetcht wordt is de loader door middel van CSS zichtbaar. Deze wordt echter in de .catch error functie weggehaald doordat de CSS class remove-loader wordt toegevoegd waarbij de visibility op none wordt gezet en deze dus niet meer zichtbaar is.
Als de data niet goed kan worden ingeladen zal de error melding worden getoond en de .textContent worden bewerkt waardoor de juiste melding zal verschijnen. Voor de basiskennis worden maximaal zes items ingeladen doordat ik pagesize=6 in de url heb toegevoegd waardoor er maar maximaal zes items zullen worden ingeladen. Tevens is het belangrijk dat er data wordt opgehaald over basiskennis. Daarom heb ik subject%3A"Startende+ondernemingen" toegevoegd zodat alleen deze soort data wordt opgehaald.

<img width="1013" alt="Schermafbeelding 2022-03-17 om 20 14 32" src="https://user-images.githubusercontent.com/70690100/158878600-866a9ec1-66a2-4a92-bc84-8f21f455580c.png">
3. Vrijwel dezelfde functie wordt gebruikt om de data van de boekenlijst op te halen, dit is de functie getBookData(). Het enige wat moest worden verandert was de query. Door query = "boek" neer te zetten zullen er alleen boeken worden ingeladen. 

<h2>Renderen van de data</h2>
Na het ophalen van de data, moeten twee soorten data gerendert worden. De eerste data die gerendert wordt is de data van de basiskennis. Door de pagesize=6 zullen er maximaal zes items worden ingeladen.
<img width="792" alt="Schermafbeelding 2022-03-17 om 20 19 45" src="https://user-images.githubusercontent.com/70690100/158880225-e34a0ee9-0429-44d7-b937-ddb2c398ba0c.png">
1. De content wordt door middel van een forEach functie ingeladen. De content wordt aangemaakt in een aangemaakte constante variable. Hierin wordt de HTML geplaatst waardoor de data uiteindelijk gerendert kan worden door middel van insertAdjecentHTML(). 

<img width="778" alt="Schermafbeelding 2022-03-17 om 20 27 45" src="https://user-images.githubusercontent.com/70690100/158880697-9b5751ab-cd05-4de4-8c89-27100a64747b.png">
2. Dezelfde functie wordt gebruikt voor de boek data. Dezelfde functie is deels hetzelfde. Zo moet er een andere waarde in de parameters staan, en moet d HTML op een andere plaats worden ingeladen. In plaats van (data) geven we (bookData) mee waardoor de juiste content wordt gerendert. Ook wordt de data op een andere plek gerendert in een andere constante variabele. Hierbij is het <p> element met een korte samenvatting weggehaald op ruimte te besparen.
  
<h2>De zoekfunctie</h2>
Om het voor de gebruiker een toegankelijke website te maken moet het voor de gebruiker gemakkelijk zijn om content te kunnen opzoeken.
Voor de zoekfunctie hebben we drie verschillende onderdelen nodig. De eerste is een eventListener waarbij de waarde van de ingevulde data wordt meegegeven aan de getSearchData() en daarna wordt de data gerendert met de renderSearchData().

<img width="775" alt="Schermafbeelding 2022-03-17 om 20 59 04" src="https://user-images.githubusercontent.com/70690100/158886940-08700bdb-3790-43f4-bede-4267f0ae68df.png">
1. Allereerst maken we in de script.js de eventListener aan voor de zoekbalk. De functie wordt geactiveerd doordat de input ge-"submit" wordt. Tegelijkertijd wordt de functie preventDefault aangeroepen die ervoor zorgt dat de functie niet afspeelt zonder waarde. Hierna wordt de variable searchBalk aangemaakt. Daarnaast wordt de variabele searchValue aangemaakt, en deze is gelijk aan de .value van searchBalk. Voordat de zoekfunctie verder kan worden uitgevoerd wordt eerste al de eerder geplaatste content weggehaald door middel van de removeContent() functie. Door de for loop wordt uiteindelijk elk apart item weggehaald en wordt er plaats gemaakt voor de resultaten van de zoekfunctie. Nu wordt alleen nog de searchData aangeroepen en wordt de waarde searchValue in de parameter meegegeven. Ook wordt nog de functie removeContent() aangeroepen. 

<img width="1040" alt="Schermafbeelding 2022-03-17 om 20 58 34" src="https://user-images.githubusercontent.com/70690100/158890877-0f8c0864-139c-4988-aba0-e0c554f2901c.png">
2. Met de function searchData wordt de data van de zoekopdracht opgehaald. De event listener heeft de waarde searchValue vanuit de searchBalk meegegeven aan de functie. Inplaats van "query" wordt nu searchValue aan de url toegevoegd. De link plus de searchValue is de searchInput. Deze wordt weer meegegeven aan de fetch functie die daadwerkelijk de data ophaald. Nu de data eenmaal is opgehaald moet deze alleen nog gerendert worden.

<img width="743" alt="Schermafbeelding 2022-03-17 om 20 58 46" src="https://user-images.githubusercontent.com/70690100/158891231-0c00a6b4-2a48-4776-b930-293d6ba90542.png">
3. Bij de render functie wordt de waarde searchInput en searchValue meegegeven. Daarna wordt de data hetzelfde gerendert als de anderen. Door middel van de forEach functie wordt uiteindelijk de data gerendert op de website.

<h2>Features</h2>

* Weergeven basiskennis ondernemerschap 
* Boekenlijst voor jonge ondernemers
* Zoeken naar al het soort content voor jonge ondernemers
* Skeleton state
* Error state
* Loading state + animatie

<h2>Wat had ik nog willen doen?</h2>
Ik had helaas op het einde heel veel problemen met de "too many request" issue. Hierdoor heb ik met veel features niet of nauwlijks kunnen experimenteren waar ik dan ook heel erg van baal. 
Deze features had ik nog willen toevoegen:
* Carroussel met daarin de boeken
* Data inladen voor evenementen
* Detailspagina voor boeken

<h2>Link naar de website</h2>
https://emilekost.github.io/OBA_Opdracht/







