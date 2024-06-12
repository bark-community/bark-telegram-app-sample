<template>
  <div class="payments-container">
    <h2>Payments</h2>
    <div class="feature-details">
      <div class="input-group">
        <label>Recipient:</label>
        <input type="text" v-model="recipient" placeholder="Enter recipient" />
      </div>
      <div class="input-group">
        <label>Amount:</label>
        <input type="number" v-model="amount" placeholder="Enter amount" />
      </div>
      <div class="buttons">
        <button class="action-button pay" @click="makePayment">Make Payment</button>
      </div>
      <div v-if="transactionDetails" class="transaction-details">
        <h3>Transaction Details</h3>
        <p v-if="transactionDetails.amount">Amount: {{ transactionDetails.amount }}</p>
        <p v-if="transactionDetails.recipient">Recipient: {{ transactionDetails.recipient }}</p>
        <p v-if="transactionDetails.txId">Transaction ID: {{ transactionDetails.txId }}</p>
        <p v-if="transactionDetails.txId">
          Explorer: 
          <a :href="explorerUrl(transactionDetails.txId)" target="_blank">View on Solana Explorer</a>
        </p>
      </div>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface TransactionDetails {
  amount?: number;
  recipient?: string;
  txId?: string;
}

export default defineComponent({
  name: 'Payments',
  setup() {
    const recipient = ref<string>('');
    const amount = ref<number | null>(null);
    const transactionDetails = ref<TransactionDetails | null>(null);
    const error = ref<string>('');

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

    const explorerUrl = (txId: string) => `https://explorer.solana.com/tx/${txId}`;

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
</script>

<style scoped>
/* Your styles here */
</style>
