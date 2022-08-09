from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data', methods=['GET', 'POST'])
def data():
    if request.method == 'GET':
        gbutton_value = request.args.get('gbutton_key')
        return jsonify('I received '+str(gbutton_value))
    elif request.method == 'POST':
        pbutton_value = request.form['pbutton_key']
        return jsonify('I received '+str(pbutton_value))

if __name__ == '__main__':
    app.run()