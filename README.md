# Teste-java-web-hbsis
Spring Boot Api

# front-end
- Angular js
- Bootstrap

# back-end
- Java

# database
- MySql 

# Requisitos
jdk 1.8, maven 3.3+, springboot 2.1.4, mysqlServer, Wamp server 

# Instalação
* Preparando banco:
  - instalar wampserver
  - instalar mysql workbench 8.0
  - iniciar wampserver
  - iniciar mysql workbench, verificar conexão com localhost: 3306
  - executar script para criar a tabela:
      CREATE TABLE cidade(id INT(11) AUTO_INCREMENT, nome VARCHAR(200), pais VARCtestHAR(200), PRIMARY KEY (id));
      
* Executar localmente
  Você precisará executá-lo a partir da pasta do projeto que contém o arquivo pom.xml.
  Comandos:
   - mvn install
   - mvn spring-boot: run
  Abra seu navegador no link : http://localhost:8080/index.html#!/







