from django.db import models 

# Create your models here.
class carruselIndex(models.Model):
    id = models.CharField(max_length=15,primary_key=True)
    img = models.ImageField(upload_to='car',null=True)

    def __str__(self):
        return self.id


class galeriaImagenes(models.Model):
    identificador = models.CharField(max_length=15,primary_key=True)
    imagenGaleria= models.ImageField(upload_to='galeria',null=True)
    mensaje =models.TextField()
    overlay =models.TextField()

    def __str__(self):
        return self.identificador



class MisionVision(models.Model):
    id = models.CharField(max_length=15,primary_key=True)
    mision = models.TextField()
    vision = models.TextField()

    def __str__(self):
        return self.id

class Insumos(models.Model):
    id = models.IntegerField(primary_key=True)
    nombre = models.TextField()
    precio = models.IntegerField()
    descripcion = models.TextField()
    stock = models.IntegerField()

    def __str__(self):
        return self.id