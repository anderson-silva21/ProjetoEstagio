import requests
import pandas as pd
import openpyxl
from datetime import date

from fastapi import FastAPI
from pydantic import BaseModel

#conectar e enviar email
import smtplib

#criar email
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

# Definir a estrutura do VacationRequest
class VacationRequest(BaseModel):
    id: int
    nome: str
    data_inicio: date
    data_fim: date
    status: str
    type: str
    feriasStat: str

class datas(BaseModel):
    data: date

class body(BaseModel):
    vacationRequest: VacationRequest
    dataInicio: datas
    dataFim: datas

app = FastAPI()

@app.post("/send-email")
async def send_message():
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

@app.get("/relatorio")
async def cria_relatorio(body: body):
    try:
        # obter os dados do vacationRequest do intervalo de tempo especificado
        df = pd.read_csv('vacationRequest.csv')
        df['start_date'] = pd.to_datetime(df['start_date'])
        df['end_date'] = pd.to_datetime(df['end_date'])
        mask = (df['start_date'] >= body.dataInicio) & (df['end_date'] <= body.dataFim)
        vacation_requests = df.loc[mask].reset_index(drop=True)

        # criar o arquivo de relatório XLSX
        writer = pd.ExcelWriter('relatorio.xlsx', engine='xlsxwriter')
        vacation_requests.to_excel(writer, sheet_name='Férias', index=False)
        writer.save()

        return {"status": 200, "message": "Relatório criado com sucesso!"}
    except Exception as e:
        return {"status": 500, "message": f"Erro ao criar relatório: {str(e)}"}

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