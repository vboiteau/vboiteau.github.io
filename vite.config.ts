import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0", // Listen on all network interfaces
		port: 5173, // Ensure the port matches the one exposed in docker-compose.yml
	},
});
