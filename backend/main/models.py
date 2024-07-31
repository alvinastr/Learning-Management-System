from django.db import models


class Teacher(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_no = models.CharField(max_length=20)
    skills = models.TextField()

    class Meta:
        verbose_name_plural = "1. Teachers"

class CourseCategory(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "2. Course Category"

    def __str__(self):
        return self.title

class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    feature_img = models.ImageField(upload_to='course_images/', null=True)
    techs = models.TextField(null=True)

    class Meta:
        verbose_name_plural = "3. Courses"

class Student(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_no = models.CharField(max_length=20)
    address = models.TextField()
    interested_category = models.TextField()

    class Meta:
        verbose_name_plural = "4. Students"



# Student Model
