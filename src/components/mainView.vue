<template>
    <div>
        <DatePicker :start-date="startDate" :end-date="endDate" />
        <p>Start Date: {{ startDate }}</p>
        <p>End Date: {{ endDate }}</p>
    </div>
</template>

<script>
import DatePicker from './datePicker.vue';

export default {
    components: {
        DatePicker,
    },
    data() {
        return {
            startDate: new Date(),
            endDate: new Date(),
        };
    },
};
</script>
