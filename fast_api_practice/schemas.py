from typing import Optional, List
from uuid import UUID
import uuid
from pydantic import BaseModel
from enum import Enum
from sqlalchemy.orm import Session
import models
from auth.hash import hash_password as hashIt

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

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'gender': self.gender,
            'roles': self.roles
        }

class StudentBase(BaseModel):
    name: str
    student_class: str
    marks: int

class StudentCreate(StudentBase):
    id: str
    password: str

class Student(StudentBase):
    id: str

    class Config:
        orm_mode = True

class StudentUpdate(BaseModel):
    name: Optional[str] = None
    student_class: Optional[str] = None
    marks: Optional[int] = None