#подготовить порт
sudo firewall-cmd --add-port=8717/tcp
sudo firewall-cmd --reload

#запуск docker
sudo systemctl enable docker
sudo systemctl start docker

#сборка
sudo docker build -t mylibrary .

