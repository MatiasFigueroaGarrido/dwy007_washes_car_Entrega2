from django.contrib import admin
from django.urls import path, include
from .views import index, galeria , ubicacion, formulario , formulariodos,quienesSomos,login, logout_view,lista_insumos,eliminar,busqueda_mod,modificar

urlpatterns = [
    path('login/',login,name='LOG'),
    path('',index,name='IND'),
    path('galeria/',galeria,name='GAL'),
    path('ubicacion/',ubicacion,name='UBI'),
    path('formulario/',formulario,name='FOR'),
    path('formulario2/',formulariodos,name='FORDOS'),
    path('quienesSomos/',quienesSomos,name='QUIENES'),
    path('logout_view/',logout_view,name='SALIR'),
    path('lista_insumos/',lista_insumos,name='LISTAINSUMOS'),
    path('eliminar/<id>/',eliminar,name='ELIMINAR'),
    path('buscar/<id>/',busqueda_mod,name='BUSCAR'),
    path('modificar/',modificar,name='MODIFICAR'),
]
