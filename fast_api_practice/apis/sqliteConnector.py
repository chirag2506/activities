import sqlite3

class SqliteConnector():
    def __init__(self, dbpath):
        self.dbPath = dbpath

    def read(self, id, table):
        conn = sqlite3.connect(self.dbPath)
        cursor = conn.cursor()
        query = "SELECT * from " + table + " where id=" + str(id) + ";"
        cursor.execute(query)
        student_details = cursor.fetchall()[0]
        # cnt.commit()
        cursor.close()
        return student_details

    def write(query, expected_response):
        return

    def bulkWrite(query, expected_response):
        return

    def delete(query, expected_response):
        return

    def update(query, expected_response):
        return  
