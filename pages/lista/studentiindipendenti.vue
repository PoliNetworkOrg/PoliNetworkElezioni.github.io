<template>
  <div>
    <ListaDettaglio :data-lista="items" />
  </div>
</template>

<script>
export default {
    data () {
    return {
      items: {
            name: "Studenti Indipendenti",
            mainWebsiteUrl: "https://studentiindipendenti.it/",
            mainProgrammaUrl: "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Studenti_Indipendenti.pdf",
            desc: ["Studenti indipendenti e la nuova lista di rappresentanza del Politecnico, indipendente, aconfessionale e apartitica. Per noi fare rappresentanza non è un fine a cui arrivare ma un mezzo con il quale migliorare la vita degli studenti. La nostra idea di università È un luogo laico, inclusivo è sostenibile, in cui incentivare la cooperazione e fare comunità A tutela del percorso formativo e del benessere psicologico di ciascuno."],
            imageUrl:"/img/sip.png",
            instagram:"https://www.instagram.com/studenti.indipendenti.polimi/",
            programmaSottotitolo:"Per la rappresentanza come mezzo e non come fine",
            programma:
                [
                    {
                        id : 1,
                        title: 'Aumentiamo gli appelli annui',
                        url: '/img/sip.png',
                        desc: "Proponiamo di aumentare il numero totale di appelli all’anno ad almeno 7, di istituire una sessione straordinaria per i ripetenti e di dare la possibilità istituzionale di svolgere il primo appello durante il secondo parziale. (da cambiare?)"
                    },
                    {
                        id: 2,
                        title: 'Assorbenti e preservativi gratuiti',
                        url: '/img/sip.png',
                        desc: "Chiediamo che vengano installati distributori di assorbenti gratuiti, garantendo alla componente femminile l’accesso a un bene di necessità. Chiediamo inoltre l’installazione di distributori di preservativi gratuiti per combattere la diffusione delle malattie sessualmente trasmissibili."
                    },
                    {
                        id : 3,
                        title: 'Borracce gratuite e Ufficio sostenibilità',
                        url: '/img/sip.png',
                        desc: "Per combattere il consumo di plastica proponiamo che venga fornita gratuitamente una borraccia di alluminio per tuttз lз studentз. Chiediamo l’istituzione di un Ufficio Sostenibilità di ateneo col compito di monitorare l’impatto ambientale e l’impegno ecologico del Poli."
                    },
                    {
                        id: 4,
                        title: 'Licenze per tuttз',
                        url: '/img/sip.png',
                        desc: "Proponiamo che vengano erogate a tutta la componente studentesca le licenze dei software più comunemente utilizzati e che vengano messi a disposizione gratuitamente su richiesta anche i software più specifici senza escludere lз studentз in base al corso di studio."
                    },
                ],
            senato:
            {
                desc: "Per noi in senato è importante discutere di decisioni politiche aprendo davvero alla possibilità di portare i temi dellз studentз senza il filtro del compromesso in modo da dialogare con gli altri componenti ateneo avendo ben chiara l'opinione di tuttз.",
                candidati:[
                    {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/jonathan_wolff.jpg", name: "Wolff Jonathan", detto: "JONNY"},
                    {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/andrea_iodice.jpg", name: "Iodice Andrea", detto: ""},
                    {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/maria_nicole_deluca.jpg", name: "Deluca Maria Nicole", detto: ""},
                    {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/milagros_magaz.jpg", name: "Magaz Milagros", detto: "MILI"},
                    {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/marco_zamboni.jpg", name: "Zamboni Marco", detto: "ZAMBO"},
                    {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/edoardo_marcucci.jpg", name: "Marcucci Edoardo", detto: ""},
                    {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/mario_spiniello.jpg", name: "Spiniello Mario", detto: ""},
                    {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/davide_stramare.jpg", name: "Stramare Davide", detto: "DADO"}
                ]
            },
            CdA:{
                desc: "Vogliamo aumentare la gestione dei fondi volgendola a rendere il politecnico un'università d'avanguardia in termini di vivibilità negli spazi, al sostegno e tutela dei percorsi di studio e al garantire a tutti a prescindere dalla carriera accademica la possibilità di fare un percorso dignitoso e valido.",
                candidati:[
                    {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/gloria_maria_crisogianni.jpg", name: "Crisogianni Gloria Maria", detto: ""},
                    {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/anita_clara_notarianni.jpg", name: "Notarianni Anita Clara", detto: ""},
                    {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/chiara_arrigoni.jpg", name: "Arrigoni Chiara", detto: ""},
                    {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/gaia_carbone.jpg", name: "Carbone Gaia", detto: ""}
                ]
            },
            scuole:{
                desc: "Nelle scuole vogliamo un coordinamento maggiore tra ccs per uniformare le esperienze così che la qualità delle esperienze formative non dipenda dal cognome. Crediamo che si possano valorizzare le modalità di gestione virtuose dei corsi e che vada tutelata al meglio la possibilità degli studenti di costruire una carriera personalizzata relativamente al percorso formativo e che ci sia pari trattamento su tutte le questioni legate ad un corso di laurea.",
                auic:{
                    desc: "Chiediamo che siano implementati più corsi di software per la rappresentazione digitale per garantire una preparazione a 360 gradi. Vogliamo che ci sia una maggiore coordinazione delle consegne tra le diverse classi di laboratori per evitare la dispersione all'interno dei corsi. E' necessario istituire un fondo per il materiale didattico e garantire revisioni a distanza per assicurare a tuttз la partecipazione attiva alle lezioni e ai laboratori. Crediamo infine che si possa accettare massimo una revisione a settimana per evitare di avere periodi di eccessivo stress e sovrapposizioni.",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/tommasopaolo_bertolini.jpg", name: "Bertolini Tommasopaolo", detto: "TOMMI"},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/debora_maurelli.jpg", name: "Maurelli Debora", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/giulia_cantatore.jpg", name: "Cantatore Giulia", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/emily_lawrence.jpg", name: "Lawrence Emily", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/gloria_maria_crisogianni.jpg", name: "Crisogianni Gloria Maria", detto: ""},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/maria_nicole_deluca.jpg", name: "Deluca Maria Nicole", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/luca_francioli.jpg", name: "Francioli Luca", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/miranda_valeria_margarita_gonzalez.jpg", name: "Gonzàlez Miranda Valeria Margarita", detto: ""},
                        {id: 9 , imgUrl: "/img/candidati/studentiindipendenti/gabriele_haardt.jpg", name: "Haardt Gabriele", detto: ""},
                        {id: 10 , imgUrl: "/img/candidati/studentiindipendenti/ilaria_masciarelli.jpg", name: "Masciarelli Ilaria", detto: ""},
                        {id: 11 , imgUrl: "/img/candidati/studentiindipendenti/chiara_berti.jpg", name: "Berti Chiara", detto: ""},
                        {id: 12 , imgUrl: "/img/candidati/studentiindipendenti/pietro_buongiorno.jpg", name: "Buongiorno Pietro", detto: ""}
                    ]
                },
                trei:{
                    desc :"Piano di studi personalizzabile: crediamo che ognuno debba decidere con meno vincoli possibile il proprio percorso di studi in modo che si creino figure professionali nuove e multidisciplinari. Crediamo che l'abolizione delle medie di accesso alla magistrale sia  un ulteriore incentivo a far proseguire gli studi e a combattere l'abbandono degli studi, un problema caratteristico e grave del nostro ateneo. Le differenze tra scaglioni devono essere abolite promuovendo gli esempi virtuosi. Sempre nell'ottica di aumentare la scelta tra i corsi vogliamo incrementare il numero di laboratori a scelta.",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/edoardo_marcucci.jpg", name: "Marcucci Edoardo", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/alice_portentoso.jpg", name: "Portentoso Alice", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/elena_fiorani.jpg", name: "Fiorani Elena", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/marco_zamboni.jpg", name: "Zamboni Marco", detto: "ZAMBO"},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/jonathan_wolff.jpg", name: "Wolff Jonathan", detto: "JONNY"},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/francesca_benatti.jpg", name: "Benatti Francesca", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/mario_spiniello.jpg", name: "Spiniello Mario", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/gaia_carbone.jpg", name: "Carbone Gaia", detto: ""},
                        {id: 9 , imgUrl: "/img/candidati/studentiindipendenti/davide_stramare.jpg", name: "Stramare Davide", detto: "DADO"},
                        {id: 10 , imgUrl: "/img/candidati/studentiindipendenti/federica_truvolo.jpg", name: "Truvolo Federica", detto: ""},
                        {id: 11 , imgUrl: "/img/candidati/studentiindipendenti/sara_ehetagegnehu_finardi.jpg", name: "Finardi Sara Ehetagegnehu", detto: "FES"},
                        {id: 12 , imgUrl: "/img/candidati/studentiindipendenti/francesco_puddu.jpg", name: "Puddu Francesco", detto: ""},
                        {id: 13 , imgUrl: "/img/candidati/studentiindipendenti/pietro_contardi.jpg", name: "Contardi Pietro", detto: ""},
                        {id: 14 , imgUrl: "/img/candidati/studentiindipendenti/roberto_serino.jpg", name: "Serino Roberto", detto: ""},
                        {id: 15 , imgUrl: "/img/candidati/studentiindipendenti/alice_oppizzii.jpg", name: "Oppizzii Alice", detto: ""}
                    ]
                },
                icat:{
                    desc: "A ICAT crediamo che i parziali debbano essere una libera scelta che non precluda il numero di appelli di una sessione. Crediamo che sia necessario aumentare il numero di laboratori che siano anche specifici ai 2 corsi di studio che compongono la scuola. La valutazione degli esami deve avere delle tempistiche certe dato che troppo spesso succede siano a discrezione del docente mettendo in difficoltà scaglioni di studenti. Crediamo sia necessario implementare delle modalità didattiche più interattive che stimolino la comprensione e la partecipazione dellз studentз.",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/matteo_chiavegato.jpg", name: "Chiavegato Matteo", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/davide_varotto.jpg", name: "Varotto Davide", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/francesco_labanca.jpg", name: "Labanca Francesco", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/davide_stucchi.jpg", name: "Stucchi Davide", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/alessia_ippolito.jpg", name: "Ippolito Alessia", detto: ""}
                    ]
                },
                design:{
                    desc : "Crediamo che sia necessario istituire un fondo per il materiale progetti e prototipi così da evitare di rendere eccessivo il costo per lз studentз di design. Vogliamo potenziare il Poliprint rendendo la qualità delle stampe più più alta e i prezzi più popolari. Vogliamo un deposito sicuro per prototipi in B2 così da non dover far viaggiare pure i modellini e un punto in cui smaltire i materiali che possono essere riutilizzati. Vogliamo regolamentare le revisioni intermedie in modo che si possano effettuare con supporto digitale.",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/ilenia_ippolito.jpg", name: "Ippolito Ilenia", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/laura_giordano.jpg", name: "Giordano Laura", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/irene_la_ferla.jpg", name: "La Ferla Irene", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/chiara_arrigoni.jpg", name: "Arrigoni Chiara", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/federica_pompa.jpg", name: "Pompa Federica", detto: ""},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/caterina_creanza.jpg", name: "Creanza Caterina", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/andreea_ciortan.jpg", name: "Ciortan Andreea", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/lavinia_patti.jpg", name: "Patti Lavinia", detto: ""}
                    ]
                }
            }
        }
    }
  }
}
</script>
