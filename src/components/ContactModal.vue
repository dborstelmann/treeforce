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
                <at-input class="contact-input" v-model="contact.uploadedImageUrl" :value="contact.uploadedImageUrl" placeholder="Image url (optional)"></at-input>
            </div>
            <div class="col-sm-24 col-md-12">
                <at-select class="contact-select" v-model="contact.colorCode" :value="contact.colorCode" style="width: 140px" placeholder="Color code (optional)">
                    <at-option value="" label="No Color Code"><span>No Color Code</span></at-option>
                    <at-option value="13CE66" label="Trusted Adviser"><span>Trusted Advisor</span><span class="color-option" style="background:#13CE66;"></span></at-option>
                    <at-option value="3473e7" label="Developing Relations"><span>Developing Relations</span><span class="color-option" style="background:#3473e7;"></span></at-option>
                    <at-option value="FFC82C" label="Create Relationship"><span>Create Relationship</span><span class="color-option" style="background:#FFC82C;"></span></at-option>
                    <at-option value="FF4949" label="Unfriendly"><span>Unfriendly</span><span class="color-option" style="background:#FF4949;"></span></at-option>
                </at-select>
            </div>
            <div class="col-sm-24 col-md-12">
                <at-select v-model="contact.parentId" :value="contact.parentId" filterable placeholder="Reports to..." size="small" notFoundText="No matching contact">
                    <at-option :value="'null'">Remove from tree</at-option>
                    <at-option :value="0">Root</at-option>
                    <at-option v-for="c in contactSearch(contact.id)" :key="c.id" :value="c.id">{{c.name}}</at-option>
                </at-select>
            </div>
            <div v-if="!this.new" class="col-sm-24 col-md-12">
                <at-button
                    class="remove-contact"
                    size="medium"
                    type="error"
                    hollow
                    @click="removeContact(contact.id)"
                >Delete Contact</at-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact-modal',
    props: [
        'contact',
        'contactSearch',
        'removeContact',
        'new'
    ]
}
</script>

<style lang="less" scoped>

.contact-modal {
    .contact-input {
        margin-bottom: 10px;
    }
    .contact-select {
        width: 100% !important;
        margin-bottom: 10px;

        .color-option {
            float:right;
            width:15px;
            height:15px;
            border-radius:15px;
        }
    }
}

</style>
