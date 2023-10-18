from PIL import Image
import io
import requests
import json

# Open an image file
image = Image.open('/home/dingodev/dungeon-scheduler/src/Images/Randiplayerimg.jpg')

# Serialize the image to binary data
with io.BytesIO() as buffer:
    image.save(buffer, format="JPEG")
    binary_data = buffer.getvalue()

url = "http://localhost:4000/api/users/1/characters/1"

# Create a dictionary to hold JSON data
json_data = {
    "isCool": True,
}

# Use 'multipart/form-data' to send both JSON data and the file
data = {
    'json': (None, json.dumps(json_data), 'application/json'),
    'file': ('Randiplayerimg.jpg', binary_data, 'image/jpeg'),
}

# Make a POST request with multipart/form-data
response = requests.put(url, files=data)

print(response.text)
