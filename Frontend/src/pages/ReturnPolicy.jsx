const ReturnPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Return Policy</h1>
      <p className="mb-4">
        If you're not satisfied with your purchase, you may request a return within 7 days of delivery.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Items must be unused and in original condition.</li>
        <li>Return shipping costs are the responsibility of the customer unless the product was damaged or incorrect.</li>
        <li>Refunds will be processed within 5–7 business days after inspection.</li>
      </ul>
      <p>
        To initiate a return, please contact our support team with your order number and reason.
      </p>
    </div>
  )
}

export default ReturnPolicy
