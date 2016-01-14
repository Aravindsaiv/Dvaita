from flask import Flask, request, render_template, redirect, url_for,g, flash

app = Flask(__name__)
app.config.from_object('config')

@app.route('/', methods=['GET', 'POST'])
def index():
	return render_template('index.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5050)