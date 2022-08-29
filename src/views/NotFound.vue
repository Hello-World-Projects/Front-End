<template>
    <div>

        <div class="back">
            <router-link to="/"><img src="../assets/image/back.svg" alt="back"></router-link>
        </div>

        
        <p style="margin: 0; opacity: 0;">.</p>

        <div class="not-found">
            <img src="../assets/image/not-found.png" alt="Not Found">
            <p>404 ERROR</p>
            <p>page not found</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    body {
        background: #5016FF;
    }

    .back {
        position: absolute;
        margin-left: 5vw;
        margin-top: 5vh;
    }

    .back img {
        width: 70px;
    }

    .not-found img{
        width: 200px;
        margin: 0 auto;
        display: block;
    }

    .not-found p {
        margin: 0;
        font-size: 30px;
        font-family: 'Quicksand', sans-serif;
        color: white;
        font-weight: 700;
        text-align: center;
    }

    p:nth-child(2) {
        margin-top: 5vh;
    }

    .not-found {
        width: 400px;
        margin: 0 auto;
        margin-top: 20vh;
    }

</style>