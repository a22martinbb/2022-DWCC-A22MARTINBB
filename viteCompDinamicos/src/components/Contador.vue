<script>

export default{
    data(){
        return{
            contador: 0,
        }
    }
}

</script>

<template>
    <button @click="this.contador++">Contador: {{ this.contador }}</button>
</template>