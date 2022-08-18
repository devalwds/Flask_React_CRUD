from flask import Flask

app = Flask('__name__')

#Users API route
@app.route('/list')
def list():
	return {'list': ['User 1', 'User 2', 'User 3']}


if __name__ == '__main__':
	app.run(debug = True)	