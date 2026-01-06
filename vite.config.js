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
                contactUs: resolve(__dirname, 'contact-us.html'),
                termsOfService: resolve(__dirname, 'terms-of-service.html'),
                dashboard: resolve(__dirname, 'dashboard.html'),
                students: resolve(__dirname, 'students.html'),
                studentForm: resolve(__dirname, 'student-form.html'),
                courses: resolve(__dirname, 'courses.html'),
                courseForm: resolve(__dirname, 'course-form.html'),
                instructors: resolve(__dirname, 'instructors.html'),
                instructorForm: resolve(__dirname, 'instructor-form.html'),
                profile: resolve(__dirname, 'profile.html'),
                gpaPrediction: resolve(__dirname, 'gpa-prediction.html'),
                viewReport: resolve(__dirname, 'view-report.html'),
                scheduleMeeting: resolve(__dirname, 'schedule-meeting.html'),
                roles: resolve(__dirname, 'roles.html'),
                settings: resolve(__dirname, 'settings.html'),
                users: resolve(__dirname, 'users.html'),
                notifications: resolve(__dirname, 'notifications.html'),
                userForm: resolve(__dirname, 'user-form.html'),
                roleForm: resolve(__dirname, 'role-form.html'),
                sitemap: resolve(__dirname, 'sitemap.html'),
            },
        },
    },
})
