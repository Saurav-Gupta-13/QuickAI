import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {
  return (
    <div className="max-w-3xl mx-auto my-28 px-4 sm:px-10 xl:px-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100 py-20 rounded-3xl shadow-lg border border-gray-800">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-white text-[42px] font-semibold drop-shadow-md">
          Choose Your Plan
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Start for free and explore AI tools built to make your workflow faster and smarter.
        </p>
      </div>

      {/* Pricing Table - Only Free Plan */}
      <div className="mt-12 max-sm:mx-4">
        <PricingTable
          appearance={{
            elements: {
              rootBox:
                "bg-gray-900/70 border border-gray-700 backdrop-blur-md rounded-2xl shadow-md p-6",
              card:
                "bg-gray-900 text-gray-200 border border-gray-700 hover:border-indigo-500 transition-all duration-300",
              headerTitle: "text-white font-semibold text-lg",
              headerSubtitle: "text-gray-400",
              priceText: "text-indigo-400 font-bold text-xl",
              actionButton:
                "bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg mt-4 py-2 px-4 transition-all duration-200",
            },
          }}
          // ✅ Only Free Plan
          plans={["free"]}
        />
      </div>
    </div>
  );
};

export default Plan;
