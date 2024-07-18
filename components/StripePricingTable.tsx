import Script from "next/script";
import type { FC } from "react";

export const StripePricingTable: FC<{
	pricingTableId?: string;
	publishableKey?: string;
	clientReferenceId?: string;
	customerEmail?: string;
}> = ({ pricingTableId, publishableKey, clientReferenceId, customerEmail }) => {
	if (!pricingTableId || !publishableKey) return null;
	return (
		<>
			<Script
				async
				strategy="lazyOnload"
				src="https://js.stripe.com/v3/pricing-table.js"
			/>
			<stripe-pricing-table
				pricing-table-id={pricingTableId}
				publishable-key={publishableKey}
				client-reference-id={clientReferenceId}
				customer-email={customerEmail}
			/>
		</>
	);
};
