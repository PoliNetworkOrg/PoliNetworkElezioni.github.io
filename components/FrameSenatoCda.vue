<template>

    <div>
        <div style="width:100%;">
            <h2>{{name}}</h2>
        </div>
        <div style="padding-bottom:calc(0.3rem + 5px);">
            <span style="font-size:calc(1px + 1rem);color:black;">
                {{item.desc}}
            </span>
        </div>

        <div style="display:flex;flex-wrap:wrap;">
            <Frame 
                v-for="candsenato in item.candidati"
                :key = "candsenato.id"
                class-param="col-md-6"
                style-param="margin:auto;"
            >
                <div>
                    <Candidato :cand="candsenato" :url-lista="item.linkLista" />
                </div>
            </Frame>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item:{
            type:Object,
            default : null
        },
        name:{
            type:Object,
            default : null
        }
    }
}
</script>