# Generated by Django 2.2.16 on 2020-10-15 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('washescar', '0002_galeriaimagenes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='galeriaimagenes',
            name='mensaje',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='galeriaimagenes',
            name='overlay',
            field=models.CharField(max_length=30),
        ),
    ]
