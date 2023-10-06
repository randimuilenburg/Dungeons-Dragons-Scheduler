# how to run: python3 scratch.py


import requests

url = "http://localhost:4000/api/users/1/characters/1"


# TODO: Make an image binary before sending

body = {
    "imageBinary": "TESTO",
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

r = requests.put(url, json=body)

print(r.text)