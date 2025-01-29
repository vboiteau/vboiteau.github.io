import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		coverage: {
			reporter: ["text", "lcov"],
		},
		environment: "jsdom",
		globals: true,
		passWithNoTests: true,
	},
});
