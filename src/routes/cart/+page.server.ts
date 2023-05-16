export const actions = {
  updateCartQuantity: async ({ request }) => {
    const data = await request.formData();
    console.log(data)
  }
}