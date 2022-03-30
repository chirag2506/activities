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
        cursor.close()
        return student_details

    def write(self, user_keys, user_details, table):
        conn = sqlite3.connect(self.dbPath)
        cursor = conn.cursor()
        query = "INSERT INTO " + table + " " + str(user_keys) + " VALUES " + str(user_details) + ";"
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()
        return True
        # handling error to be done

    # def bulkWrite(self, users, table):

    #     return

    def delete(self, id, table):
        conn = sqlite3.connect(self.dbPath)
        cursor = conn.cursor()
        query = "SELECT * from " + table + " where id=" + str(id) + ";"
        cursor.execute(query)
        student_details = cursor.fetchall()[0]
        cursor.close()
        return student_details

    def update(query, expected_response):
        return  
