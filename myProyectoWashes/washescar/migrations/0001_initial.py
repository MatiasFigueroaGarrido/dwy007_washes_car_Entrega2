# Generated by Django 2.2.16 on 2020-10-11 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='carruselIndex',
            fields=[
                ('id', models.CharField(max_length=15, primary_key=True, serialize=False)),
                ('img', models.ImageField(null=True, upload_to='car')),
            ],
        ),
    ]
