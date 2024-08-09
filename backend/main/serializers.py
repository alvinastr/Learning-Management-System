from rest_framework import serializers
from . import models

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id', 'full_name', 'details' ,'email', 'password','qualification', 'mobile_no', 'skills', 'teacher_courses']
        depth = 1

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseCategory
        fields = ['id', 'title', 'description']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id', 'category', 'teacher', 'title', 'description', 'featured_img', 'techs', 'course_videos', 'related_videos']
        depth= 1

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Video
        fields = ['id', 'course', 'title', 'description', 'video', 'remarks']