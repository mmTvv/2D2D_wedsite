from flask import Flask, render_template, request
from flask_babel import Babel

app = Flask(__name__)

# Настройка доступных языков
LANGUAGES = {
    'en': 'English',
    'ru': 'Русский'
}

app.config['BABEL_DEFAULT_LOCALE'] = 'en'
app.config['BABEL_TRANSLATION_DIRECTORIES'] = 'translations'

# Функция для определения языка
def get_locale():
    return request.accept_languages.best_match(LANGUAGES.keys())

# Инициализация Babel с функцией выбора языка
babel = Babel(app, locale_selector=get_locale)

# Сделаем функцию глобальной для использования в шаблонах
app.jinja_env.globals['get_locale'] = get_locale

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/news')
def news():
    return render_template('news.html')

@app.route('/donate')
def donate():
    return render_template('donate.html')

@app.route('/help')
def help_page():
    return render_template('help.html')

if __name__ == "__main__":
    app.run(debug=True)
