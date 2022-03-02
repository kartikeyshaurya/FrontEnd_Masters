
from unittest import result
from flask import Flask, jsonify 
app = Flask(__name__)

@app.route("/<string:n>")

def hello():
    return "hello"


@app.route("/bfhl/<string:n>" ,methods= ["POST"])


def hello2(n):
    result = {
        "Status": True,
        "User ID": "john_doe_17091999",
        "Email ID": "john_doe_17091999@xyz.com" ,
        "College Roll Number":"ABCD123", 
        "Array of Numbers": (n),
        "Array of Alphabet" : (n) ,
        
    }
    return jsonify(result)



if __name__ == "__main__":
    app.run()
