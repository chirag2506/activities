from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import uuid
from uuid import UUID
from models import User, Gender, Role
from typing import List
import pandas as pd

templates = Jinja2Templates(directory = "templates")

user_router = APIRouter()

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

@user_router.get("/users")
async def fetch_users(request: Request):

    # df = pd.DataFrame(db)
    # column = df.columns
    # print(df)
    # # df = df.to_html()
    # return(db)
    return templates.TemplateResponse("user.html", {"request": request, "users": db})

@user_router.post("/users")
async def register_user(user: User):
    db.append(user)
    return {"id": user.id}

@user_router.delete("/users/{user_id}") #user_id is path variable
def delete_user(user_id: UUID): #takes user of UUID type
    for user in db:
        if user.id == user_id:
            db.remove(user)
            return
    raise HTTPException(
        status_code = 404,
        detail = f"user with id: {user_id} does not exist"
    )