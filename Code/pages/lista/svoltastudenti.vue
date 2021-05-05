<template>
    <div>
        <Lista 
            name-p="Svoltastudenti"
            url-official="https://svoltastudenti.it"
            descrizione-lista-param="Nata nel 2008 per rendere partecipi tutti gli studenti nei processi formativi e decisionali dell’Ateneo che tutti i giorni viviamo. Opportunità, idee e rappresentanti del tutto svincolati dai partiti: siamo apartitici, laici e multiculturali."
            image-url = "/img/svolta.png"
            url-programma="https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Svoltastudenti.pdf"
            :data-lista=items
        />
    </div>
</template>

<script>
export default {
    data () {
    return {
      items: {
            programma:
                [
                    {
                        id : 1,
                        title: 'Titolo1',
                        url : '/img/svolta.png',
                        desc: "Descrizione 1"
                    },
                    {
                        id: 2,
                        title: 'Titolo2',
                        url : '/img/svolta.png',
                        desc: "Descrizione 2"
                    },
                ],
            senato:
            {
                desc: "La nostra idea di senato ecc..."
            },
            cda:{
                desc: "La nostra idea di cda ecc..."
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic..."
                },
                trei:{
                    desc :"La scuola 3i..."
                },
                icat:{
                    desc: "La scuola icat..."
                },
                design:{
                    desc : "La scuola design..."
                }
            }
        }         
    }
  }
}
</script>