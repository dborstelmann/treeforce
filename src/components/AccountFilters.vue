<template>
    <div class="account-filters">
        <at-input :value="searchText" @keyup.native="searchAccounts" placeholder="Search accounts..." size="large"></at-input>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'account-filters',
    computed: mapState([
        'searchText'
    ]),
    methods: {
        searchAccounts (e) {
            this.$store.dispatch('searchAccounts', e.target.value)
        }
    }
}
</script>

<style lang="less" scoped>

.account-filters {
    margin-bottom: 20px;
}

</style>
