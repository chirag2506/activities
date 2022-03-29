from sqlalchemy.orm import Session
import models, schemas
from auth.hash import hash_password as hashIt
from apis.sqliteConnector import SqliteConnector

database = SqliteConnector("database.db")


def get_student(db: Session, id: int):
    # return db.query(models.Student).filter(models.Student.id == id).first()
    details = database.read(id, "students")
    student = schemas.StudentCreate(id=details[0],
                                    name=details[1],
                                    student_class=details[2],
                                    marks=details[3],
                                    password=details[4])
    return student

def create_student(db: Session, student: schemas.StudentCreate):
    hashed_password = hashIt(student.password)
    student_dict = student.dict()
    student_dict["password"] = hashed_password
    db_student = models.Student(**student_dict)
    db.add(db_student)
    db.commit()
    db.refresh(db_student)

    # hashed_student = schemas.StudentCreate(name=student_dict["name"],
    #                                        student_class=student_dict["student_class"],
    #                                        marks=student_dict["marks"],
    #                                        password=student_dict["password"])
    # database.

    return db_student

def delete_student(db: Session, id: int):
    student = db.get(models.Student, id)
    db.delete(student)
    db.commit()
    return student

def update_student(db: Session, id: int, studentNew: schemas.StudentUpdate):
    student = db.get(models.Student, id)
    studentNewData = studentNew.dict(exclude_unset=True)
    for key, value in studentNewData.items():
        setattr(student, key, value)
    db.add(student)
    db.commit()
    db.refresh(student)
    return student