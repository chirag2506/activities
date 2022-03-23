from sqlalchemy.orm import Session
import models, schemas

def get_student(db: Session, id: int):
    return db.query(models.Student).filter(models.Student.id == id).first()

def create_student(db: Session, student: schemas.StudentCreate):
    hashed_password = student.password + "hash"
    student_dict = student.dict()
    student_dict["password"] = hashed_password
    db_student = models.Student(**student_dict)
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
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