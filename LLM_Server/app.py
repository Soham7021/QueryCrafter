import torch
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    pipeline,
    BitsAndBytesConfig
)
from peft import LoraConfig, PeftModel
use_4bit = True
bnb_4bit_compute_dtype = "float16"
bnb_4bit_quant_type = "nf4"
use_nested_quant = False
device_map = {"": 0}

compute_dtype = getattr(torch, bnb_4bit_compute_dtype)

bnb_config = BitsAndBytesConfig(
    load_in_4bit=use_4bit,
    bnb_4bit_quant_type=bnb_4bit_quant_type,
    bnb_4bit_use_double_quant=use_nested_quant,
    bnb_4bit_compute_dtype=compute_dtype,
)

tokenizer = AutoTokenizer.from_pretrained("NousResearch/Llama-2-7b-chat-hf", trust_remote_code=True)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"

base_model = AutoModelForCausalLM.from_pretrained(
    "NousResearch/Llama-2-7b-chat-hf",
    quantization_config=bnb_config,
    low_cpu_mem_usage=True,
    return_dict=True,
    device_map=device_map,
    trust_remote_code=True,
    torch_dtype=compute_dtype
)

adapter = "Soham7021/text-sql-llm_Lama"
model = PeftModel.from_pretrained(base_model, adapter)

model.merge_and_unload()

def text_to_sql(inst,context):
    prompt = f'Prompt: {inst} Context: {context}'
    pipe = pipeline(task="text-generation", model=model, tokenizer=tokenizer, max_length=500)
    result = pipe(f"<s>[INST] {prompt} [/INST]")
    return result[0]['generated_text'].split('[/INST]')[1].split(';')[0]

from flask import Flask, request, jsonify

# Define the Flask app
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Colab!"

@app.route('/api/query', methods=['POST'])
def process_query():
    user_query = request.json.get('query', '')
    user_context = request.json.get('context', '')
    result = text_to_sql(user_query, user_context)
    response = {
        'sql_query': result
    }
    return jsonify(response)

# Function to run Flask app
if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")


