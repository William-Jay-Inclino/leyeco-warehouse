<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">employee</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>department_id</th>
                <th>firstname</th>
                <th>middlename</th>
                <th>lastname</th>
                <th>position</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.employees">
                    <td> {{ item.id }} </td>
                    <td> {{ item.department_id }} </td>
                    <td> {{ item.firstname }} </td>
                    <td> {{ item.middlename }} </td>
                    <td> {{ item.lastname }} </td>
                    <td> {{ item.position }} </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>



<script setup lang="ts">

    import { tempStore } from '../temp.store';

    const $data = tempStore()

    console.log('$data', $data)

</script>

<style scoped>
.caption-top {
    caption-side: top;
}
</style>