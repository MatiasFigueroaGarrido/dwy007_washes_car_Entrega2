# Generated by Django 2.2.16 on 2020-10-15 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('washescar', '0003_auto_20201015_2025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='galeriaimagenes',
            name='mensaje',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='galeriaimagenes',
            name='overlay',
            field=models.TextField(),
        ),
    ]
