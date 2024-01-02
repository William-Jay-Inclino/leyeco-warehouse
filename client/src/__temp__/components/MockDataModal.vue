<template>

    <div class="modal fade" id="mockDataModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Mock Database</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="row">
                    <div class="col">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showClassification" class="custom-control-input" id="classification">
                            <label class="custom-control-label" for="classification">classification</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showSupplier" class="custom-control-input" id="supplier">
                            <label class="custom-control-label" for="supplier">supplier</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showDepartment" class="custom-control-input" id="department">
                            <label class="custom-control-label" for="department">department</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showDivision" class="custom-control-input" id="division">
                            <label class="custom-control-label" for="division">division</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showUnit" class="custom-control-input" id="unit">
                            <label class="custom-control-label" for="unit">unit</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showBrand" class="custom-control-input" id="brand">
                            <label class="custom-control-label" for="brand">brand</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showJOApproverDefault" class="custom-control-input" id="jo_approver_default">
                            <label class="custom-control-label" for="jo_approver_default">jo_approver_default</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showRVApproverDefault" class="custom-control-input" id="rv_approver_default">
                            <label class="custom-control-label" for="rv_approver_default">rv_approver_default</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showSPRApproverDefault" class="custom-control-input" id="spr_approver_default">
                            <label class="custom-control-label" for="spr_approver_default">spr_approver_default</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showMEQSApproverDefault" class="custom-control-input" id="meqs_approver_default">
                            <label class="custom-control-label" for="meqs_approver_default">meqs_approver_default</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showPOApproverDefault" class="custom-control-input" id="po_approver_default">
                            <label class="custom-control-label" for="po_approver_default">po_approver_default</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showApprover" class="custom-control-input" id="approver">
                            <label class="custom-control-label" for="approver">approver</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showEmployee" class="custom-control-input" id="employee">
                            <label class="custom-control-label" for="employee">employee</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showCanvass" class="custom-control-input" id="canvass">
                            <label class="custom-control-label" for="canvass">canvass</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showItem" class="custom-control-input" id="item">
                            <label class="custom-control-label" for="item">item</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showEnums" class="custom-control-input" id="enums">
                            <label class="custom-control-label" for="enums">enums</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showJO" class="custom-control-input" id="jo">
                            <label class="custom-control-label" for="jo">jo</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showRV" class="custom-control-input" id="rv">
                            <label class="custom-control-label" for="rv">rv</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showSPR" class="custom-control-input" id="spr">
                            <label class="custom-control-label" for="spr">spr</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showMEQS" class="custom-control-input" id="meqs">
                            <label class="custom-control-label" for="meqs">meqs</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showPO" class="custom-control-input" id="po">
                            <label class="custom-control-label" for="po">po</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" v-model="showPOItems" class="custom-control-input" id="po_items">
                            <label class="custom-control-label" for="po_items">po_items</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col" v-show="showClassification">
                        <ClassificationTable/>
                    </div>
                    <div class="col" v-show="showSupplier">
                        <SupplierTable />
                    </div>
                    <div class="col" v-show="showDepartment">
                        <DepartmentTable />
                    </div>
                    <div class="col" v-show="showDivision">
                        <DivisionTable />
                    </div>
                    <div class="col" v-show="showUnit">
                        <UnitTable/>
                    </div>
                    <div class="col" v-show="showBrand">
                        <BrandTable />
                    </div>
                    <div class="col" v-show="showJOApproverDefault">
                        <JOApprover />
                    </div>
                    <div class="col" v-show="showRVApproverDefault">
                        <RVApprover />
                    </div>
                    <div class="col" v-show="showSPRApproverDefault">
                        <SPRApprover/>
                    </div>
                    <div class="col" v-show="showMEQSApproverDefault">
                        <MEQSApprover/>
                    </div>
                    <div class="col" v-show="showPOApproverDefault">
                        <POApprover />
                    </div>
                    <div class="col" v-show="showApprover">
                        <Approver />
                    </div>
                    <div class="col" v-show="showEmployee">
                        <EmployeeTable/>
                    </div>
                    <div class="col" v-show="showCanvass">
                        <CanvassTable />
                    </div>
                    <div class="col" v-show="showItem">
                        <ItemTable/>
                    </div>
                    <div class="col" v-show="showJO">
                        <JOTable />
                    </div>
                    <div class="col" v-show="showRV">
                        <RVTable />
                    </div>
                    <div class="col" v-show="showSPR">
                        <SPRTable />
                    </div>
                    <div class="col" v-show="showMEQS">
                        <MEQSTable />
                    </div>
                    <div class="col" v-show="showPO">
                        <POTable />
                    </div>
                    <div class="col" v-show="showPOItems">
                        <POItemsTable />
                    </div>
                </div>

                <hr style="font-size: 20px;">
                
                <h6 class="font-weight-bold" v-show="showEnums"> ENUMS </h6>

                <div class="row" v-show="showEnums">
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
    import { ref } from 'vue';

    const showClassification = ref(false)
    const showSupplier = ref(false)
    const showDepartment = ref(false)
    const showDivision = ref(false)
    const showUnit = ref(false)
    const showBrand = ref(false)
    
    const showJOApproverDefault = ref(false)
    const showRVApproverDefault = ref(false)
    const showSPRApproverDefault = ref(false)
    const showMEQSApproverDefault = ref(false)
    const showPOApproverDefault = ref(false)
    
    const showApprover = ref(true)
    const showEmployee = ref(true)
    const showCanvass = ref(true)
    const showItem = ref(true)

    const showJO = ref(false)
    const showRV = ref(true)
    const showSPR = ref(false)
    const showMEQS = ref(false)
    const showPO = ref(false)
    
    const showPOItems = ref(false)

    const showEnums = ref(true)


</script>

<style scoped>
hr {
    border: none;
    border-top: 2px solid #000;
    margin: 60px auto; 
}
</style>