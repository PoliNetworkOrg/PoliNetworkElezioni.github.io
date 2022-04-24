<template>
  <div>
    <PagesSenatoCda
      :language="$i18n.locale"
      :organi-confronto="organiConfronto"
      :liste="liste"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      organiConfronto: [
        {
          id: 1,
          name: "CNSU",
          desc: "Il Consiglio nazionale degli studenti universitari (CNSU) è un organo consultivo del Ministero dell'università e della ricerca italiano. Previsto dalla legge 15 marzo 1997, n. 59 venne però di fatto istituito con il D.P.R. 2 dicembre 1997, n. 491. ",
        },
      ],

      liste: [
        {
          id: 1,
          name: "Obiettivo Studenti - Lista Aperta - Ateneo Studenti",
          imageUrlHorizontal: "/img/2022/1.jpg",
          linkLista: "https://www.poli-listaperta.it/",
          organi: [
            {
              name: "Obiettivo Studenti - Lista Aperta - Ateneo Studenti",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Rioldi Pietro",
                  detto: "Rio",
                },
                {
                  id: 2,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Salano Ludovica",
                  detto: "Ludo",
                },
                {
                  id: 3,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Sammarini Luca",
                  detto: "Samma",
                },
                {
                  id: 4,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Zini Maria",
                  detto: "Meri",
                },
                {
                  id: 5,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Portaluppi Giovanni",
                  detto: "Nino",
                },
                {
                  id: 6,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Marchesi Miriam",
                  detto: "-",
                },
                {
                  id: 7,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Monteverdi Matteo",
                  detto: "Teo",
                },
                {
                  id: 8,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Mirione Elena",
                  detto: "Ele",
                },
                {
                  id: 9,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Tonini Giulia",
                  detto: "-",
                }
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Unione degli Universitari (UDU) - La Terna Sinistrorsa - UNI+",
          imageUrlHorizontal: "/img/2022/2.jpg",
          linkLista: "https://www.ternasinistrorsa.it/",
          organi: [
            {
              name: "Unione degli Universitari (UDU) - La Terna Sinistrorsa - UNI+",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Mondini Luca",
                },
                {
                  id: 2,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Agutoli Simone",
                },
                {
                  id: 3,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Papa Simone",
                },
                {
                  id: 4,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Totaro Fila Ravera Luna",
                },
                {
                  id: 5,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Calabrese Anna",
                },
                {
                  id: 6,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Iacono Guglielmo",
                }
              ],
            },
          ],
        },
        {
          id: 3,
          name: "Azione Universitaria [Nessuna Lista del Poli]",
          imageUrlHorizontal: "/img/2022/3.jpg",
          linkLista: "https://it-it.facebook.com/azioneuniversitariamilano/",
          organi: [
            {
              name: "Azione Universitaria [Nessuna Lista del Poli]",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Cei Edoardo",
                  detto: "Edoardo",
                },
                {
                  id: 2,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Chiù Matteo",
                  detto: "Chiu",
                },
                {
                  id: 3,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Donina Diego",
                  detto: "Diego, Donni, Duina",
                },
                {
                  id: 4,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "La Marca Simone",
                  detto: "Simone",
                },
                {
                  id: 5,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Losiggio Rosario",
                  detto: "Rosario, Ros",
                },
                {
                  id: 6,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Lubrini Maddalena",
                  detto: "Maddy, Maddimax",
                },
                {
                  id: 7,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Missale Giuseppe",
                  detto: "Giuseppe, Peppe",
                },
                {
                  id: 8,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Oglina Elisa",
                  detto: "Elisa",
                }
              ],
            },
          ],
        },
        {
          id: 4,
          name: "Studenti Indipendenti - Link",
          imageUrlHorizontal: "/img/2022/4.jpg",
          linkLista: "https://studentiindipendenti.it/",
          organi: [
            {
              name: "Studenti Indipendenti - Link",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Planells Crespo Rafael",
                },
                {
                  id: 2,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Fiore Alessia Maria",
                },
                {
                  id: 3,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Balestrini Margherita",
                },
                {
                  id: 4,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Vinciguerra Morgan",
                },
                {
                  id: 5,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Morandi Barbara",
                },
                {
                  id: 6,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Palmieri Elia",
                }
              ],
            },
          ],
        },
        {
          id: 5,
          name: "Primavaera degli Studenti - UniSì - La Svolta - Run - Team - Su Genova [Nessuna Lista del Poli]",
          imageUrlHorizontal: "/img/2022/5.jpg",
          linkLista: "https://it-it.facebook.com/unisi.statale",
          organi: [
            {
              name: "Primavaera degli Studenti - UniSì - La Svolta - Run - Team - Su Genova [Nessuna Lista del Poli]",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Giachino Gioele",
                  detto: "Gioele, Gio",
                },
                {
                  id: 2,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Pittalis Pierfrancesco",
                  detto: "Pier, Pitt",
                },
                {
                  id: 3,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Morici Francesco",
                  detto: "Svolta",
                },
                {
                  id: 4,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Appignanesi Samuele",
                  detto: "Sam",
                },
                {
                  id: 5,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Lanzillotti Giulia",
                  detto: "Giulia",
                },
                {
                  id: 6,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Vavassori Simone",
                  detto: "Simo",
                },
                {
                  id: 7,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Bonomi Sveva",
                  detto: "Sveva",
                },
                {
                  id: 8,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Gentile Lorenzo",
                  detto: "-",
                }
              ],
            },
          ],
        },
        {
          id: 6,
          name: "Unilab Svoltastudenti",
          imageUrlHorizontal: "/img/2022/6.jpg",
          linkLista: "https://www.svoltastudenti.it/",
          organi: [
            {
              name: "Unilab Svoltastudenti",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Di Ceglie Davide",
                  detto: "Ceglie, De Ceglie",
                },
                {
                  id: 2,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Zheng Michele Yujun",
                  detto: "Zeng, Michele",
                },
                {
                  id: 3,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Degani Alessandra",
                  detto: "-",
                },
                {
                  id: 4,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Barbera Ludovico",
                  detto: "-",
                },
                {
                  id: 5,
                  imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Bori Elisa",
                  detto: "Eli, Elisa",
                }
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
