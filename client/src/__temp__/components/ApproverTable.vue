<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">approver <i> (status: 1=<span class="text-primary">pending</span>, 2=<span class="text-success">approved</span>, 3=<span class="text-danger">disapproved</span>) </i> </caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>approver_id</th>
                <th>jo_id?</th>
                <th>rv_id?</th>
                <th>spr_id?</th>
                <th>meqs_id?</th>
                <th>po_id?</th>
                <th>date_approval</th>
                <th>notes</th>
                <th>status</th>
                <th>label</th>
                <th>order</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.approvers">
                    <td> {{ item.id }} </td>
                    <td> {{ item.approver_id }} </td>
                    <td> {{ item.jo_id }} </td>
                    <td> {{ item.rv_id }} </td>
                    <td> {{ item.spr_id }} </td>
                    <td> {{ item.meqs_id }} </td>
                    <td> {{ item.po_id }} </td>
                    <td> {{ item.date_approval }} </td>
                    <td> {{ item.notes }} </td>
                    <td class="text-center">
                        <div class="row">
                            <div class="col">
                                <button @click="updateStatus(item, -1)" class="btn btn-light btn-sm">
                                    <i class="fas fa-fw fa-minus text-danger"></i>
                                </button>
                            </div>
                        </div>
                        {{ item.status }}
                        <div class="row">
                            <div class="col">
                                <button @click="updateStatus(item, 1)" class="btn btn-light btn-sm">
                                    <i class="fas fa-fw fa-plus text-success"></i>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td> {{ item.label }} </td>
                    <td> {{ item.order }} </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>



<script setup lang="ts">

    import { tempStore } from '../temp.store';
    import { rvStore } from '../../purchasing/rv.store';
    import { IApprover, IJO, IMEQS, IPO, ISPR } from '../../common/entities';
    import { IRV } from '../../purchasing/entities';

    const $data = tempStore()
    const $rv = rvStore()

    console.log('$data', $data)

    const updateStatus = (approver: IApprover, value: number) => {

        console.log('updateStatus()', value)

        let item: IRV | ISPR | IJO | IMEQS | IPO

        if(approver.rv_id){
            item = $rv._items.find(i => i.id === approver.rv_id) as IRV
        }
        // TODO: add condition for spr, jo, meqs, and po when they already have a store instance
        // temporary
        else{
            item = $rv._items.find(i => i.id === approver.rv_id) as IRV
        }

        if(!item){
            console.error('item not found')
            return 
        }

        const approverFound = item.approvers.find(i => i.id === approver.id)

        if(!approverFound){
            console.error('rv not found')
            return 
        }

        console.log('approverFound.status', approverFound.status)

        approverFound.status += value


    }

</script>

<style scoped>
.caption-top {
    caption-side: top;
}
</style>