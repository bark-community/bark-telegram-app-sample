<template>
  <div class="swap-container">
    <h2>Swap</h2>
    <div class="feature-details">
      <div class="input-group">
        <label>From Token:</label>
        <select v-model="fromToken">
          <option disabled value="">Please select token</option>
          <option v-for="token in tokens" :key="token.symbol">{{ token.symbol }}</option>
        </select>
      </div>
      <div class="input-group">
        <label>To Token:</label>
        <select v-model="toToken">
          <option disabled value="">Please select token</option>
          <option v-for="token in tokens" :key="token.symbol">{{ token.symbol }}</option>
        </select>
      </div>
      <div class="input-group">
        <label>Amount:</label>
        <input type="number" v-model="amount" placeholder="Enter amount" />
      </div>
      <div class="buttons">
        <button class="action-button swap" @click="swapTokens">Swap</button>
      </div>
      <div v-if="transactionDetails" class="transaction-details">
        <h3>Transaction Details</h3>
        <p v-if="transactionDetails.amount">Amount: {{ transactionDetails.amount }}</p>
        <p v-if="transactionDetails.fromToken">From: {{ transactionDetails.fromToken }}</p>
        <p v-if="transactionDetails.toToken">To: {{ transactionDetails.toToken }}</p>
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
import { defineComponent, ref, reactive } from 'vue';

interface Token {
  symbol: string;
  address: string;
}

interface TransactionDetails {
  amount?: number;
  fromToken?: string;
  toToken?: string;
  txId?: string;
}

export default defineComponent({
  name: 'Swap',
  setup() {
    const fromToken = ref<string>('');
    const toToken = ref<string>('');
    const amount = ref<number | null>(null);
    const transactionDetails = ref<TransactionDetails | null>(null);
    const error = ref<string>('');

    const tokens = reactive<Token[]>([
      { symbol: 'Token A', address: 'address_A' },
      { symbol: 'Token B', address: 'address_B' },
      // Fetch token list dynamically from an API
    ]);

    const swapTokens = async () => {
      if (!fromToken.value || !toToken.value || !amount.value) {
        error.value = 'Please select tokens and enter amount';
        return;
      }

      transactionDetails.value = {
        amount: amount.value,
        fromToken: fromToken.value,
        toToken: toToken.value,
        txId: 'transaction_id', // Replace with actual transaction ID
      };

      fromToken.value = '';
      toToken.value = '';
      amount.value = null;
      error.value = '';
    };

    const explorerUrl = (txId: string) => `https://explorer.solana.com/tx/${txId}`;

    return {
      fromToken,
      toToken,
      amount,
      transactionDetails,
      error,
      swapTokens,
      tokens,
      explorerUrl,
    };
  },
});
</script>

<style scoped>
/* Your styles here */
</style>
