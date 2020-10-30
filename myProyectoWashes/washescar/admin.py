from django.contrib import admin
from .models import carruselIndex , galeriaImagenes, MisionVision, Insumos
# Register your models here.


class CarruselAdmin(admin.ModelAdmin):
    list_display=['id','img']
    search_fields= ['id']
    list_per_page=1

class InsumosAdmin(admin.ModelAdmin):
  search_fields=['nombre','id']
  list_display=['nombre','precio','descripcion','stock']



admin.site.register(carruselIndex,CarruselAdmin)
admin.site.register(galeriaImagenes)
admin.site.register(MisionVision)
admin.site.register(Insumos,InsumosAdmin)
 