<template>
  <div>
    <ListeListaDettaglio :data-lista="items" :language="$i18n.locale" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {
        name: "Studenti Indipendenti",
        mainWebsiteUrl: "https://studentiindipendenti.it/",
        mainProgrammaUrl:
          "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Studenti_Indipendenti.pdf",
        desc: [
          "Studenti Indipendenti è la nuova lista di rappresentanza del Politecnico, indipendente, aconfessionale e apartitica. Per noi fare rappresentanza non è un fine a cui arrivare ma un mezzo con il quale migliorare la vita degli studenti. La nostra idea di Università è un luogo laico, inclusivo è sostenibile, in cui incentivare la cooperazione e fare comunità a tutela del percorso formativo e del benessere psicologico di ciascuno.",
        ],
        imageUrl: "/img/sip2.png",
        instagram: "https://www.instagram.com/studenti.indipendenti.polimi/",
        programmaSottotitolo:
          "Per la rappresentanza come mezzo e non come fine",
        programma: [
          {
            id: 1,
            title: "Aumentiamo gli appelli annui",
            url: "/img/2021/programmi/studentiindipendenti/2.webp",
            desc: "Proponiamo di aumentare il numero totale di appelli all’anno ad almeno 7, di istituire una sessione straordinaria per i ripetenti e di dare la possibilità istituzionale di svolgere il primo appello durante il secondo parziale.",
          },
          {
            id: 2,
            title: "Assorbenti e preservativi gratuiti",
            url: "/img/2021/programmi/studentiindipendenti/3.webp",
            desc: "Chiediamo che vengano installati distributori di assorbenti gratuiti, garantendo alla componente femminile l’accesso a un bene di necessità. Chiediamo inoltre l’installazione di distributori di preservativi gratuiti per combattere la diffusione delle malattie sessualmente trasmissibili.",
          },
          {
            id: 3,
            title: "Borracce gratuite e Ufficio sostenibilità",
            url: "/img/2021/programmi/studentiindipendenti/2.webp",
            desc: "Per combattere il consumo di plastica proponiamo che venga fornita gratuitamente una borraccia di alluminio per tuttз lз studentз. Chiediamo l’istituzione di un Ufficio Sostenibilità di ateneo col compito di monitorare l’impatto ambientale e l’impegno ecologico del Poli.",
          },
          {
            id: 4,
            title: "Licenze per tuttз",
            url: "/img/2021/programmi/studentiindipendenti/4.webp",
            desc: "Proponiamo che vengano erogate a tutta la componente studentesca le licenze dei software più comunemente utilizzati e che vengano messi a disposizione gratuitamente su richiesta anche i software più specifici senza escludere lз studentз in base al corso di studio.",
          },
        ],
        senato: {
          desc: "Per noi in Senato è importante discutere di decisioni politiche aprendo davvero alla possibilità di portare i temi dellз studentз senza il filtro del compromesso in modo da dialogare con gli altri componenti ateneo avendo ben chiara l'opinione di tuttз.",
          candidati: [
            {
              id: 1,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/jonathan_wolff_sen.PNG",
              name: "Wolff Jonathan",
              detto: "JONNY",
            },
            {
              id: 2,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/andrea_iodice.PNG",
              name: "Iodice Andrea",
              detto: "",
            },
            {
              id: 3,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/maria_nicole_deluca_sen.PNG",
              name: "Deluca Maria Nicole",
              detto: "",
            },
            {
              id: 4,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/milagros_magaz.PNG",
              name: "Magaz Milagros",
              detto: "MILI",
            },
            {
              id: 5,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/marco_zamboni_sen.PNG",
              name: "Zamboni Marco",
              detto: "ZAMBO",
            },
            {
              id: 6,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/edoardo_marcucci_sen.PNG",
              name: "Marcucci Edoardo",
              detto: "",
            },
            {
              id: 7,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/mario_spiniello_sen.PNG",
              name: "Spiniello Mario",
              detto: "",
            },
            {
              id: 8,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/davide_stramare_sen.PNG",
              name: "Stramare Davide",
              detto: "DADO",
            },
          ],
        },
        CdA: {
          desc: "Vogliamo aumentare la gestione dei fondi volgendola a rendere il Politecnico un'Università d'avanguardia in termini di vivibilità negli spazi, al sostegno e tutela dei percorsi di studio e al garantire a tutti a prescindere dalla carriera accademica la possibilità di fare un percorso dignitoso e valido.",
          candidati: [
            {
              id: 1,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/gloria_maria_crisogianni_cda.PNG",
              name: "Crisogianni Gloria Maria",
              detto: "",
            },
            {
              id: 2,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/anita_clara_notarianni.PNG",
              name: "Notarianni Anita Clara",
              detto: "",
            },
            {
              id: 3,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/chiara_arrigoni_cda.PNG",
              name: "Arrigoni Chiara",
              detto: "",
            },
            {
              id: 4,
              imgUrl:
                "/img/2021/candidati/studentiindipendenti/gaia_carbone_cda.PNG",
              name: "Carbone Gaia",
              detto: "",
            },
          ],
        },
        scuole: {
          desc: "Nelle scuole vogliamo un coordinamento maggiore tra CCS per uniformare le esperienze così che la qualità delle esperienze formative non dipenda dal cognome. Crediamo che si possano valorizzare le modalità di gestione virtuose dei corsi e che vada tutelata al meglio la possibilità degli studenti di costruire una carriera personalizzata relativamente al percorso formativo e che ci sia pari trattamento su tutte le questioni legate ad un corso di laurea.",
          auic: {
            desc: "Chiediamo che siano implementati più corsi di software per la rappresentazione digitale per garantire una preparazione a 360 gradi. Vogliamo che ci sia una maggiore coordinazione delle consegne tra le diverse classi di laboratori per evitare la dispersione all'interno dei corsi. E' necessario istituire un fondo per il materiale didattico e garantire revisioni a distanza per assicurare a tuttз la partecipazione attiva alle lezioni e ai laboratori. Crediamo infine che si possa accettare massimo una revisione a settimana per evitare di avere periodi di eccessivo stress e sovrapposizioni.",
            candidati: [
              {
                id: 1,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/tommasopaolo_bertolini.PNG",
                name: "Bertolini Tommasopaolo",
                detto: "TOMMI",
              },
              {
                id: 2,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/debora_maurelli.PNG",
                name: "Maurelli Debora",
                detto: "",
              },
              {
                id: 3,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/giulia_cantatore.PNG",
                name: "Cantatore Giulia",
                detto: "",
              },
              {
                id: 4,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/emily_lawrence.PNG",
                name: "Lawrence Emily",
                detto: "",
              },
              {
                id: 5,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/gloria_maria_crisogianni.PNG",
                name: "Crisogianni Gloria Maria",
                detto: "",
              },
              {
                id: 6,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/maria_nicole_deluca.PNG",
                name: "Deluca Maria Nicole",
                detto: "",
              },
              {
                id: 7,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/luca_francioli.PNG",
                name: "Francioli Luca",
                detto: "",
              },
              {
                id: 8,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/miranda_valeria_margarita_gonzalez.PNG",
                name: "Gonzàlez Miranda Valeria Margarita",
                detto: "",
              },
              {
                id: 9,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/gabriele_haardt.PNG",
                name: "Haardt Gabriele",
                detto: "",
              },
              {
                id: 10,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/ilaria_masciarelli.PNG",
                name: "Masciarelli Ilaria",
                detto: "",
              },
              {
                id: 11,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/chiara_berti.PNG",
                name: "Berti Chiara",
                detto: "",
              },
              {
                id: 12,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/pietro_buongiorno.PNG",
                name: "Buongiorno Pietro",
                detto: "",
              },
            ],
          },
          trei: {
            desc: "Piano di studi personalizzabile: crediamo che ognuno debba decidere con meno vincoli possibile il proprio percorso di studi in modo che si creino figure professionali nuove e multidisciplinari. Crediamo che l'abolizione delle medie di accesso alla magistrale sia  un ulteriore incentivo a far proseguire gli studi e a combattere l'abbandono degli studi, un problema caratteristico e grave del nostro ateneo. Le differenze tra scaglioni devono essere abolite promuovendo gli esempi virtuosi. Sempre nell'ottica di aumentare la scelta tra i corsi vogliamo incrementare il numero di laboratori a scelta.",
            candidati: [
              {
                id: 1,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/edoardo_marcucci.PNG",
                name: "Marcucci Edoardo",
                detto: "",
              },
              {
                id: 2,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/alice_portentoso.PNG",
                name: "Portentoso Alice",
                detto: "",
              },
              {
                id: 3,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/elena_fiorani.PNG",
                name: "Fiorani Elena",
                detto: "",
              },
              {
                id: 4,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/marco_zamboni.PNG",
                name: "Zamboni Marco",
                detto: "ZAMBO",
              },
              {
                id: 5,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/jonathan_wolff.PNG",
                name: "Wolff Jonathan",
                detto: "JONNY",
              },
              {
                id: 6,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/francesca_benatti.PNG",
                name: "Benatti Francesca",
                detto: "",
              },
              {
                id: 7,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/mario_spiniello.PNG",
                name: "Spiniello Mario",
                detto: "",
              },
              {
                id: 8,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/gaia_carbone.PNG",
                name: "Carbone Gaia",
                detto: "",
              },
              {
                id: 9,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/davide_stramare.PNG",
                name: "Stramare Davide",
                detto: "DADO",
              },
              {
                id: 10,
                imgUrl: "/img/2021/candidati/studentiindipendenti/sip.png",
                name: "Truvolo Federica",
                detto: "",
              },
              {
                id: 11,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/sara_ehetagegnehu_finardi.PNG",
                name: "Finardi Sara Ehetagegnehu",
                detto: "FES",
              },
              {
                id: 12,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/francesco_puddu.PNG",
                name: "Puddu Francesco",
                detto: "",
              },
              {
                id: 13,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/pietro_contardi.PNG",
                name: "Contardi Pietro",
                detto: "",
              },
              {
                id: 14,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/roberto_serino.PNG",
                name: "Serino Roberto",
                detto: "",
              },
              {
                id: 15,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/alice_oppizzii.PNG",
                name: "Oppizzii Alice",
                detto: "",
              },
            ],
          },
          icat: {
            desc: "A ICAT crediamo che i parziali debbano essere una libera scelta che non precluda il numero di appelli di una sessione. Crediamo che sia necessario aumentare il numero di laboratori che siano anche specifici ai 2 corsi di studio che compongono la scuola. La valutazione degli esami deve avere delle tempistiche certe dato che troppo spesso succede siano a discrezione del docente mettendo in difficoltà scaglioni di studenti. Crediamo sia necessario implementare delle modalità didattiche più interattive che stimolino la comprensione e la partecipazione dellз studentз.",
            candidati: [
              {
                id: 1,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/matteo_chiavegato.PNG",
                name: "Chiavegato Matteo",
                detto: "",
              },
              {
                id: 2,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/davide_varotto.PNG",
                name: "Varotto Davide",
                detto: "",
              },
              {
                id: 3,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/francesco_labanca.PNG",
                name: "Labanca Francesco",
                detto: "",
              },
              {
                id: 4,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/davide_stucchi.PNG",
                name: "Stucchi Davide",
                detto: "",
              },
              {
                id: 5,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/alessia_ippolito.PNG",
                name: "Ippolito Alessia",
                detto: "",
              },
            ],
          },
          design: {
            desc: "Crediamo che sia necessario istituire un fondo per il materiale progetti e prototipi così da evitare di rendere eccessivo il costo per lз studentз di design. Vogliamo potenziare il Poliprint rendendo la qualità delle stampe più più alta e i prezzi più popolari. Vogliamo un deposito sicuro per prototipi in B2 così da non dover far viaggiare pure i modellini e un punto in cui smaltire i materiali che possono essere riutilizzati. Vogliamo regolamentare le revisioni intermedie in modo che si possano effettuare con supporto digitale.",
            candidati: [
              {
                id: 1,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/ilenia_ippolito.PNG",
                name: "Ippolito Ilenia",
                detto: "",
              },
              {
                id: 2,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/laura_giordano.PNG",
                name: "Giordano Laura",
                detto: "",
              },
              {
                id: 3,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/irene_la_ferla.PNG",
                name: "La Ferla Irene",
                detto: "",
              },
              {
                id: 4,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/chiara_arrigoni.PNG",
                name: "Arrigoni Chiara",
                detto: "",
              },
              {
                id: 5,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/federica_pompa.PNG",
                name: "Pompa Federica",
                detto: "",
              },
              {
                id: 6,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/caterina_creanza.PNG",
                name: "Creanza Caterina",
                detto: "",
              },
              {
                id: 7,
                imgUrl:
                  "/img/2021/candidati/studentiindipendenti/andreea_ciortan.PNG",
                name: "Ciortan Andreea",
                detto: "",
              },
              {
                id: 8,
                imgUrl: "/img/2021/candidati/studentiindipendenti/sip.png",
                name: "Patti Lavinia",
                detto: "",
              },
            ],
          },
        },
      },
    };
  },
};
</script>
