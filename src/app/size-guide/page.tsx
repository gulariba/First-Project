export default function SizeGuidePage() {
  return (
    <main className="bg-black text-white py-20 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-red-500">
        Size Guide
      </h1>

      <p className="text-center text-base text-gray-300 mb-10">
        Use the chart below to find your perfect fit. Measurements are in inches.
      </p>

      <div className="overflow-x-auto border border-gray-700 rounded-lg shadow-lg">
        <table className="w-full table-auto text-sm text-left text-white">
          <thead className="bg-red-900 text-pink-200 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Bust</th>
              <th className="px-4 py-3">Waist</th>
              <th className="px-4 py-3">Hips</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-[#121212]">
            <tr>
              <td className="px-4 py-3 font-medium">XS</td>
              <td className="px-4 py-3">30 – 32&quot;</td>
              <td className="px-4 py-3">24 – 26&quot;</td>
              <td className="px-4 py-3">32 – 34&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">S</td>
              <td className="px-4 py-3">32 – 34&quot;</td>
              <td className="px-4 py-3">26 – 28&quot;</td>
              <td className="px-4 py-3">34 – 36&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">M</td>
              <td className="px-4 py-3">34 – 36&quot;</td>
              <td className="px-4 py-3">28 – 30&quot;</td>
              <td className="px-4 py-3">36 – 38&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">L</td>
              <td className="px-4 py-3">36 – 38&quot;</td>
              <td className="px-4 py-3">30 – 32&quot;</td>
              <td className="px-4 py-3">38 – 40&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">XL</td>
              <td className="px-4 py-3">38 – 40&quot;</td>
              <td className="px-4 py-3">32 – 34&quot;</td>
              <td className="px-4 py-3">40 – 42&quot;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-400 mt-6 text-center">
        Still unsure?{" "}
        <span className="text-red-400 underline cursor-pointer">
          Chat with us on WhatsApp
        </span>{" "}
        for personalized help.
      </p>
    </main>
  );
}
