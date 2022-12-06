from rest_framework.response import Response
from rest_framework.views import APIView

from dados.models import Dados
from dados.serializers import DadosSerializer


class DadosApiView(APIView):
    def post(self, request):
        serializer = DadosSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({
                'dado': serializer.validated_data
            }, status=200)

        return Response({
            'erro': serializer.errors
        }, status=400)

    def get(self, request):
        dados = Dados.objects.all()
        serializer = DadosSerializer(dados, many=True)

        return Response({
            'dados': serializer.data
        }, status=200)
