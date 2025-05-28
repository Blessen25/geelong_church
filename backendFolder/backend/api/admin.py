from django.contrib import admin
from django.utils import timezone
from .models import Contact, Event

# Register your models here.


class ContactAdmin(admin.ModelAdmin):
    list_display = ('name','email','phone_number','subject','message','country', 'created_at','is_deleted','deleted_at')
    list_filter = ('is_deleted','created_at','country')
    search_fields = ('name','email','phone_number','subject','message','country')
    date_hierarchy = 'created_at'
    actions = ['soft_delete']
    readonly_fields = ('deleted_at','country')

    def soft_delete(self, request, queryset):
        queryset.update(is_deleted=True, deleted_at = timezone.now())
    soft_delete.short_description = "Mark selected contacts as deleted"

class EventAdmin(admin.ModelAdmin):
    list_display = ('event_name','event_date','created_at','is_deleted','deleted_at')
    list_filter = ('is_deleted','created_at')
    search_fields = ('event_name','event_date')
    date_hierarchy = 'created_at'
    actions = ['soft_delete']
    readonly_fields = ('deleted_at',)

    def soft_delete(self, request, queryset):
        queryset.update(is_deleted=True, deleted_at = timezone.now())
    soft_delete.short_description = "Mark selected events as deleted"


admin.site.register(Contact, ContactAdmin)
admin.site.register(Event, EventAdmin)