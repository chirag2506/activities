#fastAPI, uvicorn[standard], npm install uuid, jinja2, python-multipart

from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from typing import List
import uuid
from uuid import UUID
from models import User, Gender, Role
from apis.home import home_router
from apis.users import user_router

app = FastAPI()
app.include_router(home_router)
app.include_router(user_router)
app.mount("/static", StaticFiles(directory="static"), name="static")

# @app.get("/")
# def root():
#     return {"Hello":"World!"}