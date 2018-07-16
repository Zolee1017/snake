# Fejlesztői leírás

## Technológia
* JAVASCRIPT
* HTML
* CSS

## játéktér
*  egy div ami magába foglalja a többi divet, amelyek "display: inline" beállításuak.
* a méretezést egy függvénnyel oldjuk meg, ami egyszer lefut az oldal megnyitásakor, és akkor is, ha átméretezik az oldalt
* a négyzetek szélességét százalékosan adjuk meg
* egy legördülő menüben lehet kiválasztani a játéktér szélességét
* a 'tile' osztályhoz rendeljük az egyes csempéket
* az eledel csempe osztálya legyen 'food', a kígyó csempe osztálya 'snake', az üres csempe osztálya pedig "empty"

## a kígyó mozgása
* a "new game" gomb hatására a kígyó középen megjelenik
* azonnal indul a kígyó jobbra
* lépésenkénti ellenőrzés: a csempe oszályát vizsgáljuk. Ha snake az osztály, legyen vége a játéknak
* ha food, akkor nő egyet a kígyó. Ha nincs olyan csempe ahová lépni akara fej, akkor játék vége
* irányítás: keydown eseményre változzon az irány
* óraütésre mindig elvégezzük az összes ellenőrzést egy metódusban
* a kígyó testét egy tömbben tároljuk, lépés után minden tömb elem az előző helyébe lép

## pontok és eledel
* a points változóban tároljuk az aktuális pontokat
* egy eledel egy pontot ér,
* random jelenik meg egyszerre egy eledel
* ellenőrizni kell, hogy ne a kígyó testére essen  a kaja pozicija
* ha a kígyó feje rálép az eledelre, akkor növeljök a pontokat
* az eledel elfogyasztása után újat deklarálunk
