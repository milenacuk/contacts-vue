<template>
    <p>Contact list</p>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
    name: 'ContactList',
    methods: {
        ...mapActions([
            'getContacts'
        ])
    },
    created(){
        this.getContacts();
    }
}
</script>
