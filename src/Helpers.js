import * as THREE from 'three';

export const helpers = (scene) => {
    const axis = new THREE.AxisHelper(20);
    scene.add(axis);
    const radius = 20;    const radials = 20;    const circles = 20;    const divisions = 64;
    const gridHelper = new THREE.PolarGridHelper( radius, radials, circles, divisions );
    scene.add(gridHelper);
};


export const dataArray = {
    'sun' : '<h2> Słońce </h2> <p> Gwiazda centralna Układu Słonecznego, wokół której krąży Ziemia, inne planety tego układu, planety karłowate oraz małe ciała Układu Słonecznego. </p> <p>Słońce uformowało się około 4,567 mld lat temu. Słońce to najjaśniejszy obiekt na niebie i główne źródło energii docierającej do Ziemi. Zbudowane głównie z wodoru i helu. Ciśnienie 250 mld atmosfer. Temperatura na powierzchni ok.6000 K. </p> <p>Średnica ok. 1,4 mln km. Pokryte jest ciemnymi plamami. </p>',

    'mercury' : '<h2> Merkury </h2> <p>Pierwsza według oddalenia od Słońca planeta Układu Słonecznego. Jest planetą wewnętrzną, skalistą, zwaną także planetą „Lodu i ognia”. W ciągu doby występują 2 wschody i zachody Słońca. Obieg wokół Słońca 88 dni. Obrót wokół własnej osi 59 dni.</p> <p> Średnica 4 900 km. Odległość od Słońca 58 mln km. W dzień temperatura rozgrzewa się do 430*C a w nocy spada do -170*C. Nie posiada atmosfery. Nie ma księżyca. </p>',

    'venus' : '<h2> Wenus </h2> <p>Druga według oddalenia od Słońca planeta Układu Słonecznego. Znana jest również pod nazwą Jutrzenki i jest najjaśniejszym ciałem niebieskim na niebie po Słońcu i Księżycu. Jest to planeta wewnętrzna, skalista.</p><p> Masa, rozmiar i kształt podobne do Ziemi. Obieg wokół Słońca 225 dni. Obrót wokół własnej osi 243 dni. Średnica 12 100 km. Odległość od Słońca 108 mln km. Temp. Powierzchni 475C. Atmosfera zawiera pary i krople kwasu siarkowego (VI). Nie ma księżyca.</p>',

    'earth' : ' <h2> Ziemia </h2> <p> Trzecia według oddalenia od Słońca planeta Układu Słonecznego. Jest ona największa ze wszystkich planet wewnętrznych. Powierzchnię głównie zajmują oceany. Obieg wokół Słońca 365 dni. Obrót wokół własnej osi 24 h. </p>  <p>Odległość od Słońca wynosi jedną jednostkę astronomiczną 150 mln km. Temp. Powierzchni 14*C. Atmosfera właściwa, złożona z 78% azotu, 21% tlenu i 1% innych gazów. Posiada 1 naturalnego satelitę, czyli Księżyc.</p>    ',

    'mars' : ' <h2> Mars </h2> <p>Czwarta według oddalenia od Słońca planeta Układu Słonecznego. Planeta skalista, wewnętrzna. Występuje woda i żelazo, czapy lodowe, pory roku, a także złożona atmosfera. Obieg wokół Słońca 2 lata.</p>  <p>Obrót wokół własnej osi 24 h. Średnica 6 800 km. Odległość od Słońca 228 mln km. Temp. pow. od –93 do 27*C. Posiada 2 księżyce. </p>    ',

    'jupiter' : ' <h2> Jowisz  </h2>  <p>Piąta według oddalenia od Słońca planetą Układu Słonecznego. Jest on zarazem największą i najcięższą planetą. Jest planetą gazową, zewnętrzną. Ma bardzo małą gęstość.</p> <p> Obieg wokół Słońca 12 lat. Obrót wokół własnej osi 10 h. Średnica 143 000 km. Odległość od Słońca 778 mln km. Temp. pow. –150*C. Posiada 32 księżyce</p>   ',

    'saturn' : ' <h2> Saturn </h2>  <p>Szósta według oddalenia od Słońca planeta Układu Słonecznego. Jest to planeta gazowa, zewnętrzna. Gęstość materii z jakiej jest zbudowany jest mniejsza od gęstości wody. </p> <p>Masa 75 razy większa od masy Ziemi. Obieg wokół Słońca 30 lat. Obrót wokół własnej osi 10 h. Średnica 121 000 km.</p> <p> Odległość od Słońca 1 430 mln km. Temp. pow. –180*C. Posiada 3 pierścienie. 28 księżyców, z których 2 mają atmosferę właściwą, a największy Tytan ma gęstą atmosferę. </p>  ',

    'uranus' : ' <h2> Uran </h2>   <p>Siódma według oddalenia od Słońca planeta Układu Słonecznego. Jest to planeta gazowa, zewnętrzna. Został on odkryty w 1871r. Spowity metanem. Obieg wokół Słońca 84 lata.  </p>   <p>Obrót wokół własnej osi – 17 h. Średnica 52 400 km. Odległość od Słońca 2 900 mln km. Temp. pow. od –271*C do –213*C. Posiada pierścienie i 15 księżyców (Miranda).</p>   ',

    'neptune' : ' <h2> Neptun </h2>  <p> Ósma według oddalenia od Słońca planeta Układu Słonecznego. Został on odkryty w 1846r. Jest to planeta gazowa, zewnętrzna. Atmosfera niebieska od zawartego w niej metanu. Obieg wokół Słońca – 165 lat. Obieg wokół własnej osi 18 h. Średnica 50 000 km. Odległość od słońca 4 500 mln km. Temp. pow. –210*C. Posiada 4 bardzo rzadkie i wąskie pierścienie, a także 14 księżyców.</p> ',

}
