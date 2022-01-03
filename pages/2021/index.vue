<template>
    <div>
        <LayoutNavigationBar :language=" $i18n.locale" />

        <!-- Page Content -->
        <div class="container3">

            <!-- Jumbotron Header -->
            <header class="my-4 testoCentrale" style="max-width: 100%;border:none;margin-top:10px;margin-bottom:10px;padding-bottom:calc(10px + 1rem);padding-top:calc(2px + 5rem);">
                <div style="text-align:center;">
                    <h2 style="font-size:calc(4px + 1.27rem + 0.77vw);">
                        <span v-if=" $i18n.locale == 'it' ">Elezioni rappresentanti degli studenti</span>
                        <span v-if=" $i18n.locale == 'en' ">Election of student representatives</span>
                    </h2>
                    <h4 style="font-size:calc(2px + 1.15rem + 0.65vw);">
                        <a v-if=" $i18n.locale=='it'" href="https://www.polimi.it/il-politecnico/organizzazione/organi-di-ateneo/rappresentanti-studenti/votazioni-studentesche-di-ateneo/">
                            Politecnico di Milano
                        </a>
                        <a v-if=" $i18n.locale=='en'" href="https://www.polimi.it/en/the-politecnico/organization/university-bodies/student-representatives/university-student-elections/">
                            Politecnico di Milano
                        </a>
                    </h4>
                    <div></div>
                    <h5 style="text-align:left;padding-left:calc(4vw + 1rem);padding-right: calc(4vw + 1rem);">
                        <div style="    padding-left: 0px !important;font-size:calc(1px + 0.9rem + 0.3vw);list-style:none;">
                            <div class="lead" style="padding:5px;font-size:calc(2px + 0.82rem + 0.29vw);text-align:center;">
                                <span v-if=" $i18n.locale=='it'">
                                    📌 Piattaforma online <a href="/it/2021/istruzioni/">votazioni Eligo &amp; istruzioni di voto</a>
                                </span>
                                <span v-if=" $i18n.locale=='en'">
                                    📌 Online voting <a href="/en/2021/istruzioni/"> platform Eligo &amp; voting instructions</a>
                                </span>
                            </div>
                        </div>
                        <div style="padding:15px;"></div>
                        <SubpagesCalendario :language=" $i18n.locale" />
                    </h5>

                    <br />

                    <div class="container8">
                        <div class="container6">

                            <p class="lead" style="padding-left:calc(5px + 0.5rem + 0.6vw);padding-right:calc(5px + 0.5rem + 0.6vw);text-align:center;">

                                <span v-if=" $i18n.locale=='it'">
                                    In questa pagina potrai consultare i candidati delle liste di rappresentanza studentesca (e i relativi programmi) alle elezioni di Maggio 2021 🗳
                                </span>
                                <span v-if=" $i18n.locale=='en'">
                                    On this page you can consult the candidates of the student representation lists (and the relative programs) in the elections of May 2021 🗳
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <SubpagesQuadratiListe :language=" $i18n.locale" />
        </div>
        <!-- /.container -->



        <LayoutFooter :language=" $i18n.locale" />
    </div>
</template>

