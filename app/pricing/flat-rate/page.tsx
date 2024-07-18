"use client";

export default function Pricing() {
	return (
		<>
			<script async src="https://js.stripe.com/v3/pricing-table.js" />
			<stripe-pricing-table
				pricing-table-id="prctbl_1PduHWA0hNDihD1aiqeTzMy4"
				publishable-key="pk_test_51PdXpHA0hNDihD1abHeOB3Gvhn2izmbA9LkzFMo7nOzuQTod7X2QQxZcISieGLFv5Qw4pgAEC5CrLmTRbFdgfJB90057oV78Fe"
			/>
		</>
	);
}
