import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services.html'),
                forgotPassword: resolve(__dirname, 'forgot-password.html'),
                resetPassword: resolve(__dirname, 'reset-password.html'),
                login: resolve(__dirname, 'login.html'),
                ourServices: resolve(__dirname, 'our-services.html'),
                privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
                aboutUs: resolve(__dirname, 'about-us.html'),
            },
        },
    },
})
