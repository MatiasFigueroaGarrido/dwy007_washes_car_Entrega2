from django.shortcuts import render
from .models import carruselIndex ,galeriaImagenes, MisionVision, Insumos
from django.contrib.auth.models import User
# librerias autentificación
from django.contrib.auth import authenticate,logout, login as login_autent
from django.contrib.auth.decorators import login_required,permission_required
# Create your views here.

def logout_view(request):
    logout(request)
    autos = carruselIndex.objects.all()
    return render(request,'web/index2.html',{'autos':autos})

def login(request):
    if request.POST:
        usuario = request.POST.get("usuario")
        password= request.POST.get("passwd")
        us = authenticate(request,username=usuario,password=password)
        if us is not None and us.is_active:
            login_autent(request,us)
            autos = carruselIndex.objects.all()
            return render(request,'web/index2.html',{'user':us,'autos':autos})
        else:
             return render(request,'web/login.html',{'msg':'clave o password incorrecta'})
    return render(request,'web/login.html')



def index(request):
    autos = carruselIndex.objects.all()
    return render(request,'web/index2.html',{'autos':autos})

def galeria(request):
    imagen = galeriaImagenes.objects.all()
    return render(request,'web/galeria.html',{'imagen':imagen})


def ubicacion(request):
    return render(request,'web/ubicacion.html')

def formulario(request):
    if request.POST:
        nombre = request.POST.get("txtNombre")
        apellido = request.POST.get("txtApellido")
        email = request.POST.get("txtEmail")
        clave1 = request.POST.get("txtContrasena")
        clave2 = request.POST.get("txtContrasena2")
        usuario = request.POST.get("txtNombreUsuario")

        usuar = User()
        usuar.username = usuario
        usuar.set_password(clave1)
        usuar.first_name = nombre
        usuar.last_name = apellido
        usuar.email = email
        usuar.save()
        autos = carruselIndex.objects.all()
        return render(request,'web/index2.html',{'autos':autos})


    return render(request,'web/formulario.html')

@login_required(login_url='/login/')
@permission_required('washescar.delete_insumos',login_url='/login/')
def eliminar(request,id):
    try:
        insumo = Insumos.objects.get(nombre=id)
        insumo.delete()
        msg='Elimino Insumo'
    except:
        msg='No Elimino'
    insumos = Insumos.objects.all()
    return render(request,'web/admin_insumos.html',{'lista_insumos':insumos,'msg':msg})



@login_required(login_url='/login/')
@permission_required('washescar.view_insumos',login_url='/login/')
def lista_insumos(request):
    insumos = Insumos.objects.all()
    return render(request,'web/admin_insumos.html',{'lista_insumos':insumos})


#defino formulario ingreso de insumos
@login_required(login_url='/login/')
@permission_required('washescar.add_insumos',login_url='/login/')
@permission_required('washescar.change_insumos',login_url='/login/')
@permission_required('washescar.delete_insumos',login_url='/login/')
@permission_required('washescar.view_insumos',login_url='/login/')
def formulariodos(request):
    if request.POST:
        id = request.POST.get("txtid")
        nombre = request.POST.get("txtNombreProducto")
        precio = request.POST.get("txtPrecio")
        descripcion = request.POST.get("txtDescripcion")
        stock = request.POST.get("txtstock")
       
        insumo = Insumos (
         id = id,
         nombre= nombre,
         precio = precio,
         descripcion=descripcion,
         stock=stock
        )
        insumo.save()
        return render(request,'web/formulario2.html',{'msg':"Grabo Insumo :  " +    insumo.nombre})
    return render(request,'web/formulario2.html')


def quienesSomos(request):
    mv=MisionVision.objects.all()
    return render(request,'web/quienesSomos.html',{'mv':mv}) 



@login_required(login_url='/login/')
@permission_required('washescar.view_insumos',login_url='/login/')
def busqueda_mod(request,id):
    try:
        insumo = Insumos.objects.get(nombre=id)
        return render(request,'web/mod_insumos.html',{'insumo':insumo})
    except:
        msg='Insumo no Encontrado'
    insumos = Insumos.objects.all()
    return render(request,'web/admin_insumos.html',{'lista_insumos':insumos,'msg':msg})



@permission_required('washescar.change',login_url='/login/')
@login_required(login_url='/login/')
@permission_required('washescar.view_insumos',login_url='/login/')
def modificar(request):
   
    if request.POST:
        id = request.POST.get("txtid")
        nombre = request.POST.get("txtNombreProducto")
        precio = request.POST.get("txtPrecio")
        descripcion = request.POST.get("txtDescripcion")
        stock = request.POST.get("txtstock")
       
        try:
            insumo = Insumos (
            id = id,
            nombre= nombre,
            precio = precio,
            descripcion=descripcion,
            stock=stock
            )
            insumo.save()
            msg='Insumo Modificado'
        except :
            msg='No Modifico'
    insumos = Insumos.objects.all()
    return render(request,'web/admin_insumos.html',{'lista_insumos':insumos,'msg':msg})


