<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">classification</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>name</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.classifications">
                    <td> {{ item.id }} </td>
                    <td> {{ item.name }} </td>
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