from fastapi import FastAPI
from pydantic import BaseModel
import requests

app = FastAPI()

#meu id workplace = 100089253670015
@app.post("/send-message")
async def send_message():
    url = "https://graph.facebook.com/v4.0/me/messages"

    token = 'DQVJzbi1raTJheGV6Ump4NE5RYUVUTTZAwNGx5dmdJOE00VTRDUHR6RjVxdTdYOHYtaTcxQW9pVHBhOVhiTW9BQkdrU3A3dUdpOU1EQ0ZAfeU1HaHloSGZAuVGFNQkctSlhMVjJHUHZAMcU82OG90dG5heE9uLW9YSTlOdExBWU8zVnNybm5vMU5kMEFoalBDRUZAvNlkyVG5PSlhqWTEtaWZAyazJ3di0yTTJ1aEdmTG5JMTRTd0tUWFlpb3ctSWFDNndpUWh3OXdn'

    headers = {
        'Authorization':f'Bearer {token}',
        'Content-Type':'application/json'
    }

    data = {
        "messaging_type":"UPDATE",
        "recipient":{
            "id":100089253670015
        },
        "message": {
            "text":"Olá!<br>Você possui uma nova solicitação de férias de um de seus funcionarios!<br>Acesse http://localhost:3000/login"
        }
    }
    response = requests.post(url, headers=headers, json=data)
    return {"status": response.status_code, "response": response.json()}

