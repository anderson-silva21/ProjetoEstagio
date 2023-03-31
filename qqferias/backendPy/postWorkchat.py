#meu id workplace = 100089253670015

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
        "text":"test"
    }
}