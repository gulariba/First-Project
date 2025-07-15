// app/payment-methods/page.tsx

export default function PaymentMethods() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-white bg-[#0a0a0a] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 border-b border-red-400 pb-2">Payment Methods</h1>

      <div className="space-y-6 text-sm text-gray-300 leading-relaxed">

        <div>
          <h2 className="text-lg font-semibold text-red-400 mb-2">1. EasyPaisa</h2>
          <p><strong>Account Name:</strong> Your Name</p>
          <p><strong>Mobile Number:</strong> 0345-XXXXXXX</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-red-400 mb-2">2. JazzCash</h2>
          <p><strong>Account Name:</strong> Your Name</p>
          <p><strong>Mobile Number:</strong> 0301-XXXXXXX</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-red-400 mb-2">3. Cash on Delivery (COD)</h2>
          <p>Pay in cash when your order is delivered to your doorstep.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-red-400 mb-2">📸 After Payment</h2>
          <p>
            Please take a screenshot of your payment and send it to our WhatsApp:
            <br />
            <a href="https://wa.me/92345XXXXXXX" target="_blank" className="text-green-400 underline">
              WhatsApp Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
