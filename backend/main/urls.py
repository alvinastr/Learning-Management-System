from django.urls import path
from . import views

urlpatterns = [
    path('teacher/', views.TeacherList.as_view()), #1
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()), #2
    path('teacher/login/', views.teacher_login), #3
    # Category
    path('category/', views.CategoryList.as_view()), #4
    # Course
    path('course/',views.CourseList.as_view()), #5

    path('course/<int:pk>/', views.CourseDetail.as_view()), #6
    # Video
    path('video/', views.VideoList.as_view()), #6
    # Specific Course Video
    path('course-video/<int:course_id>', views.CourseVideoList.as_view()), #7
    # Specific Video
    path('video/<int:pk>/', views.VideoDetail.as_view()), #8
    # Teacher
    path('teacher-course/<int:teacher_id>', views.TeacherCourseList.as_view()),
    # Teacher Specific Course
    path('teacher-course-detail/<int:pk>/', views.TeacherCourseDetail.as_view())
]