<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let quantity: number;
  const initialValue = quantity;
  const dispatch = createEventDispatcher();
  const updateCartQuantity = () => {
    if (quantity === initialValue) return;
    dispatch("updateCartQuantity", {
      quantity,
    });
  };
</script>

<input type="number" on:click={(e) => e.currentTarget.select()} on:blur={updateCartQuantity} bind:value={quantity} />