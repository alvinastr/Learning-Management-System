# Generated by Django 5.0.7 on 2024-08-09 14:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_rename_coruse_video_course_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='details',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='course',
            name='teacher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='teacher_courses', to='main.teacher'),
        ),
        migrations.AlterField(
            model_name='video',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='course_videos', to='main.course'),
        ),
    ]
