<template>
    <card class="flex flex-col items-center justify-center">
        <p class="text-lg font-bold self-start pl-2 ">{{ card.uploadTitle }}</p>
        <input class="hidden" type="file" required @change="change" ref="xmlUpload" :accept="card.accept"/>
        <div class="mt-4 flex justify-between items-center ">
            <a class="btn btn-default btn-primary" @click="clickUpload">
                {{ this.card.choose_button_text }}
            </a>

            <p class="ml-4">{{ fileName }}</p>
        </div>

        <div class="start-upload-wrapper w-full px-3 pt-3 flex justify-end">
            <a class="btn btn-default btn-primary self-end" @click="startUpload">
                {{ this.card.begin_upload }}
            </a>
        </div>
    </card>
</template>

<script>
    export default {
        props: [
            'card',
        ],

        data() {
            return {
                file: undefined,
                fileName: this.card.not_chosen,
            }
        },

        methods: {
            change() {
                this.file = this.$refs.xmlUpload.files[0];
                this.fileName = this.file.name;
            },

            clickUpload(e) {
                e.preventDefault();

                this.$refs.xmlUpload.click();
            },

            startUpload(e) {
                e.preventDefault();

                if (!this.file) {
                    this.$toasted.show('Er is nog geen bestand geselecteerd!', { type: 'error' });
                    return;
                }

                const formData = new FormData();
                formData.append('file', this.file);

                Nova.request().post(
                    '/nova-vendor/nova-importer/upload/' + this.card.resourceSlug,
                    formData
                ).then(response => {
                    console.log(response);
                    if (response.data.messages) {
                        response.data.messages.forEach((el) => {
                            this.$toasted.show(el.text, el);
                        });
                    }

                    if (response.data.refresh) {
                        this.$parent.$parent.$parent.$parent.getResources();
                    }
                }).finally(() => {
                    this.$refs.xmlUpload.value = "";
                    this.fileName = this.card.not_chosen;
                });

                //     axios({
                //         method: 'post',
                //         url: '/nova-vendor/import-xml/upload',
                //         headers: {
                //             'Content-Type': 'multipart/form-data'
                //         },
                //         data: formData
                //     }).then(response => {
                //         this.$toasted.show('Import was succesvol, er zijn ' + response.data.count + ' klanten aangemaakt/geupdated!', {
                //             type: 'success',
                //             duration: 5000
                //         });
                //
                //         if (Object.keys(response.data.skipped).length > 0) {
                //             this.$toasted.show('Let op: klanten met de volgende id\'s konden niet worden geïmporteerd:', {
                //                 type: 'error',
                //                 duration: 5000
                //             });
                //             Object.keys(response.data.skipped).forEach((skipped) => {
                //                 this.$toasted.show(skipped + ': ' + response.data.skipped[skipped], {
                //                     type: 'error',
                //                     duration: 5000
                //                 });
                //             })
                //         }
                //
                //         this.$parent.$parent.$parent.$parent.getResources();
                //
                //         this.file = {};
                //         this.$refs.xmlUpload.value = "";
                //         this.fileName = "Er is nog geen bestand geüpload.";
                //     });

            },
        }
    }
</script>
