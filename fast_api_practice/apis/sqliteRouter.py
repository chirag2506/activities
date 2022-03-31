from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
import models, schemas
from typing import List
from apis import crud
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

sqlite_router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
# We need to have an independent database session/connection (SessionLocal) per request, 
# use the same session through all the request and then close it after the request is finished.

templates = Jinja2Templates(directory = "templates")

@sqlite_router.post("/sqlite", response_model=schemas.Student)
async def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    return crud.create_student(db=db, student=student)

@sqlite_router.post("/sqlite/multiple")
async def create_multiple_students(students: List[schemas.StudentCreate], db: Session = Depends(get_db)):
    objects = []
    for student in students:
        objects.append(crud.create_student(db=db, student=student))
    return {"ok": "inserted multiple students"}

@sqlite_router.api_route("/sqlite/{student_id}", response_model=schemas.Student, methods=['GET', 'POST'])
async def read_student(student_id: int, db: Session = Depends(get_db)):
    db_student = crud.get_student(db, id=student_id)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return db_student

@sqlite_router.post("/enter_student_id")
async def enter_student_id(request: Request):
    return templates.TemplateResponse("enterStudentID.html", {"request": request})

@sqlite_router.delete("/sqlite/{student_id}")
async def delete_student(student_id: int, db: Session = Depends(get_db)):
    db_student = crud.delete_student(db, id=student_id)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return {"Ok": "Deleted"}

@sqlite_router.put("/sqlite/{student_id}", response_model=schemas.Student)
async def update_student(student_id: int, studentNew: schemas.StudentUpdate, db: Session = Depends(get_db)):
    db_student = crud.update_student(db, id=student_id, studentNew=studentNew)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return db_student