#fastAPI, uvicorn[standard], npm install uuid

from fastapi import FastAPI, HTTPException
from typing import List
import uuid
from uuid import UUID
from models import User, Gender, Role

app = FastAPI()

db: List[User] = [
    User(
        id=UUID("7be937b1-4fb6-487b-8fda-bed3098bdb63"),
        first_name='Chirag',
        last_name='Gupta',
        gender=Gender.male,
        roles=[Role.student]
    ),
    User(
        id=UUID("d6a6e5cd-8c7a-4e31-854b-48991a4fd228"),
        first_name='Aadhya',
        last_name='Gupta',
        gender=Gender.female,
        roles=[Role.user, Role.admin]
    )
]

@app.get("/")
def root():
    return {"Hello":"World!"}

@app.get("/users")
def fetch_users():
    return db

@app.post("/users")
async def register_user(user: User):
    db.append(user)
    return {"id": user.id}

@app.delete("/users/{user_id}") #user_id is path variable
def delete_user(user_id: UUID): #takes user of UUID type
    for user in db:
        if user.id == user_id:
            db.remove(user)
            return
    raise HTTPException(
        status_code = 404,
        detail = f"user with id: {user_id} does not exist"
    )

#need to learn push(update) too