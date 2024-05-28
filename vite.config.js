import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist', // This is the default value
	  },
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "https://chatappfinal-fvth.onrender.com",
			},
		},
	},
});
