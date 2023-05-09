<template>
    <div class="w-50">
        <h1 v-if="text === 'ocr'">
            Step average by {{ text }}
        </h1>
        <h1 v-if="text === 'verification'">
            step average by {{ text }}
        </h1>
        <v-btn-toggle v-model="text" rounded="0" color="deep-purple-accent-3" group>
            <v-btn value='ocr'>
                OCR
            </v-btn>

            <v-btn value='verification'>
                Verification
            </v-btn>
        </v-btn-toggle>
        <div v-if="text === 'ocr'">
            {{ stepPercentageOCR }}%
            <v-progress-linear color="blue-lighten-3" v-model="stepPercentageOCR"></v-progress-linear>
        </div>
        <div v-if="text === 'verification'">
            {{ stepPercentageVer }}%
            <v-progress-linear color="blue-lighten-3" v-model="stepPercentageVer"></v-progress-linear>
        </div>
    </div>
</template>

<script>


export default {
    components: {
    },
    data() {
        return {
            text: 'ocr',
            stepPercentageOCR: '20',
            stepPercentageVer: '50',
        };
    },
    watch: {
        text: function () {
            console.log(this.text);
            // this.$refs.h1.textContent = `DEO by ${this.text}`;
        },
    }
};
</script>
