import json
import re
from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def analyze_text(message):

    prompt = f"""
Return ONLY valid JSON without markdown or backticks:

{{
  "sentiment": "Positive/Negative/Neutral",
  "emotion": "Happy/Sad/Angry/Neutral"
}}

Text: {message}
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}]
    )

    content = response.choices[0].message.content

    print("RAW AI RESPONSE:", content)  #  debug

    #  REMOVE ```json or ``` if present
    content = re.sub(r"```.*?```", "", content, flags=re.DOTALL).strip()

    try:
        return json.loads(content)
    except Exception as e:
        print("JSON PARSE ERROR:", e)

        return {
            "sentiment": "Neutral",
            "emotion": "Neutral"
        }