import requests
import pandas as pd
import openpyxl
from typing import List
from datetime import date

from fastapi import FastAPI
from pydantic import BaseModel

#conectar e enviar email
import smtplib

#criar email
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

class RelatorioRequest(BaseModel):
    funcionarios: List[dict]
    data_inicio: date
    data_fim: date

app = FastAPI()

@app.post("/send-email")
async def send_email():
    try:
        #def informacoes necessarias
        host = '10.0.0.241'
        port = 25
        email_de = 'qqtech-alunos@quero-quero.com.br'
        email_para = ['anderson.silva@verdecard.com.br']

        #cria mensagem
        email_body = 'Olá!<br>Você possui uma nova solicitação de férias de um de seus funcionarios!<br>Acesse http://localhost:3000/login'

        msg = MIMEText(email_body, 'html')

        msg['Subject'] = "Nova Solicitação"
        msg['From'] = email_de
        msg['To'] = ', '.join(email_para)

        #envia mensagem
        s = smtplib.SMTP(host, port)
        s.ehlo()
        s.sendmail(email_de, email_para, msg.as_string())
        s.quit()
        
        return {"status": 200, "message": "Email enviado com sucesso!"}
    except Exception as e:
        return {"status": 500, "message": f"Erro ao enviar email: {str(e)}"}

@app.post("/gerar_relatorio")
async def gerar_relatorio(request_body: RelatorioRequest):
    
    df = pd.DataFrame([a.dict() for a in RelatorioRequest.funcionarios])

    # Criar planilha de agendamentos pendentes
    writer = pd.ExcelWriter('relatorio.xlsx', engine='openpyxl')
    pendentes = df[df["status"] == "Pendente"]
    pendentes.to_excel(writer, index=False, sheet_name='Pendentes')

    # Criar planilha de agendamentos aprovados
    aprovados = df[df["status"] == "Aprovado"]
    aprovados.to_excel(writer, index=False, sheet_name='Aprovados')

    # Criar planilha de agendamentos reprovados
    reprovados = df[df["status"] == "Reprovado"]
    reprovados.to_excel(writer, index=False, sheet_name='Reprovados')

    writer.save()
    return {"message": "Relatório gerado com sucesso!"}

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
            "id":100089253670015 #meu id workplace = 100089253670015
        },
        "message": {
            "text":"Olá! Você possui uma nova solicitação de férias de um de seus funcionarios! Acesse QQFérias, disponível em: http://localhost:3000/login"
        }
    }
    response = requests.post(url, headers=headers, json=data)
    return {"status": response.status_code, "response": response.json()}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)