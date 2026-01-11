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
                doctorsStudentForm: resolve(__dirname, 'doctors/student-form.html'),
                doctorsInstructors: resolve(__dirname, 'doctors/instructors.html'),
                doctorsInstructorForm: resolve(__dirname, 'doctors/instructor-form.html'),
                doctorsCourses: resolve(__dirname, 'doctors/courses.html'),
                doctorsCourseForm: resolve(__dirname, 'doctors/course-form.html'),
                doctorsUsers: resolve(__dirname, 'doctors/users.html'),
                doctorsUserForm: resolve(__dirname, 'doctors/user-form.html'),
                doctorsRoles: resolve(__dirname, 'doctors/roles.html'),
                doctorsRoleForm: resolve(__dirname, 'doctors/role-form.html'),
                doctorsNotifications: resolve(__dirname, 'doctors/notifications.html'),
                doctorsProfile: resolve(__dirname, 'doctors/profile.html'),
                doctorsSettings: resolve(__dirname, 'doctors/settings.html'),
                doctorsGpaPrediction: resolve(__dirname, 'doctors/gpa-prediction.html'),
                doctorsViewReport: resolve(__dirname, 'doctors/view-report.html'),
                doctorsScheduleMeeting: resolve(__dirname, 'doctors/schedule-meeting.html'),

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
