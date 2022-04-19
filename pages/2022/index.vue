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
          name: "Svoltastudenti",
          imageUrlHorizontal: "/img/logo-svolta_hor.png",
          linkLista: "https://www.svoltastudenti.it/",
          organi: [
            {
              name: "CSNU",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [
                {
                  id: 1,
                  imgUrl:
                    "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
                  name: "Di Ceglie Davide",
                  detto: "REFLASH",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Lista aperta",
          imageUrlHorizontal: "/img/logo-listaaperta_hor.png",
          linkLista: "/2021/lista/listaaperta/",
          organi: [
            {
              name: "CSNU",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [],
            },
          ],
        },
        {
          id: 3,
          name: "Terna sinistrorsa",
          imageUrlHorizontal: "/img/logo-terna_hor.png",
          linkLista: "/2021/lista/ternasinistrorsa/",
          organi: [
            {
              name: "CSNU",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [],
            },
          ],
        },
        {
          id: 4,
          name: "Studenti indipendenti",
          imageUrlHorizontal: "/img/logo-sip_hor.png",
          linkLista: "/2021/lista/studentiindipendenti/",
          organi: [
            {
              name: "CSNU",
              desc: "Descrizione di quello che vuole fare la lista...",
              candidati: [],
            },
          ],
        },
      ],
    };
  },
};
</script>
