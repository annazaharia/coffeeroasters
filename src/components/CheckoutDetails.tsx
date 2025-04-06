export default function CheckoutDetails() {
  return (
    <>
      <h3> Checkout Details</h3>
      <table className="table table-striped table-hover table-checkout">
        <tbody>
          <tr>
            <th scope="row">Preferences:</th>
            <td>Capsules</td>
            <td>2x$4.99</td>
          </tr>
          <tr>
            <th scope="row">Bean Type:</th>
            <td>Decacaf</td>
            <td>2x$4.99</td>
          </tr>
          <tr>
            <th scope="row">Quantity:</th>
            <td>250g</td>
            <td>2x$4.99</td>
          </tr>
          <tr>
            <th scope="row">Frequency:</th>
            <td>Every 2 weeks</td>
            <td>2x$4.99</td>
          </tr>
          <tr>
            <th scope="row">Total:</th>
            <td></td>
            <td>$51.14/mo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
