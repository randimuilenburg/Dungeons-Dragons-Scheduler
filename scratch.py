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

# url = "http://localhost:4000/api/users/1/characters/1"
url = "http://localhost:4000/api/upload"

# Create a dictionary to hold JSON data
json_data = {
   "characterId": 1,
}

# Use 'multipart/form-data' to send both JSON data and the file
# data = {
#     'json': (None, json.dumps(json_data), 'application/json'),
#     'file': ('Randiplayerimg.jpg', binary_data, 'image/jpeg'),
# }

# Make a POST request with multipart/form-data
response = requests.post(url, files={"image": ('Randiplayerimg.jpg', binary_data, 'image/jpeg')})


if response.status_code == 200:
    print("Image uploaded successfully!")
else: 
    print("Error: Uploading image failed.", response.text)

# print(response.text)
