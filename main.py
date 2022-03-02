
from flask import Flask, jsonify 
app = Flask(__name__)

@app.route("/")

def hello():
    return "hello"

if __name__ == "main":
    app.run(debug= True)
