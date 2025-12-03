from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.conf import settings
from .models import Resource


@csrf_exempt
def upload_resource_api(request):
    if request.method != "POST":
        return JsonResponse({"error": "Method not allowed"}, status=405)

    counsellor_id = request.POST.get("counsellorId")
    client_id = request.POST.get("clientId")
    title = request.POST.get("title")
    file = request.FILES.get("file")
    link = request.POST.get("link")

    try:
        counsellor = User.objects.get(id=counsellor_id)
        client = User.objects.get(id=client_id)
    except User.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)

    resource = Resource(
        counsellor=counsellor,
        client=client,
        title=title,
        file=file,
        link=link,
        file_type=file.content_type if file else "",
    )
    resource.save()

    return JsonResponse({
        "message": "Resource uploaded successfully.",
        "resource": {
            "title": resource.title,
            "fileUrl": resource.file.url if resource.file else None,
            "link": resource.link,
            "uploadDate": resource.upload_date,
        }
    })

def client_resources_api(request, client_id):
    resources = Resource.objects.filter(client_id=client_id).order_by("-upload_date")

    data = []
    for r in resources:
        data.append({
            "title": r.title,
            "fileUrl": r.file.url if r.file else None,
            "link": r.link,
            "uploadDate": r.upload_date,
        })

    return JsonResponse(data, safe=False)