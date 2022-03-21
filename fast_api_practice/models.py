import sqlalchemy as sql
import sqlalchemy.orm as orm
import database as database
from database import Base

class Student(database.Base):
    __tablename__ = "students"
    id = sql.Column(sql.Integer, primary_key=True, index=True)
    name = sql.Column(sql.String)
    student_class = sql.Column(sql.String)
    marks = sql.Column(sql.Integer)
    password = sql.Column(sql.String)