# Generated by Django 5.0.7 on 2024-08-02 08:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_student_options_video'),
    ]

    operations = [
        migrations.RenameField(
            model_name='video',
            old_name='coruse',
            new_name='course',
        ),
        migrations.RenameField(
            model_name='video',
            old_name='techs',
            new_name='remarks',
        ),
    ]
