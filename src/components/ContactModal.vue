<template>
    <div class="contact-modal">
        <div class="row at-row">
            <div class="col-sm-24 col-md-12">
                <at-input class="contact-input" v-model="contact.firstname" :value="contact.firstname" placeholder="First name"></at-input>
            </div>
            <div class="col-sm-24 col-md-12">
                <at-input class="contact-input" v-model="contact.lastname" :value="contact.lastname" placeholder="Last name"></at-input>
            </div>
            <div class="col-sm-24 col-md-12">
                <at-input class="contact-input" v-model="contact.titleOverride" :value="contact.titleOverride" :placeholder="contact.title ? contact.title : 'Title'"></at-input>
            </div>
            <div class="col-sm-24 col-md-12">
                <at-input class="contact-input" v-model="contact.email" :value="contact.email" placeholder="Email (optional)"></at-input>
            </div>
            <div class="col-sm-24 col-md-12">
                <at-input class="contact-input" v-model="contact.phone" :value="contact.phone" placeholder="Phone (optional)"></at-input>
            </div>
            <div class="col-sm-24 col-md-12">
                <at-input class="contact-input" v-model="contact.mobilephone" :value="contact.mobilephone" placeholder="Mobile phone (optional)"></at-input>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact-modal',
    props: ['contact']
}
</script>

<style lang="less" scoped>

.contact-modal {
    .contact-input {
        margin-bottom: 10px;
    }
}

</style>
