import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                // Public Pages
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services.html'),
                ourServices: resolve(__dirname, 'our-services.html'),
                aboutUs: resolve(__dirname, 'about-us.html'),
                contactUs: resolve(__dirname, 'contact-us.html'),
                privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
                termsOfService: resolve(__dirname, 'terms-of-service.html'),
                sitemap: resolve(__dirname, 'sitemap.html'),

                // Auth Pages
                login: resolve(__dirname, 'login.html'),
                forgotPassword: resolve(__dirname, 'forgot-password.html'),
                resetPassword: resolve(__dirname, 'reset-password.html'),

                // Doctors Panel
                doctorsDashboard: resolve(__dirname, 'doctors/dashboard.html'),
                doctorsStudents: resolve(__dirname, 'doctors/students.html'),
                doctorsInstructors: resolve(__dirname, 'doctors/instructors.html'),
                doctorsSettings: resolve(__dirname, 'doctors/settings.html'),
                doctorsStudentForm: resolve(__dirname, 'doctors/student-form.html'),
                doctorsInstructorForm: resolve(__dirname, 'doctors/instructor-form.html'),

                // Student Panel
                studentDashboard: resolve(__dirname, 'student/dashboard.html'),
                studentMyGrades: resolve(__dirname, 'student/my-grades.html'),
                studentGpaPredictions: resolve(__dirname, 'student/gpa-predictions.html'),
                studentAcademicHistory: resolve(__dirname, 'student/academic-history.html'),
                studentSettings: resolve(__dirname, 'student/settings.html'),
            },
        },
    },
})
