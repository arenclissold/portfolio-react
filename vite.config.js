import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

module.exports = defineConfig({
	plugins: [react(), tailwindcss()],
});
