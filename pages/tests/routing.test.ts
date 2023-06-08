import { setup, $fetch } from "@nuxt/test-utils";

describe("routing", async () => {
	await setup({ server: true });
	it("index is accessible", async () => {
		const response = await $fetch("/");
		expect(response).toMatchSnapshot();
		expect(response).toContain("Good day dear visitor!");
	});
	it("imprint is accessible", async () => {
		const response = await $fetch("/imprint");
		expect(response).toMatchSnapshot();
		expect(response).toContain("Responsible entity");
	});
	it("philosophy is accessible", async () => {
		const response = await $fetch("/philosophy");
		expect(response).toMatchSnapshot();
		expect(response).toContain("My Beliefs");
	});
	it("pnp is accessible", async () => {
		const response = await $fetch("/pnp");
		expect(response).toMatchSnapshot();
		expect(response).toContain("My Characters");
	});
	it("programming is accessible", async () => {
		const response = await $fetch("/programming");
		expect(response).toMatchSnapshot();
		expect(response).toContain("My Projects");
	});
	it("writing is accessible", async () => {
		const response = await $fetch("/writing");
		expect(response).toMatchSnapshot();
		expect(response).toContain("My Thoughts");
	});
});
