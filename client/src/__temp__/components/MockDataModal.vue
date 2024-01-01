<template>

    <div class="modal fade" id="mockDataModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Mock Data</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col">
                        <ClassificationTable />
                    </div>
                    <div class="col">
                        <SupplierTable />
                    </div>
                    <div class="col">
                        <DepartmentTable />
                    </div>
                    <div class="col">
                        <DivisionTable />
                    </div>
                    <div class="col">
                        <UnitTable/>
                    </div>
                    <div class="col">
                        <BrandTable />
                    </div>
                    <div class="col">
                        <JOApprover />
                    </div>
                    <div class="col">
                        <RVApprover />
                    </div>
                    <div class="col">
                        <SPRApprover/>
                    </div>
                    <div class="col">
                        <MEQSApprover/>
                    </div>
                    <div class="col">
                        <POApprover />
                    </div>
                    <div class="col">
                        <Approver />
                    </div>
                    <div class="col">
                        <EmployeeTable/>
                    </div>
                    <div class="col">
                        <CanvassTable />
                    </div>
                    <div class="col">
                        <ItemTable/>
                    </div>
                    <div class="col">
                        <JOTable />
                    </div>
                    <div class="col">
                        <RVTable />
                    </div>
                    <div class="col">
                        <SPRTable />
                    </div>
                    <div class="col">
                        <MEQSTable />
                    </div>
                    <div class="col">
                        <POTable />
                    </div>
                    <div class="col">
                        <POItemsTable />
                    </div>
                </div>
                <hr>
                
                <h6 class="font-weight-bold"> ENUMS </h6>

                <div class="row">
                    <div class="col">
                        <EnumsTable />
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <!-- <button v-if="canManage" type="button" class="btn btn-primary">Save changes</button> -->
            </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

    // no jo, spr, meqs, po, po_items table

    import SupplierTable from './SupplierTable.vue'; // 1
    import ClassificationTable from './ClassificationTable.vue'; // 2 
    import EmployeeTable from './EmployeeTable.vue'; // 3
    import DepartmentTable from './DepartmentTable.vue'; // 4
    import DivisionTable from './DivisionTable.vue'; // 5
    import UnitTable from './UnitTable.vue'; // 6
    import BrandTable from './BrandTable.vue'; // 7
    import JOApprover from './JOApprover.vue'; // 8
    import RVApprover from './RVApprover.vue'; // 9
    import SPRApprover from './SPRApprover.vue'; // 10
    import MEQSApprover from './MEQSApprover.vue'; // 11
    import POApprover from './POApprover.vue'; // 12
    import Approver from './ApproverTable.vue'; // 13
    import CanvassTable from './CanvassTable.vue'; // 14
    import RVTable from './RVTable.vue' // 15
    import EnumsTable from './EnumsTable.vue'; // not included since not stored in db
    import ItemTable from './ItemTable.vue'; // 16

    import JOTable from './JOTable.vue'; 
    import SPRTable from './SPRTable.vue'; 
    import MEQSTable from './MEQSTable.vue'; 
    import POTable from './POTable.vue'; 
    import POItemsTable from './POItemsTable.vue'; 
    // import { ref } from 'vue';

    // const showSupplier = ref(false)
    // const showSupplier = ref(false)

</script>