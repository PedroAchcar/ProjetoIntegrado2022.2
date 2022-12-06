from rest_framework import serializers

from dados.models import Dados


class DadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dados
        fields = '__all__'
