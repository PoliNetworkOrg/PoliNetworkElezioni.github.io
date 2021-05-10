<template>
    <div>

        <div style="width:100%;text-align:center;display:block;" class="container2">

            <div class="container8">
                <span class="lead">

                    <div class="tabDibattito3">
                        <div class="tabDibattito2">
                            <table class="tabDibattito">
                                <tr class="trDibattito">
                                    <td class="tdDibattito">
                                        <span v-if="language=='it'">13 Maggio</span>
                                        <span v-if="language=='en'">13 May</span>
                                    </td>
                                    <td class="tdDibattito">
                                        <table style="width:100%;" class="tabDibattito4">
                                            <tr>
                                                <td class="tdDibattito2">
                                                    <span v-if="language=='it'">Sostenibilità e spazi</span>
                                                    <span v-if="language=='en'">Sustainability and spaces</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tdDibattito2">
                                                    <span v-if="language=='it'">Didattica e università</span>
                                                    <span v-if="language=='en'">Didactics and universities</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr class="trDibattito">
                                    <td class="tdDibattito">
                                        <span v-if="language=='it'">14 Maggio</span>
                                        <span v-if="language=='en'">14 May</span>
                                    </td>
                                    <td class="tdDibattito">
                                        <table style="width:100%;" class="tabDibattito4">
                                            <tr>
                                                <td class="tdDibattito2">
                                                    <span v-if="language=='it'">Tasse, accessibilità, DSU</span>
                                                    <span v-if="language=='en'">Taxes, accessibility, DSU</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tdDibattito2">
                                                    <span v-if="language=='it'">Tematiche sociali, internazionalizzazione, welfare &amp; varie</span>
                                                    <span v-if="language=='en'">Social issues, internationalization, welfare &amp; various</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr class="trDibattito">
                                    <td class="tdDibattito">
                                        <span v-if="language=='it'">15 Maggio</span>
                                        <span v-if="language=='en'">15 May</span>
                                    </td>
                                    <td class="tdDibattito">
                                        <span v-if="language=='it'">Dibattito finale</span>
                                        <span v-if="language=='en'">Final debate</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        language:{
            type:String,

			required:true
        }
    }
}
</script>

<style>
    .dibattito {
        font-size: calc(12px + 0.4rem + 0.7vw);
    }

    .tdDibattito {
        padding: 6px;
        border: 1px solid rgba(0, 0, 0, 0.153);
    }

    .tdDibattito2 {
        padding: 8px;
        font-size: calc(1px + 1.1rem);
        border: 1px solid rgba(0, 0, 0, 0.143);
    }

    .tabDibattito {
        width: 100%;
        margin: auto;
        border-collapse: collapse;
        border-style: hidden;
    }

    .tabDibattito4 {
        border-collapse: collapse;
        border-style: hidden;
    }

    .tabDibattito2 {
        width: 100%;
        margin: auto;
        border: 1px solid rgba(0, 0, 0, 0.178);
        border-radius: calc(1rem + 1vw + 10px);
        padding-left: 6px;
        padding-right: 6px;
        padding-bottom: 10px;
        padding-top: 5px;
    }

    .tabDibattito3 {
        width: 100%;
        margin: auto;
        max-width: calc(22rem + 1.1vw + 80px);
        padding-top: 1rem;
    }
</style>
