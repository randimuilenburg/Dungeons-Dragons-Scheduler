from PIL import Image
import io
import requests

# Open an image file
image = Image.open('/home/dingodev/dungeon-scheduler/src/Images/Randiplayerimg.jpg')

# Serialize the image to binary data
with io.BytesIO() as buffer:
    image.save(buffer, format="JPEG")
    binary_data = buffer.getvalue()

url = "http://localhost:4000/api/users/1/characters/1"

# Convert binary image data to base64 (optional, for JSON payload)
import base64
base64_image = base64.b64encode(binary_data).decode('utf-8')

body = {
    "imageBinary": base64_image,
    # Include other data as needed
    # "name": "Rhubarb Bellator Skyshocker",
    # "nickname": "Barb",
    # "information": {
    #     "race": "Dragonborn",
    #     "class": "Barbarian",
    #     "background": "Solider",
    #     "skills": "Athletics, Intimidation, Perception",
    #     "languages": "Draconic, Common",
    #     "alignment": "Chaotic Good",
    #     "inUse": True
    # }
}

headers = {'Content-Type': 'application/json'}

r = requests.put(url, json=body, headers=headers)

print(r.text)
