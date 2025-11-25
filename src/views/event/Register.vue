<script setup>
import { useRouter} from 'vue-router';
import{ defineProps, inject} from 'vue';

const { event } = defineProps(["event"]);
const router = useRouter();
const GStore = inject('GStore')//make the GStore object available inside this component

const register = () => {
    // if registation API call is succesfull
    // push back to the event details
    GStore.flashMessage = 'You are succesfully registered for '+ event.title;
    setTimeout(() => {
        GStore.flashMessage = "";
    },3000)
    router.push({
            name:'EventDetails'
        })
}
</script>

<template>
    <p>Register for the event here</p>
    <button @click = "register">Register me!</button>
</template>
