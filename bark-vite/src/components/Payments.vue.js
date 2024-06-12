/* __placeholder__ */
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'Payments',
    setup() {
        const recipient = ref('');
        const amount = ref(null);
        const transactionDetails = ref(null);
        const error = ref('');
        const makePayment = async () => {
            if (!recipient.value || !amount.value) {
                error.value = 'Please enter recipient and amount';
                return;
            }
            // Simulate transaction
            transactionDetails.value = {
                amount: amount.value,
                recipient: recipient.value,
                txId: 'transaction_id', // Replace with actual transaction ID
            };
            recipient.value = '';
            amount.value = null;
            error.value = '';
        };
        const explorerUrl = (txId) => `https://explorer.solana.com/tx/${txId}`;
        return {
            recipient,
            amount,
            transactionDetails,
            error,
            makePayment,
            explorerUrl,
        };
    },
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("payments-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("feature-details") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.recipient)), placeholder: ("Enter recipient"), });
    // @ts-ignore
    [recipient,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), placeholder: ("Enter amount"), });
    (__VLS_ctx.amount);
    // @ts-ignore
    [amount,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("buttons") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.makePayment) }, ...{ class: ("action-button pay") }, });
    // @ts-ignore
    [makePayment,];
    if (__VLS_ctx.transactionDetails) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("transaction-details") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        // @ts-ignore
        [transactionDetails,];
        if (__VLS_ctx.transactionDetails.amount) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (__VLS_ctx.transactionDetails.amount);
            // @ts-ignore
            [transactionDetails, transactionDetails,];
        }
        if (__VLS_ctx.transactionDetails.recipient) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (__VLS_ctx.transactionDetails.recipient);
            // @ts-ignore
            [transactionDetails, transactionDetails,];
        }
        if (__VLS_ctx.transactionDetails.txId) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (__VLS_ctx.transactionDetails.txId);
            // @ts-ignore
            [transactionDetails, transactionDetails,];
        }
        if (__VLS_ctx.transactionDetails.txId) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.explorerUrl(__VLS_ctx.transactionDetails.txId))), target: ("_blank"), });
            // @ts-ignore
            [transactionDetails, transactionDetails, explorerUrl,];
        }
    }
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("error") }, });
        (__VLS_ctx.error);
        // @ts-ignore
        [error, error,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['payments-container'];
        __VLS_styleScopedClasses['feature-details'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['buttons'];
        __VLS_styleScopedClasses['action-button'];
        __VLS_styleScopedClasses['pay'];
        __VLS_styleScopedClasses['transaction-details'];
        __VLS_styleScopedClasses['error'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'Payments';
    let __VLS_internalComponent;
}
//# sourceMappingURL=Payments.vue.js.map