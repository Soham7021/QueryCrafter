# QueryCrafter
This is the project which implements the Natural Language to the SQL Query Generator which applies on our database and retrieve the data


# Natural Language to SQL Query Generator

## Overview

This project utilizes the LLaMA-2 model with 7 billion parameters to convert natural language queries into SQL commands. The model has been fine-tuned using advanced techniques and is deployed via a Flask web application. The system allows users to select database tables, input natural language queries, and receive SQL query results directly.

## Features

- **Natural Language Processing**: Converts user input into SQL queries using a fine-tuned LLaMA-2 model.
- **Web Application**: Built with Flask, HTML, CSS, and JavaScript.
- **Database Integration**: Executes SQL queries and returns results.
- **Model Deployment**: Hosted on a Tensor Dock virtual machine with GPU support.

## Technical Details

### Model Fine-Tuning

1. **Base Model**: LLaMA-2 with 7 billion parameters.
2. **Techniques Used**: LORA and QLORA.
3. **Training Environment**: Kaggle notebook with dual T4 GPUs.
4. **Training Duration**: Approximately 8 hours.
5. **Model Hosting**: Hugging Face.

### Deployment

1. **Deployment Environment**: Virtual machine from Tensor Dock GPU providers.
2. **Setup**:
   - Jupyter Lab initialized.
   - Flask application for serving the model.

### Web Application

1. **Frontend**: Developed using HTML, CSS, and JavaScript.
2. **User Interface**:
   - Dropdown menu for selecting tables.
   - Text box for natural language queries.
3. **Backend Integration**:
   - API endpoint for processing queries.
   - SQL execution and result retrieval.

## Code Overview

### Model Loading

```python
from transformers import AutoModelForCausalLM

# Load the fine-tuned model
model = AutoModelForCausalLM.from_pretrained('path_to_finetuned_model')
