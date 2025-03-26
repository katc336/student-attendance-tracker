import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL = "/";

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: backendURL,
        prepareHeaders: (headers: Headers, args: { getState: any }) => {
            const token = args.getState().auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Admin", "Teacher"] as const,

    endpoints: (builder) => ({
        // ADMIN AUTHORIZATION
        adminRegister: builder.mutation({
            query: (user: any) => ({
                url: `/adminAuth/school_register`,
                method: 'POST',
                body: user,
            }),
        }),
        adminLogin: builder.mutation({
            query: (user: any) => ({
                url: `/adminAuth/school_login`,
                method: 'POST',
                body: user,
            }),
        }),
        // GET ADMIN INFO
        getAdmin: builder.query({
            query: () => ({
                url: `/adminAuth/admin_account`,
                method: 'GET',
            }),
            providesTags: ["Admin"]
        }),
        // TEACHER AUTHORIZATION
        teacherRegister: builder.mutation({
            query: (user: any) => ({
                url: `/teacherAuth/teacher_register`,
                method: 'POST',
                body: user,
            }),
        }),
        teacherLogin: builder.mutation({
            query: (user: any) => ({
                url: `/teacherAuth/teacher_login`,
                method: 'POST',
                body: user,
            }),
        }),
        // GET ADMIN INFO
        getTeacher: builder.query({
            query: () => ({
                url: `/adminAuth/teacher_account`,
                method: 'GET',
            }),
            providesTags: ["Admin"]
        }),
        //ADMIN ADD TEACHER
        postTeacher: builder.mutation({
            query: (teacherName: object) => ({
                url: `/adminApi/add_teacher`,
                method: 'POST',
                body: teacherName,
            }),
        }), 
        //ADMIN ADD TEACHER
        adminPostStudent: builder.mutation({
            query: (studentName: object) => ({
                url: `/adminApi/add_students`,
                method: 'POST',
                body: studentName,
            }),
        }) 

    })
});
export default api;
export const {
    //Admin Auth
    useAdminRegisterMutation,
    useAdminLoginMutation,
    useGetAdminQuery,
    //Teacher Authorization
    useTeacherRegisterMutation,
    useTeacherLoginMutation,
    useGetTeacherQuery,
    //Admin
    usePostTeacherMutation,
    useAdminPostStudentMutation,
} = api;
