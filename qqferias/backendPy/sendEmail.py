#conectar e enviar email
import smtplib

#criar email
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

#def informacoes necessarias
host = '10.0.0.241'
port = 25
email_de = 'qqtech-alunos@quero-quero.com.br'
email_para = ['anderson.silva@verdecard.com.br']

#cria mensagem
email_body = 'Olá!<br>isso é um <b>teste</b>!.'

msg = MIMEText(email_body, 'html')

msg['Subject'] = "Teste QQ Tech"
msg['From'] = email_de
msg['To'] = ', '.join(email_para)

#envia mensagem
s = smtplib.SMTP(host, port)
s.ehlo()
s.sendmail(email_de, email_para, msg.as_string())
s.quit()