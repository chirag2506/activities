from typing import Optional, List
from uuid import UUID
import uuid
from pydantic import BaseModel
from enum import Enum

class Gender(str, Enum):
    male = "male"
    female = "female"

class Role(str, Enum):
    admin = "admin"
    user = "user"
    student = "student"

class User(BaseModel):
    id: Optional[UUID] = uuid.uuid4()
    first_name: str
    last_name: str
    gender: Gender
    roles: List[Role]