<template>
    <div class="contact-filters">
        <at-input :value="contactSearch" @keyup.native="searchContacts" placeholder="Search contacts..." size="large"></at-input>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'contact-filters',
    computed: mapState([
        'contactSearch'
    ]),
    methods: {
        searchContacts (e) {
            this.$store.dispatch('search', { searchKey: 'contactSearch', searchString: e.target.value })
        }
    }
}
</script>

<style lang="less" scoped>

.account-filters {
    margin-bottom: 20px;
}

</style>
