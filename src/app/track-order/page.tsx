export default function TrackOrderPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#0f0f0f]">
        Track Your Order
      </h1>

      <form className="bg-white shadow-md rounded-lg p-6 space-y-6 border border-gray-200">
        <div className="space-y-1">
          <label
            htmlFor="orderId"
            className="block text-sm font-medium text-gray-700"
          >
            Order ID
          </label>
          <input
            id="orderId"
            name="orderId"
            type="text"
            placeholder="e.g. #SPL12345"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition"
        >
          Track Order
        </button>
      </form>

      <p className="text-sm text-center text-gray-500 mt-6">
        Need help? Contact us on WhatsApp or email at{" "}
        <a
          href="mailto:support@splendies.pk"
          className="text-red-500 hover:underline"
        >
          support@splendies.pk
        </a>
      </p>
    </main>
  );
}
