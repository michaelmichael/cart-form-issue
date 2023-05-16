<script lang="ts">
  import NumberInput from "../../lib/components/NumberInput.svelte";
  import { enhance } from "$app/forms";
  const lineItems = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      quantity: 3,
    }
  ];

  let cartQuantityForm: HTMLFormElement;
</script>

{#each lineItems as lineItem}
  <div>
    <h3>{lineItem.name}</h3>
    <p>Price: {lineItem.price}</p>
    <form
      action="?/updateCartQuantity"
      bind:this={cartQuantityForm}
      method="POST"
      use:enhance={() => {
        return async ({ update }) => {
          update({ reset: false });
        };
      }}
    >
      <NumberInput
        bind:quantity={lineItem.quantity}
        on:updateCartQuantity={() => {
          cartQuantityForm.submit();
        }}
      />
      <input type="hidden" name="id" bind:value={lineItem.id}>
    </form>
  </div>
{/each}
