<template>
    <div>
        <div>
            <VueDatePicker v-model="date" range multi-calendars multi-calendars-solo :enable-time-picker="false"
                :clearable="false">
                <template #left-sidebar>
                    <div style="display:grid; height:277px;">
                        <button @click="setToday">Today</button>
                        <button @click="setYesterday">Yesterday</button>
                        <button @click="setLast15Days">Last 15 Days</button>
                        <button @click="setLast30Days">Last 30 Days</button>
                    </div>
                </template>
            </VueDatePicker>
        </div>
    </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'DatePicker',
    components: {
        VueDatePicker,
    },
    data() {
        return {
            date: [
                new Date().setDate(new Date().getDate() - 1),
                new Date().setDate(new Date().getDate() - 1),
            ],
            startDate: new Date().setDate(new Date().getDate() - 1),
            endDate: new Date().setDate(new Date().getDate() - 1),
        };
    },
    mounted() {
        this.updateDate();
    },
    methods: {
        updateDate() {
            const startDate = new Date(this.date[0]);
            const endDate = new Date(this.date[1]);
            if (startDate === endDate) {
                this.startDate = startDate;
                this.endDate = startDate;
            } else {
                this.startDate = this.formatDate(startDate);
                this.endDate = this.formatDate(endDate);
                if (this.endDate === "01-01-1970") {
                    this.endDate = this.startDate;
                }
            }
            console.log('startDate', this.startDate)
            console.log('endDate', this.endDate)
        },
        formatDate(date) {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString();
            return `${day}-${month}-${year}`;
        },
        setToday() {
            const today = new Date();
            this.date = [today, today];
        },
        setYesterday() {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            this.date = [yesterday, yesterday];
        },
        setLast15Days() {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - 14);
            const endDate = new Date();
            this.date = [startDate, endDate];
        },
        setLast30Days() {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - 29);
            const endDate = new Date();
            this.date = [startDate, endDate];
        },
    },
    watch: {
        date: function () {
            this.updateDate();
        }
    }
};
</script>
