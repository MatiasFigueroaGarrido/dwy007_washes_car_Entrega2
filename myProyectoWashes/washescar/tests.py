from django.test import TestCase
import unittest
from .models import MisionVision, galeriaImagenes, Insumos
from django.contrib.auth.models import User
# Create your tests here.

class TestUno(unittest.TestCase):
    def agregarInsumo(self):
        u=Insumos(
            1,"nombre",1990,"descripcion",100
        )
        valor = 0
        try:
            u.save()
            valor = 1
        except:
            valor = 0
        self.assertEqual(valor,1)

    def agregarUsuaruario(self):
        us = User()
        us.username = "miguel_auto"
        us.set_password("lavado3d")
        us.first_name = "Miguel"
        us.last_name = "Cervantes"
        us.email = "miguel_c@gmail.com"
        valor = 0
        try:
            us.save()
            valor = 1
        except:
            valor = 0
        self.assertEqual(valor,1)

    def eliminarInsumo(self):
        insumo = Insumos.objects.get(nombre=1)
        valor = 0
        try:
            insumo.delete()
            valor = 1
        except:
            valor = 0
        self.assertEqual(valor,1)


    def grabar_myv(self):
        m=MisionVision(
            mision="Nuestra Mision como Washescar",vision="Nuestra vision es"
        )
        valor = 0
        try:
            m.save()
            valor =1
        except: 
            valor = 0
        self.assertEqual(valor,1)
    
    def login(self):
        us = authenticate(request,username="angel",password="angel")
        valor = 0
        try:
            login_autent(request,us)
            valor = 1
        except:
            valor = 0
        self.assertEqual(valor,1)

if __name__ == "__main__":
    unittest.main()
