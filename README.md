Pasos para Backend:

Abrir CMD en carpeta 

 - Creación del Entorno Virtual:
	python -m venv env
	env\Scripts\activate

- Instalación Django:
	pip install django==5.0.1
	pip install djangorestframework

 - Instalación de Dependencias
	pip install -r requirements.txt

- Posicionarse en la carpeta blog Project
	cd blog_project

- Ejecuta las migraciones para configurar la base de datos:
	python manage.py makemigrations
	python manage.py migrate
	
- Crear un Superusuario
	python manage.py createsuperuser

- Iniciar el Servidor
	python manage.py runserver


Pasos para Frontend:

Abrir CMD en carpeta 

- Navegar al Directorio del Proyecto:
	cd my-blog-frontend

- Instalar las Dependencias:
	npm install

- Configurar React-Router:
	npm install react-router-dom@6

-  Instalar una Biblioteca de Componentes (Opcional)
	npm install @mui/material @emotion/react @emotion/styled

- Instalar django-cors-headers
	pip install django-cors-headers


- Iniciar Aplicación
	npm run dev
