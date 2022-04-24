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
          imageUrlHorizontal: "/img/2022/1.png",
          linkLista: "https://www.poli-listaperta.it/",
          organi: [
            {
              name: "Obiettivo Studenti - Lista Aperta - Ateneo Studenti",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  name: "Rioldi Pietro",
                  detto: "Rio",
                },
                {
                  id: 2,
                  name: "Salano Ludovica",
                  detto: "Ludo",
                },
                {
                  id: 3,
                  name: "Sammarini Luca",
                  detto: "Samma",
                },
                {
                  id: 4,
                  name: "Zini Maria",
                  detto: "Meri",
                },
                {
                  id: 5,
                  name: "Portaluppi Giovanni",
                  detto: "Nino",
                },
                {
                  id: 6,
                  name: "Marchesi Miriam",
                },
                {
                  id: 7,
                  name: "Monteverdi Matteo",
                  detto: "Teo",
                },
                {
                  id: 8,
                  name: "Mirione Elena",
                  detto: "Ele",
                },
                {
                  id: 9,
                  name: "Tonini Giulia",
                }
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Unione degli Universitari (UDU) - La Terna Sinistrorsa - UNI+",
          imageUrlHorizontal: "/img/2022/2.png",
          linkLista: "https://www.ternasinistrorsa.it/",
          organi: [
            {
              name: "Unione degli Universitari (UDU) - La Terna Sinistrorsa - UNI+",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  name: "Mondini Luca",
                },
                {
                  id: 2,
                  name: "Agutoli Simone",
                },
                {
                  id: 3,
                  name: "Papa Simone",
                },
                {
                  id: 4,
                  name: "Totaro Fila Ravera Luna",
                },
                {
                  id: 5,
                  name: "Calabrese Anna",
                },
                {
                  id: 6,
                  name: "Iacono Guglielmo Alberto Leonardo",
                }
              ],
            },
          ],
        },
        {
          id: 3,
          name: "Azione Universitaria [Nessuna Lista del Poli]",
          imageUrlHorizontal: "/img/2022/3.png",
          linkLista: "https://it-it.facebook.com/azioneuniversitariamilano/",
          organi: [
            {
              name: "Azione Universitaria [Nessuna Lista del Poli]",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  name: "Cei Edoardo",
                  detto: "Edoardo",
                },
                {
                  id: 2,
                  name: "Chiù Matteo",
                  detto: "Chiu",
                },
                {
                  id: 3,
                  name: "Donina Diego",
                  detto: "Diego, Donni, Duina",
                },
                {
                  id: 4,
                  name: "La Marca Simone",
                  detto: "Simone",
                },
                {
                  id: 5,
                  name: "Losiggio Rosario",
                  detto: "Rosario, Ros",
                },
                {
                  id: 6,
                  name: "Lubrini Maddalena",
                  detto: "Maddi, Maddy, Maddalena, Maddimax",
                },
                {
                  id: 7,
                  name: "Missale Giuseppe",
                  detto: "Giuseppe, Peppe",
                },
                {
                  id: 8,
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
          imageUrlHorizontal: "/img/2022/4.png",
          linkLista: "https://studentiindipendenti.it/",
          organi: [
            {
              name: "Studenti Indipendenti - Link",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  name: "Planells Crespo Asorin Rafael Josè",
                  detto: "Rafa",
                },
                {
                  id: 2,
                  name: "Fiore Alessia Maria",
                },
                {
                  id: 3,
                  name: "Balestrini Margherita",
                },
                {
                  id: 4,
                  name: "Vinciguerra Morgan",
                },
                {
                  id: 5,
                  name: "Morandi Barbara",
                },
                {
                  id: 6,
                  name: "Palmieri Elia",
                }
              ],
            },
          ],
        },
        {
          id: 5,
          name: "Primavaera degli Studenti - UniSì - La Svolta - Run - Team - Su Genova [Nessuna Lista del Poli]",
          imageUrlHorizontal: "/img/2022/5.png",
          linkLista: "https://it-it.facebook.com/unisi.statale",
          organi: [
            {
              name: "Primavaera degli Studenti - UniSì - La Svolta - Run - Team - Su Genova [Nessuna Lista del Poli]",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  name: "Giachino Gioele",
                  detto: "Gioele, Gio",
                },
                {
                  id: 2,
                  name: "Pittalis Pierfrancesco",
                  detto: "Pier, Pitt, Pierfrancesco",
                },
                {
                  id: 3,
                  name: "Morici Francesco",
                  detto: "Svolta",
                },
                {
                  id: 4,
                  name: "Appignanesi Samuele",
                  detto: "Sam",
                },
                {
                  id: 5,
                  name: "Lanzillotti Giulia",
                  detto: "Giulia",
                },
                {
                  id: 6,
                  name: "Vavassori Simone",
                  detto: "Simo, Vava",
                },
                {
                  id: 7,
                  name: "Bonomi Sveva",
                  detto: "Sveva",
                },
                {
                  id: 8,
                  name: "Gentile Lorenzo",
                }
              ],
            },
          ],
        },
        {
          id: 6,
          name: "Unilab Svoltastudenti",
          imageUrlHorizontal: "/img/2022/6.png",
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
                  detto: "Davide, Ceglie, De Ceglie",
                },
                {
                  id: 2,
                  name: "Zheng Michele Yujun",
                  detto: "Zeng, Michele",
                },
                {
                  id: 3,
                  name: "Degani Alessandra",
                },
                {
                  id: 4,
                  name: "Barbera Ludovico",
                },
                {
                  id: 5,
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
