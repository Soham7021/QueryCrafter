

# QueryCrafter: Natural Language to SQL Query Generator

## Overview

**QueryCrafter** is a web application that converts natural language queries into SQL commands using a fine-tuned LLaMA-2 model. The application allows users to select database tables, input queries in natural language, and receive SQL query results directly. This tool is designed to simplify interaction with databases, making it accessible to non-technical users.

The project consists of:
- A **backend** built with Flask to serve the model and handle SQL queries.
- A **frontend** developed with React to provide a user-friendly interface.
- Integration with a fine-tuned **LLaMA-2 model** to perform natural language processing.

## Technologies Used

- **Backend**: Flask
- **Frontend**: React
- **Database**: [Specify your database, e.g., MySQL, PostgreSQL]
- **Model**: LLaMA-2 (7B parameters) fine-tuned with LORA and QLORA techniques
- **Other**: 
  - `transformers`, `accelerate`, `bitsandbytes`, `trl` for model handling
  - **Deployment**: Tensor Dock virtual machine for hosting with GPU support.

## Features

- **Natural Language to SQL**: Translates natural language queries into SQL commands.
- **User Interface**: A simple web interface with dropdowns to select tables and text boxes for user queries.
- **Backend API**: A Flask API to process queries, execute SQL, and return results.
- **Database Integration**: Ability to query database tables dynamically using SQL.
- **Model Deployment**: Hosted on Tensor Dock, utilizing GPU for efficient processing.

## Installation

### Prerequisites

Ensure you have the following installed:
- Python 3.x
- Node.js
- npm (Node Package Manager)

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd [backend-directory]
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the root directory and add necessary variables like database credentials and API keys.

5. **Run the Flask server**:
   ```bash
   flask run
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd [frontend-directory]
   ```

2. **Install the required packages**:
   ```bash
   npm install
   ```

3. **Start the React application**:
   ```bash
   npm start
   ```

## Model Training and Deployment

### Model Fine-Tuning

The model uses **LLaMA-2** with 7 billion parameters and was fine-tuned using **LORA** and **QLORA** techniques.

1. **Base Model**: LLaMA-2 with 7 billion parameters.
2. **Techniques**: LORA and QLORA.
3. **Training Environment**: Dual T4 GPUs on Kaggle.
4. **Training Duration**: Approximately 8 hours.
5. **Hosting**: Model deployed on Hugging Face and Tensor Dock.

### Running the Model

1. **Install dependencies**:
   ```bash
   pip install accelerate==0.21.0 peft==0.4.0 bitsandbytes==0.40.2 transformers==4.31.0 trl==0.4.7 scipy numpy
   ```

2. **Load the model**:
   ```python
   from transformers import AutoModelForCausalLM

   model = AutoModelForCausalLM.from_pretrained('path_to_finetuned_model')
   ```

3. **Execute SQL queries** based on user input via the web interface.

## API Documentation

The Flask backend provides the following endpoints:

1. **POST /api/query**  
   - Request body:  
     ```json
     {
       "table": "table_name",
       "query": "natural language query"
     }
     ```
   - Response: SQL query and execution results.
   
2. [Add more endpoints and details as necessary]

## Usage

- **Backend API**: Accessible at `http://localhost:5000/api`.
- **Frontend application**: Accessible at `http://localhost:3000`.

The user can select tables from the database, input natural language queries, and view results.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Special thanks to the developers of **LLaMA-2** and **Hugging Face** for model support.
- Thanks to **Tensor Dock** for providing GPU resources.

--- 
