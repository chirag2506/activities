import sqlite3

class SqliteConnector():
    def __init__(self, dbpath):
        self.dbPath = dbpath

    def read(self, id, table):
        conn = sqlite3.connect(self.dbPath)
        cursor = conn.cursor()
        query = "SELECT * from " + table + " where id=" + str(id) + ";"
        cursor.execute(query)
        
        fetch = cursor.fetchall()
        if(len(fetch)==0):
            return None
            
        student_details = fetch[0]
        cursor.close()
        return student_details

    def write(self, user_keys, user_details, table):
        conn = sqlite3.connect(self.dbPath)
        cursor = conn.cursor()
        query = "INSERT INTO " + table + " " + str(user_keys) + " VALUES " + str(user_details) + ";"
        cursor.execute(query)
        conn.commit()
        cursor.close()
        return True
        # handling error to be done

    # def bulkWrite(self, users, table):

    #     return

    def delete(self, id, table):
        conn = sqlite3.connect(self.dbPath)
        cursor = conn.cursor()
        query = "SELECT * from " + table + " where id=" + str(id) + ";"
        cursor.execute(query)

        fetch = cursor.fetchall()
        if(len(fetch)==0):
            return None
        student_details = fetch[0]

        query = "DELETE from " + table + " where id=" + str(id) + ";"
        cursor.execute(query)
        conn.commit()
        cursor.close()
        return student_details

    def update(self, keys, values, id, table):
        conn = sqlite3.connect(self.dbPath)
        cursor = conn.cursor()

        query = "SELECT * from " + table + " where id=" + str(id) + ";"
        cursor.execute(query)
        fetch = cursor.fetchall()
        if(len(fetch)==0):
            return None

        query = "UPDATE " + table + " SET "
        for key in keys:
            query += key + "= ? ,"
        query = query[:len(query)-2]
        query += " WHERE id=" + str(id) + ";"
        cursor.execute(query, values)
        conn.commit()
        query = "SELECT * from " + table + " where id=" + str(id) + ";"
        cursor.execute(query)
        student_new_details = cursor.fetchall()[0]
        cursor.close()
        return student_new_details
