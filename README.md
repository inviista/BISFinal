# Food Tracker App

## Overview
Food Tracker App is a web application that allows users to track their daily food intake, manage nutritional information, and monitor their health goals. The app is built using **React** for the front-end and **Django** for the back-end.

## Features
- **User Authentication**: Sign up, log in, and manage user profiles.
- **Food Logging**: Add, edit, and delete food entries.
- **Nutritional Analysis**: View calorie, macronutrient, and micronutrient breakdowns.
- **Dashboard**: Visualize daily and weekly food intake trends.
- **Search**: Search for food items from a database or API.
- **Custom Goals**: Set and track personalized health and dietary goals.

## Tech Stack
- **Front-end**: React, React Router, Axios
- **Back-end**: Django, Django REST Framework
- **Database**: PostgreSQL
- **Others**: JWT for authentication, Chart.js for data visualization

## Installation

### Prerequisites
- Node.js and npm
- Python (version 3.8 or higher)
- PostgreSQL

### Backend Setup (Django)
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/food-tracker-app.git
   cd food-tracker-app/backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure the database in `settings.py`:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'food_tracker',
           'USER': 'your_username',
           'PASSWORD': 'your_password',
           'HOST': 'localhost',
           'PORT': '5432',
       }
   }
   ```
5. Run migrations and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend Setup (React)
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Environment Variables
Create `.env` files for both the front-end and back-end:

#### Backend (`backend/.env`):
```
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=your_database_url
```

#### Frontend (`frontend/.env`):
```
REACT_APP_API_URL=http://localhost:8000/api
```

## Usage
1. Start the Django back-end server.
2. Start the React front-end development server.
3. Open your browser and navigate to `http://localhost:3000` to use the app.

## Project Structure

### Backend (`backend/`)
- **`api/`**: Contains the Django REST Framework API.
- **`models.py`**: Defines the database schema.
- **`views.py`**: Handles API endpoints.

### Frontend (`frontend/`)
- **`src/components/`**: Reusable React components.
- **`src/pages/`**: Page-level components (e.g., Dashboard, Login).
- **`src/services/`**: Axios API calls.
- **`src/context/`**: Context for global state management.

## Testing
- **Backend**:
  Run Django tests:
  ```bash
  python manage.py test
  ```
- **Frontend**:
  Run React tests:
  ```bash
  npm test
  ```
