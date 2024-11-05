# Password Generator with Django Unicorn

## Description

![unicorn_pass](https://github.com/hydrospirt/unicorn_pass/blob/master/info/scs.gif?raw=true)

This project is a password generator developed using Django and Django Unicorn. Django Unicorn is a framework for creating interactive web applications in Django, which allows you to easily add dynamic elements to your pages without the need to write JavaScript.

## Key Features

![unicorn_pass_photo](https://github.com/hydrospirt/unicorn_pass/blob/master/info/sc.jpg?raw=true)

- **Password Generation**: Users can generate random passwords with various parameters such as password length, use of digits, letters, and special characters.
- **Interactivity**: Thanks to Django Unicorn, users can customize the password generation parameters and see the result instantly without page reload.
- **Ease of Use**: The project interface is intuitive and easy to configure.

## Installation and Running

### Requirements

- Python 3.12+
- Django 5.1+
- Django Unicorn

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:hydrospirt/unicorn_pass.git
   cd unicorn_pass
   ```

2. Create a virtual environment and activate it:

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # For Linux/MacOS
   venv\Scripts\activate  # For Windows
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Create a .env file:

   ```bash
   touch .env
   # Write the following into it:
   DEBUG=True # False for production server
   ALLOWED_HOSTS=127.0.0.1,localhost
   SECRET_KEY=django-insecure-hib515um%xfvyne7gy-ll+=0uajnrx@n6ih+4rrq1)zvu1o!!v # example

   ```

6. Run the development server:

   ```bash
   python manage.py runserver
   ```

7. Open your browser and go to `http://127.0.0.1:8000/` to access the password generator.

## License

This project is distributed under the MIT license. See the `LICENSE` file for details.

## Contacts

If you have any questions or suggestions, please feel free to contact me.

---

Thank you for using our password generator! We hope it will be useful for you.

---
