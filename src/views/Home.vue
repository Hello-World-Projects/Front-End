<template>
    <div class="home bg-linear">
        <div class="container">
            
            <p>IT Developer</p>
          
            <router-link to="/helloWorld" class="btn">Hello World</router-link>       
            <router-link to="/history" class="btn btn-second">History</router-link>
            
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Home'
}

</script>

<style scoped>


    .bg-linear{
        position: absolute;
        background: linear-gradient(244.55deg, #5016FF -66.03%, #CCBBFF 66.14%, #AEAABA 103.99%);   
        width: 100%;
        height: 100%;
        top: 0;
        z-index: -1;
    } 


   .home{
    display: flex;
    justify-content: center;
    align-items: center;
   }

    .container p {
        text-align: center;
        font-family: 'Quicksand', sans-serif;
        color: #6F40FF;
        font-size: 40px;
        margin-bottom: 50px;
        font-weight: bold;

    }

   .btn{
        text-decoration: none;
        display: block;
        padding: 10px 300px;
        border-radius: 50px;
        background: #5016FF;
        text-align: center;
        margin-top: 15px;
        color: white;
        font-family: 'Quicksand', sans-serif;
        
        filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.25));
   }

   .btn:hover {
        opacity: 0.5;
   }

    .btn-second {
        background: white;
        color: #6F40FF;
        font-weight: bold;
    }

   @media screen and (max-width: 740px) {
        .btn {
            padding: 5px 200px;
        }

        .container p {
            font-size: 30px;
        }
   }

   @media screen and (max-width: 500px) {
        .btn {
            padding: 2px 100px;
            
        }
   }


    
</style>