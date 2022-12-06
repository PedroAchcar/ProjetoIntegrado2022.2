from django.db import models


class Dados(models.Model):
    caixa = models.FloatField()
    cisterna = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
