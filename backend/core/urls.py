from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import (
    ClassificationViewSet,
    CodeViewSet,
    TrainingDataFileViewSet,
    TrainingDataViewSet,
    CrosswalkFileViewSet,
    CrosswalkViewSet,
    SpellCorrectionViewSet,
    CodingRulesViewSet
)


router = DefaultRouter()
router.register(r'classifications', ClassificationViewSet)
router.register(r'codes', CodeViewSet)
router.register(r'training-data-files', TrainingDataFileViewSet)
router.register(r'training-data', TrainingDataViewSet)
router.register(r'coding-rules', CodingRulesViewSet)
router.register(r'crosswalk-files', CrosswalkFileViewSet)
router.register(r'crosswalk', CrosswalkViewSet)
router.register(r'spell-corrections', SpellCorrectionViewSet)


urlpatterns = []
urlpatterns += router.urls