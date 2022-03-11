from fastapi import APIRouter, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import uuid
from uuid import UUID
from models import User, Gender, Role
from typing import List
import pandas as pd
import json

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

@user_router.api_route("/users", methods=['GET', 'POST'])
async def fetch_users(request: Request):
    df = pd.DataFrame.from_records([s.to_dict() for s in db])
    df = df.to_html(index=False)
    # return(db)
    return templates.TemplateResponse("user.html", {"request": request, "users": df})

@user_router.post("/new_user")
# async def register_user(user: User):
#     db.append(user)
#     return {"id": user.id}
async def open_new_user_page(request: Request):
    return templates.TemplateResponse("addUser.html", {"request": request})

@user_router.post("/added_successfully")
async def register_user(request: Request, first_name: str = Form(...), last_name: str = Form(...)):
    # print(first_name)
    # print(last_name)
    db.append(User(
        id=uuid.uuid4(),
        first_name=first_name,
        last_name=last_name,
        gender=Gender.male,
        roles=[Role.student]
    ))
    return templates.TemplateResponse("addedSuccessfully.html", {"request": request})


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