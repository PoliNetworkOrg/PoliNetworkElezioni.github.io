<template>
    <div>

        <LayoutNavigationBar:language="$i18n.locale" />

        <!-- Page Content -->
        <div class="container2">

            <!-- Jumbotron Header -->
            <header class="jumbotron my-4 testoCentrale" style="border:none;">
                <div style="text-align:center;">
                    <h2>Organi</h2>
             
                
                
                </div>
            </header>

            <SubpagesOrgani :language="$i18n.locale" />
        </div>
        <!-- /.container -->

        <div style="padding:calc(50px + 1vw + 1vh);">
        </div>

        <LayoutFooter:language="$i18n.locale" />
    </div>
</template>

